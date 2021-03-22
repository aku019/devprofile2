const express = require('express');
const app = express();
const api = require('./api');
const path = require('path');
const cors = require('cors');

// const app = express();
// const port = process.env.PORT || 3002;
// app.use(express.json());
app.use(cors());
app.options('*', cors());
app.use(express.json());

// app.use(express.urlencoded({extended:true}));

app.use('/api',api);



app.use(express.static('public'));





app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});

