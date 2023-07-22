const express = require("express");
const cors = require("cors");
const send = require("send");

const app = express();

app.use(cors());
app.use(express.json());

app.listen(8000, () => {
  console.log("connected");
});

app.get("/numbers", (req, res) => {
  let queries = {
    url: [],
  };

  var ansArray = [];

  queries = req.query;

  console.log(queries.url);

  const testApi = async (queries) => {
    const head = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (queries.url.length > 0) {
      for (let i = 0; i < queries.url.length; i++) {
        const result = await fetch(queries.url[i], head);
        const ans = await result.json();
        ansArray[i] = ans.numbers;
      }
      let result = [...ansArray[0], ...ansArray[1]];
      result = [...new Set(result)];
      console.log(result);
      res.status(200).json(result);
    }
  };
  testApi(queries);
});
