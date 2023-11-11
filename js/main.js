import { initializeMenu } from "./modules/menu.js";
import { displayPage } from "./modules/pageDisplay.js";

initializeMenu();

const btnBook = document.querySelector(".btn-book");
const carInfoButtons = document.querySelectorAll(".btn-car-info");

function handleButtonClick(event) {
	event.preventDefault();

	const pageHref = event.target.getAttribute("href");

	if (pageHref) {
		displayPage(pageHref);
		window.scrollTo(0, 0);
	}
}

btnBook?.addEventListener("click", handleButtonClick);

carInfoButtons.forEach((button) => {
	button.addEventListener("click", handleButtonClick);
});
