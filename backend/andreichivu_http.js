const express = require('express')
const app = express()

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/navigation', (req, res) => {
    var navigation = {
        categories: [
            {
                name: "Tricouri",
                id: "trico"
            },
            {
                name: "Geci",
                id: "gec"
            },
            {
                name: "Pantofi",
                id: "panto"
            }
        ]
    };

    res.send(navigation);
})

app.get('/', (req, res) => {
    res.send('Hello World!')
});


app.get('/test', (req, res) => {
    res.send('Salut, Acum esti in test!')
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

