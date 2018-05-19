var order = {
    name: '',
    phone: '',
    email: '',
    cart: []
}

var isCheckoutOn = false;

$('#to-checkout').click(function() {
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
    }

    
    
});

$('#place-order').click(function() {
    order.name = $('#name').val();
    order.phone = $('#phone').val();
    order.email = $('#email').val();
    order.cart = cart;

    if(order.name == '') {
        alert('Va rugam sa introduceti numele dumneavoastra');
    } else if( order.phone=='') {
        alert('Va rugam sa introduceti numarul de telefon');
    } else if ( order.email=='') { 
        alert('Va rugam sa introduceti adresa de mail') ;
        
    }else {
        console.log('Comanda ta: ', order);
        alert(order.name + "" + ', comanda ta a fost plasata.');
    }
    
});