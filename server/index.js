const express = require("express");
const chalk = require("chalk");
const fs = require("fs");
const path = require("path");

const app = express();

//have this explained again
const whiteListedUrl = process.env.WHITELISTED_URL || "*";

const PORT = process.env.PORT || 3000;
const DB_PATH = path.join(__dirname, "./data.json");

//this is basically used to turn the data into something react can use??
const myReadFile = (path) => {
  return new Promise((res, rej) => {
    fs.readFile(path, (e, data) => {
      if (e) {
        rej(e);
      } else {
        res(JSON.parse(data.toString()));
      }
    });
  });
};

//this is used to add data to the json file???
const myWriteFile = (path, data) => {
  return new Promise(() => {
    fs.writeFile(path, JSON.stringify(data), (e) => {
      if (e) {
        rej(e);
      } else {
        res();
      }
    });
  });
};

//this delivers content to each user?? like soemthing you want all people to have??
app.use(express.static(path.join(__dirname, "../client")));

//deals with incoming data for put and post requests??
app.use(express.json());

//this gets the json data reads it then stores the data
app.use((req, res, next) => {
  myReadFile(DB_PATH).then((data) => {
    req.products = data;
    next();
  });
});

//this takes the data stored from above and sends it to /api/products
app.get("/api/products", (req, res, next) => {
  res.send({ products: req.products });
});

//this deletes data based on the product id
app.delete("/api/products/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const { products } = req;
  const check = products.filter((prod) => {
    prod.id === id;
  });
  const newList = products.filter((prod) => {
    prod.id !== id;
  });

  if (check.length === 0) {
    res.status(204).send({
      message: "product not found",
    });
  } else {
    myWriteFile(DB_PATH, newList).then((res) => {
      res.send({ message: "product removed" });
    });
  }
});

//this adds products to the data
app.post("/api/products", (req, res, next) => {
  const id = Number(req.params.id);
  const { name, price } = req.body;
  const { products } = req;
  const check = products.filter((prod) => {
    prod.name === name;
  });

  if (check.length === 1) {
    res.status(302).send({ message: "product already exists" });
  } else if (typeof name !== "string" || typeof price !== "number") {
    res
      .status(406)
      .send({ message: "name must be letters and price must be a number" });
  } else {
    let maxNum = 0;
    products.forEach((prod) =>
      prod.id > maxNum ? (maxNum = prod.id) : maxNum
    );
    const update = [
      ...products,
      {
        id: maxNum + 1,
        name,
        price,
      },
    ];
    myWriteFile(DB_PATH, update).then((res) => {
      res.send({
        data: update,
        message: "Success",
      });
    });
  }
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
