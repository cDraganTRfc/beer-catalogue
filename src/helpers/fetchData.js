import axios from "axios";

export const fetchData = async (page, perPage) => {
    
    const apiUrl = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`;

    try {
        const response = await axios.get(apiUrl)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}