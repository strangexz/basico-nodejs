const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT_SERVER;
const message = `Mi servidor esta corriendo en el puerto ${port}`;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.listen(port, () => {
    console.log(message);
});
 
