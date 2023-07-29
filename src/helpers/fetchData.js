import axios from "axios";

export const fetchData = async () => {
    
    const apiUrl = 'https://api.punkapi.com/v2/beers?page=1&per_page=80'
    try {
        const response = await axios.get(apiUrl)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}