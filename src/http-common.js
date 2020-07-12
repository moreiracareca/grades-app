import axios from "axios";

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: "https://grades-api-12-10-1981.herokuapp.com:443/",
  headers: {
    "Content-type": "application/json",
  },
});