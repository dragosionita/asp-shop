var mysql = require('mysql'); //metoa in node js prin care imi aduc libraria de mysql in node

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

var sql = "select * from clienti";
// var sql = "delete from clienti where id = 4 ";
    con.query(sql, function (err, result) {
        if (err) throw err;
        for (i=0; i < result.length; i++) {
          console.log (result[i].first_name);
        }
    });