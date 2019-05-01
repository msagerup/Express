const express = require('express')

const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feeds');
const loggerRoutes = require('./routes/loggerRoute');


const server = express();
const port = process.env.PORT || 8080;

const members = require('./members')





// Api get all members
server.get('/api/members', (req, res) => {
    res.json(members)
})


server.use(bodyParser.json());
server.use('/feed', feedRoutes)
server.use('/router',loggerRoutes);

server.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
