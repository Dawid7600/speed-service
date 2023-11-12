import { initializeMenu } from "./modules/menu.js";
import { displayPage } from "./modules/pageDisplay.js";

initializeMenu();

const btnBook = document.querySelector(".btn-book");
const carInfoButtons = document.querySelectorAll(".btn-car-info");

const handleButtonClick = (event) => {
	event.preventDefault();

	const pageHref = event.target.getAttribute("href");

	if (pageHref) {
		displayPage(pageHref);
		window.scrollTo(0, 0);
	}
};

btnBook?.addEventListener("click", handleButtonClick);

carInfoButtons.forEach((button) => {
	button.addEventListener("click", handleButtonClick);
});

const zoomedStyles = {
	width: "100%",
	position: "fixed",
	top: "0",
	left: "0",
	zIndex: "9999",
};

document.addEventListener("click", (event) => {
	if (event.target.classList.contains("car__image")) {
		const { src, alt } = event.target;
		const zoomedContainer = createZoomedContainer(src, alt);
		document.body.appendChild(zoomedContainer);

		zoomedContainer.addEventListener("click", () => zoomedContainer.remove());
	}
});

function createZoomedContainer(src, alt) {
	const zoomedImage = document.createElement("img");
	const zoomedContainer = document.createElement("div");

	zoomedImage.src = src;
	zoomedImage.alt = alt;
	zoomedContainer.classList.add("zoomed");

	Object.assign(zoomedContainer.style, zoomedStyles);

	zoomedContainer.appendChild(zoomedImage);

	return zoomedContainer;
}
