
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


var currentCategory = 'trico';

$.get("http://localhost:3000/navigation",function(data){
    navigation = data;
    drawNavigation();
});