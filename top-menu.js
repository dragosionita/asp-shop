var topMenu = {
    menuLinks: [
        {
            name: "Contact",
            link: "contact.html"
        },
        {
            name: "Livrare",
            link: "livrare.html"
        },
        {
            name: "Despre Noi",
            link: "despre.html"
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
        a.href= topMenu.menuLinks[i].link;
        
        li.appendChild(a);
        topMenuUlElement.appendChild(li);
    }
}

drawtopMenu();