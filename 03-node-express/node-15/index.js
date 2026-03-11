const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

// datos de prueba
let videJuegos = [
    {id: 1, titulo: "RDR2", precio: 20},
    {id: 2, titulo: "RDR2", precio: 2},
    {id: 3, titulo: "RDR2", precio: 4},
]

app.get("/", (req, res) => {
    return res.send(videJuegos);
})
app.listen(port, () => {
    console.log("server is running on port: " + port);
})