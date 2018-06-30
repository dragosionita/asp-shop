var order = {
    name: '',
    phone: '',
    email: '',
    cart: []
}

var isCheckoutOn = false;

var int=document.querySelector("#cart-products");

$('#to-checkout').click(function() {
    //console.log(int.innerHTML)
    if (cart != "" &&  int.innerHTML !="" ){

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
        swal({
            title: 'Adauga cel putin un produs inainte de a trimite comanda!',
            type: 'error',
            showConfirmButton: 'false',
            onOpen: () => {
                
            }
          })
    }

    
    
});

$('#place-order').click(function() {
    
    order.name = $('#name').val();
    order.phone = $('#phone').val();
    order.email = $('#email').val();
    order.cart = cart;

    if(order.name == '') {
        swal({
            title: 'Va rugam sa introduceti numele dumneavoastra!',
            type: 'error',
            showConfirmButton: 'false',
            onOpen: () => {
                            }
          })
    } else if( order.phone=='') {
        swal({
            title: 'Va rugam sa introduceti numarul de telefon!',
            type: 'error',
            showConfirmButton: 'false',
            onOpen: () => {
                            }
          })
    } else if ( order.email=='') {
        swal({
            title: 'Va rugam sa introduceti adresa dumneavoastra de e-mail!',
            type: 'error',
            showConfirmButton: 'false',
            onOpen: () => {
                            }
          })
        
    } else {
        console.log('Comanda ta: ', order);
        $.post('http://localhost:3000/plaseaza-comanda', order, response => {
            console.log('CE A VENIT DE LA SERVER:', response);
        });

        var swalConfirmedOrder = order.name + " , comanda ta a fost plasata cu succes."; swal({ text: swalConfirmedOrder, type: "success", confirmButtonText: "Cool" });
        //alert(order.name + "" + ', comanda ta a fost plasata.');
    }
    
});