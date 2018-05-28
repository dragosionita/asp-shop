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

        li.innerHTML = "<input type='number' min='1' name='quantity' value='"+cart[i].qty+"' class='qty' data-sku='"+cart[i].sku+"' />" + 
         ' x ' + produsMare.title + " Pret: " + produsMare.price + " lei "+"<a href='#' data-sku='"+cart[i].sku+"' class='delete'>Delete</a>";

        // adauga cate un li per fiecare produs din cart
        cartProductsElement.appendChild(li);
    }


var deleteBtn = document.querySelectorAll('.delete'); 
for (let x = 0; x < deleteBtn.length; x++){
       deleteBtn[x].addEventListener("click", function(){
     //   console.log(deleteBtn[x].dataset.sku);
        var skuDel=deleteBtn[x].dataset.sku;
        var index  = cart.findIndex(x => x.sku==skuDel);
        cart.splice(index, 1);
       console.log(cart)
        drawCartProducts(cart)
        })
       
    
    }

var quantity= document.querySelectorAll('.qty'); 
for(let x = 0; x < deleteBtn.length; x++){
    quantity[x].addEventListener("change", function(){
    var val=quantity[x].value;
    console.log(val);
    var skuQty=quantity[x].dataset.sku;
    var index  = cart.findIndex(x => x.sku==skuQty);
    cart[index].qty=Number(val);
    console.log(cart)

    })
}






}


