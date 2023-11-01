const navList = document.querySelector(".nav__list");
const btnHamburger = document.querySelector(".btn-hamburger");
const btnBook = document.querySelector(".btn-book");
const formContainer = document.getElementById("formContainer");
const overlay = document.getElementById("overlay");

btnHamburger.addEventListener("click", function (event) {
	event.stopPropagation();
	navList.classList.toggle("nav__list-is-active");
});

document.addEventListener("click", function (event) {
	if (!navList.contains(event.target) && !btnHamburger.contains(event.target)) {
		navList.classList.remove("nav__list-is-active");
	}
});

function displayForm() {
	overlay.style.display = "block";

	fetch("form.html")
		.then((response) => response.text())
		.then((html) => {
			formContainer.innerHTML = html;

			const btnCloseForm = document.getElementById("btnCloseForm");

			btnCloseForm.addEventListener("click", () => {
				formContainer.innerHTML = "";
				overlay.style.display = "none";
			});
		});

	overlay.addEventListener("click", () => {
		formContainer.innerHTML = "";
		overlay.style.display = "none";
	});
}

btnBook.addEventListener("click", displayForm);
