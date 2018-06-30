var cms = {
    about: "Salut noi suntem ...",
    delivery: "Produsele noastre ajung in ...",
    contact: "Ne puteti contacta ..."
}
$.get("http://localhost:3000/cms/contact", data => {
    $('#cms-contact').text(data);
})