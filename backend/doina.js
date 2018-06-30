var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "", 
    port: 3306,
    database: "test"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
     var sql = "select * from clienti";
   // var sql = "delete from clienti where id=3";




    con.query(sql, function (err, result) {
        if (err) throw err;
      //  console.log(result[0].first_name, result[0].age);
        console.log(result);
        for (var x=0; x<result.length; x++){
            console.log(result[x].first_name)
        }
    });
});


