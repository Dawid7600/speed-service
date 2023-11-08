const displayPageContainer = document.getElementById("displayPageContainer");
const overlay = document.getElementById("overlay");

export function closeForm() {
	displayPageContainer.innerHTML = "";
	overlay.style.display = "none";
}

export function displayPage(page) {
	overlay.style.display = "block";

	fetch(page)
		.then((response) => response.text())
		.then((html) => {
			displayPageContainer.innerHTML = html;

			const btnCloseForm = document.getElementById("btnCloseForm");

			btnCloseForm.addEventListener("click", () => {
				closeForm();
			});
		});

	overlay.addEventListener("click", () => {
		closeForm();
	});
}
