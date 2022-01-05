import "./style.scss";
import images from "./items.js"
import addItem from "./item.js";

const prnt = document.querySelector('.gallery-items'); 
images.forEach((el) => {
    addItem(prnt, el);
})
