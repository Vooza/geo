const express = require("express");
const app = express();

var os = require("os");

app.use(express.static(os.hostname()+"/public"));

app.get("/", (request, response) => {
  response.send(os.hostname());
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
