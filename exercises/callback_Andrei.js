var user = {
    firstName: "",
    lastName: "",
    eMail: "",
    address: {
        street: "",
        number: "",
        city: ""
    },
    card: {
        cardNo: "",
        cvv: ""
    }
}


function registration(fName, lName, eMail, callback) {
    user.firstName = fName;
    user.lastName = lName;
    user.eMail = eMail;
    callback();
}

function setAddress(str, no, loc, callback) {
    user.address.street = str;
    user.address.number = no;
    user.address.city = loc;
    callback();
}

function setCard(cardNo, cvv, callback){
    user.card.cardNo = cardNo;
    user.card.cvv = cvv;
    callback();
}

function placeOrder(callback){
    console.log ("Am plasat comanda.");
    callback(user);
}

registration("Andrei", "C", "a@b.com", function() {
    setAddress("Agricultori", 6, "Sector 2", function(){
        setCard("1111-2222-3333-4444", 123, function(){
            placeOrder(function(u){
                console.log("Am terminat!", u)
            });
        });
    });
})