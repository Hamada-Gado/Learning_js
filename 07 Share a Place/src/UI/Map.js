import OlMap from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { useGeographic } from "ol/proj";

export class Map {
    constructor(coords) {
        this.coordinates = coords;
        this.render();
    }

    render() {
        document.getElementById("map").innerHTML = "";
        useGeographic();
        new OlMap({
            target: "map",
            layers: [
                new TileLayer({
                    source: new OSM()
                }),
                new VectorLayer({
                    source: new VectorSource({
                        features: [
                            new Feature({
                                geometry: new Point(this.coordinates),
                            }),
                        ],
                    }),
                }),
            ],
            view: new View({
                center: this.coordinates,
                zoom: 8,
            }),
        });
    }
}
