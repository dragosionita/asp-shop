// initializare cart nou aka gol;
var cart = [];

// eveniment click pe navigatie -> schimbat categortii
// metoda de a adauga evenimente pe toate butoanele care au clasa 
// add-to-cart
function prepareAddToCart() {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
    $('.add-to-cart').click(function() {
        // var marime=$(this).attr("marime")|| ;
        var product = {
            sku: $(this).attr("sku"),
            categoryId: $(this).attr("category-id"),
            size:$(this).attr("marime"),
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



// function findElement(a) {
//     if
//     return element > 13;
//   }

$.get("http://localhost:3000/test", function(data) {
  console.log('data', data);
});