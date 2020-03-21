const express = require("express");
const app = express();
const fs = require('fs')
const os = require("os");

app.use(express.static("public"));

app.get("*", (request, response) => {
	request.send(os.hostname());
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
