$(document).ready(function(){
  $.getJSON("code/requestItems.php", function(result){
      $.each(result, function(i){
        $('#urlList').append('<li><a data-toggle="modal" data-target="#jsonModal" href="#" data-value="'+ result[i].jsonld +'">'+ result[i].url +'</a></li>');
      });
  });

  $('#urlList').on('click', 'a', function(e){
    e.preventDefault();

    var url = $(this).text();
    var jsonStr = $(this).attr('data-value');

    $('#urlInput').val(url);
    $('#jsonInput').val(jsonStr);
  });
});
