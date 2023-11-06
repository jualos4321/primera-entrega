const express = require('express');
import cart from "./routes/cart"
import product from "./routes/product"

const port = 8080

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

