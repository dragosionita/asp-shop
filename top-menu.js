var topMenu = {
    menuLinks: [
        {
            name: "Contact",
            identifier: "contact"
        },
        {
            name: "Livrare",
            identifier: "delivery"
        },
        {
            name: "Despre Noi",
            identifier: "about"
        }
    ]
}



//#############################################################

function drawtopMenu() {
    var topMenuUlElement = document.getElementById("top-menu");

    for (var i = 0; i < topMenu.menuLinks.length; i++) {

        var li = document.createElement("li");
        li.className = "top-menu";

        var a = document.createElement("a");
        a.innerText = topMenu.menuLinks[i].name;
        a.href= "#";
        a.classList.add("nav-top-button");
        a.setAttribute('identifier', topMenu.menuLinks[i].identifier)
        li.appendChild(a);
        topMenuUlElement.appendChild(li);
    }
}

drawtopMenu();

$(".nav-top-button").click(function() {
    var clickedButton = $(this).attr('identifier');
    $('.cms').hide();
    $('#products-list').hide();
    $('#cms-' + clickedButton).show();
});