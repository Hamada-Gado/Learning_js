import { Modal } from "./UI/Modal";
import { Map } from "./UI/Map";

class PlaceFinder {
    constructor() {
        const addressForm = document.querySelector("form");
        const locateUserBtn = document.getElementById("locate-btn");
        locateUserBtn.addEventListener(
            "click",
            this.locateUserHandler.bind(this)
        );
        addressForm.addEventListener("submit", this.findAddressHandler);
    }

    selectPlace(coordinates) {
        if (this.map) {
            this.map.render(coordinates);
        } else {
            this.map = new Map(coordinates);
        }
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
            (successResult) => {
                const coordinates = [
                    successResult.coords.longitude,
                    successResult.coords.latitude,
                ];
                this.selectPlace(coordinates);
                modal.hide();
            },
            (_) => {
                alert(
                    "Could not locate you unfortunately. Please enter an address manually!"
                );
                modal.hide();
            }
        );
    }

    findAddressHandler() {}
}

const placeFinder = new PlaceFinder();
