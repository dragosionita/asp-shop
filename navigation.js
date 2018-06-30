var currentCategory = 'trico';

function drawNavigation() {
    var navUlElement = document.getElementById("navigation");

    for (var i = 0; i < navigation.categories.length; i++) {

        var li = document.createElement("li");
        li.className = "categ";

        var a = document.createElement("a");
        a.innerText = navigation.categories[i].name;
        a.href = "#";
        a.setAttribute("cat-id", navigation.categories[i].id);
        
        li.appendChild(a);
        navUlElement.appendChild(li);
    }
}

$.get('http://localhost:3000/navigation', data => {
    console.log('ce avem aici:', data);
    navigation = data;
    drawNavigation();
    addEventsAfter();
});


function addEventsAfter() {
        
    $('.categ a').click(function()  {               // eveniment click pe navigatie -> schimbat categortii
        hideAll();                                  // le ascund pe toate
        currentCategory = $(this).attr("cat-id");   // setez categoria curenta cu atributul cat-id de pe fiecare <a>
        drawProducts(currentCategory);              // sterge toate produsele cu dom cu tot si creaza altele noi din categoria curenta
        prepareAddToCart();                         // adauga evenimente de click pe produsele noi create
    });
}
