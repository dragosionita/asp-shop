var user = {
    nume: "Bica",
    prenume: "Andrei",
    email: "a.b.f@gmail.com",
    address: {
        strada: "Plevnei",
        numar: "20",
        localitate: "Bucuresti",
    },
    card: {
        cardnumber: "xxxx-xxxx-xxxx-xxxx",
        cvv: "xxx"
    }
}

function Registration(nume, prenume, email, callback) {
user.nume = nume;
    user.prenume = prenume;
    user.email = email;
    callback();
}

function SetAddress(stradax, numarx, localitatex, callback) {
    user.address.strada = stradax;
    user.address.numar = numarx;
    user.address.localitate = localitatex;
    callback();
}

function SetCard(cardnumber, cvv, callback) {
    user.card.cardnumber = cardnumber;
    user.card.cvv = cvv;
    callback();
}

function PlaceOrder(callback) {
    console.log("Am plasat comanda");
    callback(user, "aaa");
}

Registration("Bica", "Andrei", "a.b.f@gmail.com", function () {
    SetAddress("Plevnei", "20", "Bucuresti", function () {
        SetCard("2345-1234-4777-8881", "123", function () {
            PlaceOrder(function(u, t){
                console.log("parametru 2", t);
                console.log("Am terminat",u);
            });
        });
    });
});



