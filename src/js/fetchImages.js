import axios from "axios";

export default async function fetchImages(inputValue, pageNr) {
  return await axios.get(`https://pixabay.com/api/?key=29588079-fbc492831fdad231bf7222b96&q=${inputValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${pageNr}`).then(response => response.data);
}