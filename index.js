const express = require('express');
const app = express();
const port = process.env.PORT || 5000

const isodd = require('is-odd');
const iseven = require('is-even');

app.get('/', (req, res) => res.redirect('https://github.com/marios8543/is-odd-even-api'));

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
