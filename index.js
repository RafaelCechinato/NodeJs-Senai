const express = require('express');
const routes = require('./src/routes');
const cors = require("cors");
//const client = require("./conectarDBPostgres")
const db = require("./conectarDB")

const app = express();

db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connected to Database"))

//client.connect()
        // .then(() => console.log('Conectado ao PostgreSQL'))
        // .catch(err => console.error('Erro de conexão:', err));


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(5000, () => console.log("Server started"))
