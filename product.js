
function drawProducts(categoryId) {
    var productListElement = document.getElementById("products-list");
    productListElement.innerHTML = '';


    for (var i = 0; i < products[categoryId].length; i++) {
        
        var li = document.createElement("li");
        li.className = "prod";


        var imageSource = document.createElement("img");
        imageSource.className = "product-images";
        imageSource.src = products[categoryId][i].imageSource;
        imageSource.innerText = products[categoryId][i].imageSource;

        var h1 = document.createElement("h1");
        h1.className = "product-title";
        h1.innerText = products[categoryId][i].title;

        var p1 = document.createElement("p");
        p1.className = "product-size";
        p1.innerText = "Marime";

        var select = document.createElement("select");
      
        for (var j = 0; j < products[categoryId][i].sizes.length; j++) {
            
            var option = document.createElement("option");
            option.innerText = products[categoryId][i].sizes[j];
            select.appendChild(option);
        }

        var addToCartButton = document.createElement("button");
        addToCartButton.className = "add-to-cart";
        addToCartButton.innerText = "Add to cart";

        addToCartButton.setAttribute("sku", products[categoryId][i].sku);
        addToCartButton.setAttribute("category-id", categoryId);

        var p2 = document.createElement("p");
        p2.className = "product-price";
        p2.innerText = products[categoryId][i].price + " RON";

        
        li.appendChild(imageSource);
        li.appendChild(h1);
        li.appendChild(p1);
        li.appendChild(select);
        li.appendChild(p2);
        li.appendChild(addToCartButton);
        productListElement.appendChild(li);
    }
}

drawProducts(currentCategory);