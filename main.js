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
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
    $('.add-to-cart').click(function() {
        var product = {
            sku: $(this).attr("sku"),
            categoryId: $(this).attr("category-id"),
            qty: 1
        }
        
        // if (cart.length != 0) {
        //     for(var i = 0; i < cart.length; i++) {
        //         console.log(cart[i].sku)
        //         console.log(product.sku)
        //         if (cart[i].sku == product.sku) {
        //             cart[i].qty++;
        //             console.log("sunt in if")
                    
                    
        //         } else {
                   
        //             cart.push(product);
        //             console.log("sunt in else")
                    
                    
        //         }
        //         console.log("sunt in break")
        //         break;
        //     }
        // } else {
        //     cart.push(product);
        //     console.log("sunt in ultimul else")
        // }




        if(cart.length !=0){

            var skyNew =product.sku;    
            var index = cart.findIndex(x => x.sku == skyNew);
            if(index > -1){
                cart[index].qty++
            }else{
                cart.push(product);
            }

        }else{
            cart.push(product);
        }
            
       
        

        swal({
            title: 'Produsul a fost adaugat in cos!',
            type: 'success',
            showConfirmButton: 'false',
            onOpen: () => {
                
            }
        });
        localStorage.setItem('cart', JSON.stringify(cart));
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



