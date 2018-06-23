$.get('http://localhost:3000/cms/livrare', data => {
    $('#cms-delivery h2').text(data);
});