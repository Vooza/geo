const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
	request.send("socknet");
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
