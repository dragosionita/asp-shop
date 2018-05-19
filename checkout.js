var order = {
    name: '',
    phone: '',
    email: '',
    cart: []
}

var isCheckoutOn = false;

$('#to-checkout').click(function() {
    if (cart != "" ){

    if (isCheckoutOn) {
        $('#to-checkout').text("Continua");
        $('#checkout').hide();
        $('#cart-products').show();    
        isCheckoutOn = false;
    } else {
        $('#to-checkout').text("Inapoi");
        $('#checkout').show();
        $('#cart-products').hide();
        isCheckoutOn = true;
    } } else {
        alert("Adauga cel putin un produs inainte de a trimite comanda.")
    }
});

$('#place-order').click(function() {
    
    order.name = $('#name').val();
    order.phone = $('#phone').val();
    order.email = $('#email').val();
    order.cart = cart;

    console.log('Comanda ta: ', order);
    alert(order.name + "" + ', comanda ta a fost plasata.');
});