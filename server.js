const express = require("express"),
  API_PORT = 8080,
  app = express(),
  fetch = require('node-fetch');

const router = express.Router();
router.get("/", (req, res) => {
  res.json({ message: "Hello Dixant Sharma" });
});

router.get('/fetch-products', async (req, httpRes) => {
  // const { length } = req.body;
  console.log("body: ", req.query)
  const url = `https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6`;
  let length = parseInt(req.query.length);
  try {
    const res = await fetch(url);
    const response = await res.json();
    if (response && response.products) {
      let currentLength = length || 0;
      let maxLength = currentLength + 10;
      let { products: responseProducts } = response;
      let resultProducts = responseProducts.filter((item, index) => index >= currentLength && index < maxLength);
      let isMore = (length + resultProducts.length) < responseProducts.length;

      return httpRes.send({ status: 'SUCCESS', isMore, products: [...resultProducts] });
    }
  } catch (error) {
    console.error({ error });
    return res.send({ status: 'ERROR', error });
  }
});


app.use("/api", router);
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));