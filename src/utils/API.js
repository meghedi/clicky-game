import axios from "axios";
//https://api.giphy.com/v1/gifs/search?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&q=cartoon+images&limit=1&offset=0&rating=G&lang=en"
const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=20";

export default {
  getImages: function(query , offset) {
    return axios.get(BASEURL + query + APIKEY + "&limit=10&offset="+ offset +"&rating=G&lang=en");
  }
};