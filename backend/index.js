var mysql = require('mysql');
const express = require('express')
const app = express()

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/**
 * Las pe oricine de la orice adresa sa se conecteze
 * la acest server
 */
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


/**
 * Conexiunea la baza de date cu credentialele noastre
 */
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database:"test",
    port: 3306,
    password: "dragosx"
  });


/**
 * HTTP GET pe /cms/contact
 * returneaza informatiile de contact pentru pagina respectiva
 */
app.get('/cms/contact',(req,res) => {
    var sql = "select * from  cms where id = 'contact' ";
    con.query(sql, (err, result)=> {
        if (err) throw err;
        res.send(result[0].content);
    })
});

/**
 * HTTP GET pe /cms/livrare
 * returneaza informatiile de contact pentru pagina respectiva
 */
app.get('/cms/livrare',(req,res) => {
    var sql = "select * from  cms where id = 'livrare' ";
    con.query(sql, (err, result)=> {
        if (err) throw err;
        res.send(result[0].content);
    })
});


app.get('/cms/despre',(req,res) => {
 var sql = "select * from  cms where id = 'despre' ";
    con.query(sql, (err, result)=> {
        if (err) throw err;
        res.send(result[0].content);
    })
});


app.get('/',(req,res) => {
    res.send('<center><h1>ASP SHOP SERVER</h1></center>');
});

app.post('/plaseaza-comanda', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;

    let orderProducts = req.body.cart;

    var orderNumber = Math.floor(Math.random() * 100000000);

    /*
        a = "s";
        b = "w";
        `${a}${b}` = a+b Concatenarea(lipirea de texte) se poate face in 2 feluri in JS ;)
    */

    let orderSQL = `INSERT INTO orders (name, phone, email, order_number, date) VALUES ('${name}', '${phone}', '${email}', ${orderNumber}, NOW())`;

    con.query(orderSQL, (err, result) => {
        if (err) throw err;

        let ultimulOrderId = result.insertId;

        for (let i = 0; i < orderProducts.length; i++) {
            let sku = orderProducts[i].sku;
            let size = orderProducts[i].size;
            let qty = orderProducts[i].qty;

            let orderProductSQL = `INSERT INTO orders_products (orders_products_id, sku, size, qty) VALUES (${ultimulOrderId}, ${sku}, '${size}', ${qty})`;
            con.query(orderProductSQL, (err, results) => {
                if (err) throw err;

                
            })
        }
        res.send({success: true, orderNumber: orderNumber});

    });

    
});

app.get('/navigation', (req, res) => {
    
    var sql = "select * from categories";
    
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send({'categories': result});
    });
    
})

app.get('/products', (req,res) => {
 const products = {
    trico: [
        {
            title: "Tricou athletic cu imprimeu",
            sizes: ["M", "L", "XL"],
            imageSource: "assets/img/man/tricouri/tricou1.jpg",
            price: 1109.99,
            sku: 1
        },
        {
            title: "Tricou slim fit de bumbac organic",
            sizes: ["M", "L", "XL"],
            imageSource: "assets/img/man/tricouri/tricou2.jpg",
            price: 200,
            sku: 2
        },
        {
            title: "Tricou athletic cu imprimeu, pentru fotbal",
            sizes: ["S", "M", "L", "XL", "XXL"],
            imageSource: "assets/img/man/tricouri/tricou7.jpg",
            price: 130,
            sku: 3
        },
        {
            title: "Tricou cu decolteu și imprimeu ",
            sizes: ["M", "L", "XL"],
            imageSource: "assets/img/man/tricouri/tricou3.jpg",
            price: 300,
            sku: 4
        },
        {
            title: "Tricou cu buzunar pe piept",
            sizes: ["M", "L", "XL"],
            imageSource: "assets/img/man/tricouri/tricou4.jpg",
            price: 400,
            sku: 5
        },
        {
            title: "Tricou polo cu broderie cu logo",
            sizes: ["M", "L", "XL"],
            imageSource: "assets/img/man/tricouri/tricou5.jpg",
            price: 500,
            sku: 6
        },
        {
            title: "Tricou cu imprimeu cauciucat",
            sizes: ["M", "L", "XL"],
            imageSource: "assets/img/man/tricouri/tricou6.jpg",
            price: 600,
            sku: 7
        }
    ],
    gec: [
        {
            title: "Geacă cauciucată",
            sizes: ["M", "L", "XL"],
            imageSource: "assets/img/man/geci/geaca1.jpg",
            price: 600,
            sku: 8
        }
    ],
    panto: [
        {
            title: "Pantofi cu gură",
            sizes: ["40", "42", "42", "43", "44"],
            imageSource: "assets/img/man/pantofi/CrocodilShoes.jpg",
            price: 500,
            sku: 9
        },
        {
            title: "Pantofi cu degete",
            sizes: ["39", "40", "41", "42", "42"],
            imageSource: "assets/img/man/pantofi/FingerShoes.jpg",
            price: 450,
            sku: 10
        },
    ]
 }

    res.send(products);
});


app.get('/test',(req, res)=> {
    res.send('This is a test');
});


app.listen(3000,() => {
    console.log('Serverul ASP-Shop a pornit la adresa http://localhost:3000');
});