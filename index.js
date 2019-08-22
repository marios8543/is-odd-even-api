const express = require('express');
const app = express();
const port = 5000;

const isodd = require('is-odd');
const iseven = require('is-even');

app.get('/isodd', (req, res) => {
    try {
        res.send({'result':isodd(req.query.number)});
    } catch (error) {
        res.statusCode = 400;
        res.send({'message':error.message});
    }
});

app.get('/iseven', (req, res) => {
    try {
        res.send({'result':iseven(req.query.number)});
    } catch (error) {
        res.statusCode = 400;
        res.send({'message':error.message});
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
