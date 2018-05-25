function drawCartProducts(cart) {
    //  cart = [
    //     {sku: 2, categoryId: "tric"},
    //     {sku: 2, categoryId: "tric"}
    // ]
    var cartProductsElement = document.getElementById('cart-products');
    // sterge tot ce e in cart
    cartProductsElement.innerHTML = '';

    for (var i = 0; i < cart.length; i++) {
        var li = document.createElement("li");
        li.className = "cart-item";

        var produsMare;
        for (var j = 0; j < products[cart[i].categoryId].length; j++) {
            if (products[cart[i].categoryId][j].sku == cart[i].sku) {
                produsMare = products[cart[i].categoryId][j];
            } 
        }

        li.innerText = produsMare.title + "Pret: " + produsMare.price + "lei";

        // adauga cate un li per fiecare produs din cart
        cartProductsElement.appendChild(li);
    }
}
