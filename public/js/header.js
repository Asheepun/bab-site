(() => {
	const header = document.createElement("header");
	const menu = document.createElement("ul");
	const banner = document.createElement("img")
	const games = document.createElement("li");
	const inDev = document.createElement("li");
	const devs = document.createElement("li");
	const bannerLink = document.createElement("a");
	const gamesLink = document.createElement("a");
	const inDevLink = document.createElement("a");
	const devsLink = document.createElement("a");

	menu.classList.add("menu");
	games.classList.add("white-text");
	inDev.classList.add("white-text");
	devs.classList.add("white-text");

	banner.src = "/banner.png";
	games.innerHTML = "Games";
	inDev.innerHTML = "In dev";
	devs.innerHTML = "Devs";

	bannerLink.href = "/";
	gamesLink.href = "games";
	inDevLink.href = "indev";
	devsLink.href = "devs";

	bannerLink.appendChild(banner);
	gamesLink.appendChild(games);
	inDevLink.appendChild(inDev);
	devsLink.appendChild(devs);

	menu.appendChild(bannerLink);
	menu.appendChild(gamesLink);
	menu.appendChild(inDevLink);
	menu.appendChild(devsLink);

	header.appendChild(menu);

	document.body.appendChild(header);
		
})();
