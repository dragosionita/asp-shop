
$.get('http://localhost:3000/cms/livrare', function(data){
    $('#cms-delivery h2').text(data);
});