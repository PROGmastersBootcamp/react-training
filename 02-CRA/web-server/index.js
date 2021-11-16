const express = require('express');
const app = express();
app.get('/', (req, resp) => {
    resp.send('Hello NodeJs!');
});
app.listen(3000, () => console.log('App running on localhost:3000'));
