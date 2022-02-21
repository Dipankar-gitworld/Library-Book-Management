const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const bookController = require("../src/controllers/books.controller");
app.use("/books", bookController);

module.exports = app;