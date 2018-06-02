const abbDownloads = document.getElementById("abb-download");

document.getElementById("download-abb").addEventListener("click", (e) => {
	if(abbDownloads.style.display === "none") abbDownloads.style.display = "block";
	else abbDownloads.style.display = "none";
});

const hideGames = () => Array.from(document.getElementsByClassName("game")).forEach((div) => {
	div.style.display = "none";
});

document.getElementById("play-abb").addEventListener("click", (e) => {
	hideGames();

	//game
	const container = document.createElement("div");
	const iframe = document.createElement("iframe");

	iframe.src = "https://boyandboxgame.herokuapp.com";
	iframe.scrolling = "no";

	iframe.width = 720;
	iframe.height = 480;

	container.appendChild(iframe)
	document.body.appendChild(container);

	//fullscreen
	const btn = document.createElement("button");

	btn.innerHTML = "fullscreen";

	btn.classList.add("game-btn");

	document.body.appendChild(btn);

	btn.addEventListener("click", (e) => {
		if(container.requestFullscreen){
			container.requestFullscreen();
		}else if(iframe.webkitRequestFullscreen){
			iframe.webkitRequestFullscreen();
		}
		iframe.style.background = "black";
	});

});
