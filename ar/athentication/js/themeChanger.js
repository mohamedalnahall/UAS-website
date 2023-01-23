let themeChangers = document.querySelectorAll("theme_changer");
let logos = document.querySelectorAll(".logo");

for (let themeChanger of themeChangers) {
    themeChanger.onclick = function (e) {
        e.preventDefault();
		if (document.body.getAttribute("data-theme") === "light") {
			document.body.setAttribute("data-theme", "dark");
		} else {
			document.body.setAttribute("data-theme", "light");
		}

		for (let logo of logos) {
			logo = logo.firstElementChild;
			if (logo.getAttribute("src") === "imgs/logo2.png") {
				logo.setAttribute("src", "imgs/logo2-dark.png");
			} else if (logo.getAttribute("src") === "imgs/logo2-dark.png") {
				logo.setAttribute("src", "imgs/logo2.png");
			}
		}
	};
}