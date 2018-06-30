$.get('http://localhost:3000/cms/livrare', data => {
    $('#cms-delivery h2').text(data);
});

$.get('http://localhost:3000/cms/despre', data => {
    $('#cms-about h2').text(data);
});

$.get('http://localhost:3000/cms/contact', data => {
    $('#cms-contact h2').text(data);
});