import { Modal } from "./UI/Modal";
import { Map } from "./UI/Map";
import { getCoordsFromAddress, getAddressFromCoords } from "./Util/Location";

class PlaceFinder {
    constructor() {
        const addressForm = document.querySelector("form");
        const locateUserBtn = document.getElementById("locate-btn");
        this.shareBtn = document.getElementById("share-btn");

        locateUserBtn.addEventListener(
            "click",
            this.locateUserHandler.bind(this)
        );
        addressForm.addEventListener(
            "submit",
            this.findAddressHandler.bind(this)
        );
        this.shareBtn.addEventListener("click", this.sharePlaceHandler);
    }

    sharePlaceHandler() {
        const sharedLinkInputElement = document.getElementById("share-link");
        if (!navigator.clipboard) {
            sharedLinkInputElement.select();
            return;
        }

        navigator.clipboard
            .writeText(sharedLinkInputElement.value)
            .then(() => {
                alert("Copied into clipboard!");
            })
            .catch((error) => {
                console.log(error);
                sharedLinkInputElement.select();
            });
    }

    selectPlace(coordinates, address) {
        if (this.map) {
            this.map.render(coordinates);
        } else {
            this.map = new Map(coordinates);
        }

        this.shareBtn.disabled = false;
        const sharedLinkInputElement = document.getElementById("share-link");

        sharedLinkInputElement.value = `${
            location.origin
        }/my-place?address=${encodeURI(address)}&lat=${
            coordinates.latitude
        }&lng=${coordinates.longitude}`;
    }

    locateUserHandler() {
        if (!navigator.geolocation) {
            alert(
                "Location feature is not available in your browser - please use a more modern browser or manually enter an address."
            );
            return;
        }
        const modal = new Modal(
            "loading-modal-content",
            "Loading location - please wait!"
        );
        modal.show();

        navigator.geolocation.getCurrentPosition(
            async (successResult) => {
                const coordinates = {
                    longitude: successResult.coords.longitude,
                    latitude: successResult.coords.latitude,
                };
                try {
                    const address = await getAddressFromCoords(coordinates);
                    this.selectPlace(coordinates, address);
                } catch (error) {
                    alert("Could not fetch address. Please try again!");
                    console.log(error);
                }
                modal.hide();
            },
            (error) => {
                alert(
                    "Could not locate you unfortunately. Please enter an address manually!"
                );
                console.log(error);
                modal.hide();
            }
        );
    }

    async findAddressHandler(event) {
        event.preventDefault();
        const address = event.target.querySelector("input").value;
        if (!address || address.trim().length === 0) {
            alert("Invalid address entered - please try again!");
            return;
        }

        const modal = new Modal(
            "loading-modal-content",
            "Loading location - please wait!"
        );
        modal.show();

        try {
            const coordinates = await getCoordsFromAddress(address);
            this.selectPlace(coordinates, address);
        } catch (error) {
            alert(error.message);
        }

        modal.hide();
    }
}

window.placeFinder = new PlaceFinder();
