let fs = require('fs');
let path = require('path');
let express = require('express');
let bodyParser = require('body-parser');

const app = express();

console.log(__dirname);

app.use('/', express.static(path.join(__dirname, '../')));

app.listen(3000, () => {console.log('listening on port 3000')});
