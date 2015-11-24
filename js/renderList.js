$.getJSON("code/requestItems.php", function(result){
    $.each(result, function(i){
      $('#urlList').append('<tr><td><a data-toggle="modal" data-target="#jsonModal" href="#" data-value="'+ result[i].jsonld +'">'+ result[i].url +'</a></td></tr>');
    });
});
