
function drawProducts(categoryId) {
    // le ascund pe toate
    hideAll();

    // asfiseaza doar product list-ul
    $('#products-list').show();

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

        //create popup
        var popup=document.createElement('div');
        popup.classList.add("popup");
        li.appendChild(popup);

        var poza = document.createElement('div');
        poza.classList.add("poza");
        popup.appendChild(poza);
        var img = document.createElement("img");
        img.src = products[categoryId][i].imageSource;
        poza.appendChild(img);

        var titlu=document.createElement('h1');
        titlu.classList.add("titlu");
        titlu.innerHTML=products[categoryId][i].title;
        poza.appendChild(titlu);


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
        p2.innerText = products[categoryId][i].price + " Lei";

        
        li.appendChild(imageSource);
        li.appendChild(h1);
        li.appendChild(p1);
        li.appendChild(select);
        li.appendChild(p2);
        li.appendChild(addToCartButton);
        productListElement.appendChild(li);
    }


    var images=document.querySelectorAll(".product-images");
    var popup=document.querySelectorAll(".popup");
    //console.log(images)
    for(let x = 0; x < images.length; x++){
        images[x].addEventListener("click", function(){
        popup[x].style.display="block"
        })
        popup[x].addEventListener("click", function(){
            popup[x].style.display="none"
            })
    }

}

drawProducts(currentCategory);


