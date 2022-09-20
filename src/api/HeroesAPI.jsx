import axios from "axios"; 

const baseURL = "https://api-heroes-willyas.herokuapp.com";

const heroesAPI = axios.create({baseURL});

export default heroesAPI;