import axios from "axios";

export const api = async (name) => {
    const apiUrl = `https://api.punkapi.com/v2/beers?beer_name=${name}`;

    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}