var order = {
    name: '',
    phone: '',
    email: '',
    cart: []
}

var isCheckOutOn = false;

<<<<<<< HEAD
$('#to-checkout').click(function(){
    if (isCheckOutOn == true) {
        $('#to-checkout').text("Continuă");
        $('#checkout').fadeOut("slow");
        $('#cart-products').fadeIn("slow");
        isCheckOutOn = false;
    } else {
        $('#to-checkout').text("Înapoi");
        $('#checkout').fadeIn("slow");
        $('#cart-products').fadeOut("slow");
        isCheckOutOn = true;
=======
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
>>>>>>> b24e3d6ea8a063e4d58a0019076360a0c9c3f482
    }
})

$('#place-order').click(function() {
    
    order.name = $('#name').val();
    order.phone = $('#phone').val();
    order.email = $('#email').val();
    order.cart = cart;

    console.log('Comanda ta: ', order);
    alert(order.name + "" + ', comanda ta a fost plasata.');
});