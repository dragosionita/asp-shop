var order = {
    name: '',
    phone: '',
    email: '',
    cart: []
}

var isCheckoutOn = false;

$('#to-checkout').click(function() {
    if (isCheckoutOn) {
        $('#to-checkout').text("Continuă");
        $('#checkout').fadeOut("slow");
        $('#cart-products').fadeIn("slow");
        isCheckOutOn = false;
    } else {
        $('#to-checkout').text("Înapoi");
        $('#checkout').fadeIn("slow");
        $('#cart-products').fadeOut("slow");
        isCheckOutOn = true;
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