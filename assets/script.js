const drop = document.querySelector("#dropDown");
const menu = document.querySelector("#menu");

drop.addEventListener("click", () => {
	if (menu.classList.contains("hidden")) menu.classList.remove("hidden");
	else menu.classList.add("hidden");
});
