
var cart2 = [];

// O functie cu 2 parametri
// product = string (text)
// callback = function
function AddToCart(product, callback) {
    cart2.push(product);
    // mi-am facut treaba si apelez callbackul
    callback();
}

function sendOrder(callback) {
    console.log("am salvat orderul");
    // Eu sendOrder mi-am facut treaba si apelez callbackul
    callback();
}

function sendEmail(callback) {
    console.log("am trimis email");
    // Eu sendEmail mi-am facut treaba si apelez callbackul
    callback();
}

// apelez AddToCart cu cei 2 parametri
// tric ca e string
// si function()... ca e functie si e al doilea parametru
AddToCart("tric", function() {
    //aici ma aflu in callbackul functiei de AddToCart
    sendOrder(function() {
        //aici ma aflu in callbackul functiei sendOrder
        sendEmail(function() {
            //aici ma aflu in callbackul functiei SendEmail
            console.log('e ok');
        })
    })
});