import { getPhotos } from "./apiService"
import makeMarkUp from "../templates/photos.hbs"

const photosList = document.querySelector(".photosList");
const loadMoreBtn = document.querySelector(".loadMoreBtn");


const per_page = 5;
let page = 1;
const photos = getPhotos(per_page, page).then(response => makeCards(response))



function makeCards(photos) {    
    const markUp = makeMarkUp(photos.hits)
    photosList.insertAdjacentHTML("beforeend", markUp)
}

loadMoreBtn.addEventListener("click", onLoadMoreBtnClick);
function onLoadMoreBtnClick() {
    page = page + 1
    getPhotos(per_page, page).then((response) => makeCards(response));
}