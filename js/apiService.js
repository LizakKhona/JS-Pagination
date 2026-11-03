const BASE_URL = "https://pixabay.com/api/?";
const API_KEY = "57634081-9627dd141c07a4a1b9e473988"

export async function getPhotos(per_page, page) {
  return await fetch(`${BASE_URL}key=${API_KEY}&editors_choice="true"&per_page=${per_page}&page=${page}`)
    .then((response) => response.json())
}