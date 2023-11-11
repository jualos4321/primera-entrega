const express = require('express');
import cart from "./routes/cart"
import product from "./routes/product"

const port = 8080

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/cart', cart)
app.use('/api/product', product)

app.listen(port, () => {
    console.log(`Servicio activo en puerto ${port}`)
})


