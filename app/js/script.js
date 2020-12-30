const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");
const fadeElems = document.querySelectorAll(".has_fade");

let overlayFlag = true;

btnHamburger.addEventListener("click", () => {
	header.classList.toggle("open");
	body.classList.toggle("no-scroll");

	if(overlayFlag) {
		fadeElems.forEach(element => {
			element.classList.remove("fade-out");
			element.classList.add("fade-in");
		});
	} else {
		fadeElems.forEach(element => {
			element.classList.remove("fade-in");
			element.classList.add("fade-out");
		});
	}
	overlayFlag = !overlayFlag;
});

document.querySelectorAll(".ignore-click").forEach(element => {
	element.addEventListener("click", (event) => {
		event.preventDefault();
	})
});
