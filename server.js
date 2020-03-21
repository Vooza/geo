const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.send(request.headers.host);
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
