const express = require('express');
const app = express();
const userRoute = require('./route/userRoute');

app.use(express.json());
app.use(userRoute);
app.listen(3000);