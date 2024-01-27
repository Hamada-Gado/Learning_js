export async function getAddressFromCoords(coords) {
    const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json`
    );

    const data = await response.json();

    if (data.error) {
        throw new Error(
            `Could not locate coordinates for the address you entered. Code: ${data.error.code}, Msg: ${data.error.message}`
        );
    }

    if (!response.ok) {
        throw new Error("Failed to fetch coordinates. Please try again!");
    }

    return data.display_name;
}

export async function getCoordsFromAddress(address) {
    const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURI(
            address
        )}&format=json`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch coordinates. Please try again!");
    }

    const data = await response.json();
    if (data.length === 0) {
        throw new Error(
            "Could not locate coordinates for the address you entered. Please try again!"
        );
    }

    return { longitude: data[0].lon, latitude: data[0].lat };
}
