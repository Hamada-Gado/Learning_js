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
const coords = {
    longitude: +queryParams.get("lng"),
    latitude: +queryParams.get("lat"),
}
const address = queryParams.get("address");

new LoadedPlace(coords, address);