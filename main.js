// initializare cart nou aka gol;
var cart = [];

// eveniment click pe navigatie -> schimbat categortii
$('.categ a').click(function()  {
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
            categoryId: $(this).attr("category-id")
        }
    
        cart.push(product);
        alert('Produsul dumneavoastra a fost adaugat in cos!');
        console.log("COSUL: ", cart);
    });
}

// apelare metoda de adaugare event pe butoanele de add-to-cart 
// la inceput
prepareAddToCart();

var cartState = false;

$('#cart-button').click(function() {
    //alert('am apasat');
    if (cartState == false) {
        $('#products-list').fadeOut("slow");
        $('#cart-container').fadeIn("slow");
        drawCartProducts(cart);
        cartState = true;
    } else {
        $('#products-list').fadeIn("slow");
        $('#cart-container').fadeOut("slow");
        cartState = false;
    }
});
