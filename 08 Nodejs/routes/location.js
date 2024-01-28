require("dotenv").config();

const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const router = express.Router();

const username = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;
const url = `mongodb+srv://${username}:${password}@cluster0.ptgfn7e.mongodb.net/locations?retryWrites=true&w=majority`;

const client = new MongoClient(url);

router.post("/add-location", async (req, res, _) => {
    await client.connect();
    const db = client.db("locations");
    db.collection("user-locations")
        .insertOne({
            address: req.body.address,
            coords: {
                latitude: req.body.latitude,
                longitude: req.body.longitude,
            },
        })
        .then((result) => {
            res.json({
                message: "Stored location!",
                locId: result.insertedId,
            });
            client.close();
        });
});

router.get("/location/:locId", async (req, res, _) => {
    const locationId = req.params.locId;

    await client.connect();
    const db = client.db("locations");
    db.collection("user-locations")
        .findOne({
            _id: new ObjectId(locationId),
        })
        .then((doc) => {
            if (!doc) {
                return res.status(404).json({ message: "Not found!" });
            }
            res.json({
                address: doc.address,
                coordinates: doc.coords,
            });
            client.close();
        });
});

module.exports = router;
