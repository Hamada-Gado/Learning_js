import { Map } from "./UI/Map";
class LoadedPlace {
    constructor(coordinates, address) {
        new Map(coordinates);
        const headerTitleEl = document.querySelector("header h1");
        headerTitleEl.textContent = address;
    }
}

const url = new URL(location.href);
const queryParams = url.searchParams;
const locId = queryParams.get("locationId");
fetch("http://localhost:3000/location/" + locId)
    .then((response) => {
        if (response.status === 404) {
            throw new Error("Could not find location!");
        }
        return response.json();
    })
    .then((data) => {
        new LoadedPlace(data.coordinates, data.address);
    })
    .catch((error) => {
        alert("Could not find location!");
        console.log(error);
    });
