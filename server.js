const express = require('express')
const bodyParser = require('body-parser');
const pdf = require('pdfkit');
const fs = require('fs');
const feedRoutes = require('./routes/feeds');
const loggerRoutes = require('./routes/loggerRoute');
const memberRoutes = require('./routes/memberRoutes');
const parkeringRoutes = require('./routes/parkeringRoutes');

const server = express();
const port = process.env.PORT || 8080;

// Express now has native body parsing.
server.use(express.json());
server.use(express.urlencoded({extended: false}));



server.use('/feed', feedRoutes)
server.use('/router',loggerRoutes);
server.use('/api',memberRoutes);
server.use('/api', parkeringRoutes);

server.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});
