const express = require("express");
const app = express();

const port = 3000 || process.env.PORT;

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/views/index.html");
});

app.get("/games", (req, res) => {
	res.sendFile(__dirname + "/views/games.html");
});

app.get("/indev", (req, res) => {
	res.sendFile(__dirname + "/views/indev.html");
});

app.get("/devs", (req, res) => {
	res.sendFile(__dirname + "/views/devs.html");
});

app.listen(port, () => {
	console.log("Listening on port: ", + port);
});
