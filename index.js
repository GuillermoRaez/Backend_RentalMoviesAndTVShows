const express = require('express');
const app = express();
const port = 3000;

const router = require('./router');

//Middleware
app.use(express.json());
app.use(router);


app.listen(port, () => console.log(`Node server up and running at http://localhost:${port}`));