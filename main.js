// initializare cart nou aka gol;
var cart = [];

// eveniment click pe navigatie -> schimbat categortii
$('.categ a').click(function()  {
    // le ascund pe toate
    hideAll();

    // setez categoria curenta cu atributul cat-id de pe fiecare <a>
    currentCategory = $(this).attr("cat-id");

    //sterge toate produsele cu dom cu tot si creaza altele noi
    //din categoria curenta
    drawProducts(currentCategory);

    //adauga evenimente de click pe produsele noi create
    prepareAddToCart();
});

// metoda de a adauga evenimente pe toate butoanele care au clasa 
// add-to-cart
function prepareAddToCart() {
    $('.add-to-cart').click(function() {
        var product = {
            sku: $(this).attr("sku"),
            categoryId: $(this).attr("category-id"),
            qty: 1
        }
        
        if (cart.length != 0) {
            for(var i = 0; i < cart.length; i++) {
                if (cart[i].sku == product.sku) {
                    cart[i].qty++;
                } else {
                    cart.push(product);
                }

                break;
            }
        } else {
            cart.push(product);
        }
            
        
        

        swal({
            title: 'Produsul a fost adaugat in cos!',
            type: 'success',
            showConfirmButton: 'false',
            onOpen: () => {
                
            }
        });

        console.log('cart', cart);
    });
}

// apelare metoda de adaugare event pe butoanele de add-to-cart 
// la inceput
prepareAddToCart();

var cartState = false;

$('#cart-button').click(function() {
    hideAll();
    $('#cart-container').fadeIn("slow");
    drawCartProducts(cart);
});
