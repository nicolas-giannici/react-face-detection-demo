const express = require('express');
const app = express();


app.use(express.static(__dirname + '/public'));


app.get('*', (res,req) => {
    res.send(path.join(__dirname +'public/index.html'));
});

app.listen(5555, () => {
    console.log("Listening in port : ", 5555);
});