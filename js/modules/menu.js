export function initializeMenu() {
	const navList = document.querySelector(".nav__list");
	const btnHamburger = document.querySelector(".btn-hamburger");

	btnHamburger?.addEventListener("click", (event) => {
		event.stopPropagation();
		navList.classList.toggle("nav__list-is-active");
	});

	document.addEventListener("click", (event) => {
		if (
			!navList.contains(event.target) &&
			!btnHamburger.contains(event.target)
		) {
			navList.classList.remove("nav__list-is-active");
		}
	});
}
