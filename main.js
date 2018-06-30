var cart = [];                                           // initializare cart nou aka gol;

function prepareAddToCart() {                            // metoda de a adauga evenimente pe toate butoanele care au clasa add-to-cart
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }

    $('.add-to-cart').click(function() {
        var product = {
            sku: $(this).attr("sku"),
            categoryId: $(this).attr("category-id"),
            size:$(this).attr("marime"),
            qty: 1
        }
        
        if(cart.length !=0){
            
                        var skyNew = product.sku;    
                        var marime=cart.marime;
                        var indexSku = cart.findIndex(y => y.sku==product.sku && y.size==product.size);
               
                        if(indexSku > -1 ){
                            cart[indexSku].qty++;
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

<<<<<<< HEAD


// function findElement(a) {
//     if
//     return element > 13;
//   }

=======
$.get("http://localhost:3000/test", function(data) {
  console.log('data', data);
});
>>>>>>> 51245a0c5462e90bca1338fbbca4eed0ee6bea1d
