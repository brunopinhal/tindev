const express = require('express');
const mongoose = require('mongoose');// ODM - conecta com banco de dados e manipula com sintaxe JS
const routes = require('./routes');
const cors = require('cors');

const server = express();

mongoose.connect('mongodb+srv://tindev:tindev@cluster0-ybys7.mongodb.net/tindev?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true // Declara o formato de url do mongoose
});

server.use(cors());
server.use(express.json()); //Avisa o express que é usaremos JSON
server.use(routes);

server.listen(3333); 