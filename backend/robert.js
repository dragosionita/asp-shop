var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database:"test",
  port: 3306,
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "select * from clienti";
 
    con.query(sql, function (err, result) {
        if (err) throw err;
       

        for( i = 0; i< result.length; i++) {
            console.log( result[i].first_name);
        }
    });
});