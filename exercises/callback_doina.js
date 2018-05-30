var user={
    nume:"Ion",
    prenume:"Vasile",
    email:"ddd@yahoo.com",
    address:{
        strada:"",
        nr:"",
        localitate:""
    },
    card:{
        numar:"",
        cvv:""
    }
}


function registration(nume, prenume, email, callback) {
    user.nume=nume;
    user.prenume=prenume;
    user.email=email;
    callback()
}

function address(strada, nr, localitate, callback) {
    user.address.strada=strada;
    user.address.nr=nr;
    user.address.localitate=localitate;
    callback()
}

function plata(nr, cvv, callback) {
    user.card.numar=nr;
    user.card.cvv=cvv;
    callback();

}
function placeOrder(callback){
    callback(user);
}

registration("Ion", "Popescu", "pop@yahoo.com", function() {
    address("libertatii", "23", "Pitesti", function() {
        plata("222", "234", function() {
            placeOrder(function(user){
                console.log("bravoooo", user);
            })
            
        });
    })
})