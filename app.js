const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Welcome to Icyfire, This is a total exection with aws codebuil, beanstack, codepipeline, and Github '));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
