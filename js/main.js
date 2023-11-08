import { initializeMenu } from "./modules/menu.js";
import { displayPage } from "./modules/pageDisplay.js";

initializeMenu();

const btnBook = document.querySelector(".btn-book");
const bmwF10Info = document.getElementById("btnBmwF10Info");

btnBook?.addEventListener("click", (event) => {
	event.preventDefault();
	displayPage(btnBook.getAttribute("href"));
});

bmwF10Info?.addEventListener("click", (event) => {
	event.preventDefault();
	displayPage(bmwF10Info.getAttribute("href"));
});
