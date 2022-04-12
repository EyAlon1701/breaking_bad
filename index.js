import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

import breakingbadCharacters from './controllers/breakingbad.js';
app.use('/breakingbad/api',breakingbadCharacters);

const port = 5070;

app.listen(port, function(){
    console.log(`Server working with port ${port}`);
})
