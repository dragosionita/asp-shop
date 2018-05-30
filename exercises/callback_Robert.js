var user = {
    firstName: '',
    lastName: '',
    email: '',
    address: {
        street: '',
        nr: '',
        state: ''
    },
    card: {
        cardNo: '',
        cvv: ''
    }

}


function registration(firstName, lastName, email, callback) {
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    callback()
}


function setAddress(street, nr, state, callback) {
    user.address.street = street;
    user.address.nr = nr;
    user.address.state = state;
    callback()
}


function setPayment(cardNo, ccv, callback) {
    user.card.cardNo = cardNo;
    user.card.ccv = ccv;
    callback()
}


function placeorder(callback) {
    console.log("processing...");
    callback()
}


registration("Robert", 'Grigore', 'test@gmail', function () {
    setAddress('Rosia montana', '18', 'Bucuresti', function () {
        setPayment('32123-12312312-32123', '321', function () {
            placeorder(function () {
                console.log("Te-ai inregistrat cu succes.", )
            });
        });
    });
});