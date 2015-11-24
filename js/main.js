$(document).ready(function(){
  $.getJSON("code/requestItems.php", function(result){
      $.each(result, function(i){
        $('#urlList').append('<li><a href="#" data-value="'+ result[i].jsonld +'">'+ result[i].url +'</a></li>');
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

//{
//  "@context": "http://schema.org/",
//    "@type": "Product",
//    "name": "Executive Anvil",
//    "image": "http://www.example.com/anvil_executive.jpg",
//    "description": "Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",
//    "mpn": "925872",
//    "brand": {
//  "@type": "Thing",
//      "name": "ACME"
//},
//  "aggregateRating": {
//  "@type": "AggregateRating",
//      "ratingValue": "4.4",
//      "reviewCount": "89"
//},
//  "offers": {
//  "@type": "Offer",
//      "priceCurrency": "USD",
//      "price": "119.99",
//      "priceValidUntil": "2020-11-05",
//      "itemCondition": "http://schema.org/UsedCondition",
//      "availability": "http://schema.org/InStock",
//      "seller": {
//    "@type": "Organization",
//        "name": "Executive Objects"
//  }
//}
}

var hackday = hackday || {};

;(function(doc, win, $){

  // private members
var hackday = (function(){
  var methods = {
    /**
     *
     */
    validateFields: function(){

    },
    /**
     *
     */
    getJason: function(){

    },
    /**
     *
     */
    populateHiddenFields: function(){
      // get field values
      var form = 'jsonForm';

      var inputs = $(form).find('input').not('input[type="hidden"]');

      input.each(function(){
        var $this = this;

      })

    }
  };

  // public methods
  var api = {
    init: function(){
      return;
    }
  }


  return {
    init: init
  }

})()

})(document, window, $);


