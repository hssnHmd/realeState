import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
    const {data} = await axios.get(url, {
      headers: {
        "x-rapidapi-host": "bayut.p.rapidapi.com",
        "x-rapidapi-key": "c3f3651b42msh9c6c0d58f367421p1a535fjsn9192d86df5c3",
      },
    });
    return data;
}