const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.listen(8000, () => {
  console.log("connected");
});

app.get("/numbers", (req, res) => {
    let queries = {
        url:[]
    }
  queries = req.query;
  console.log(queries);

  const testApi = async (queries) => {
    const head = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    queries.url.forEach(async (element) => {
      console.log("hello");
    });
  };
  testApi();
});
