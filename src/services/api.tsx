import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/3.0",
});

export default weatherApi;
