const express = require("express");
const app = express();
const port = 3000;

app.use(express.json({
  type: "application/csp-report"
}));
// app.use(express.raw());

app.post("/", (req, res) => {

  const reqJson = req.body;
  // console.log(`got ${JSON.stringify(reqJson)}`);

  if (Array.isArray(reqJson)) {

    for (const report of reqJson) {
      console.log(JSON.stringify(report));
    }

  } else if (reqJson["csp-report"]) {
    console.log(JSON.stringify(reqJson));
  }

  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
