/* var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    database: "test",
    user: "",
    pass: ""    
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
    var sql = "select * from clienti";
    // var sql = "delete from clienti where id=4";
    con.query(sql, function (err, result) {
        if (err) throw err;
        for (var i = 0; i < result.length; i++) {
            console.log(result[i].first_name);
        }
    });
});


 */