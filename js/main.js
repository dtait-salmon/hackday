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


var hackday = hackday || {};

;(function(doc, win, $){

  // private members
  hackday = (function () {

    var jsonStruc;

    var methods = {
      /**
       *
       */
      setJasonValues: function () {

        // get field values
        var form = $('#jsonForm');

        jsonStruc = {
          "@context": "http://schema.org/" + form.find('input[id="context"]'),
          "@type": form.find('input[id="product"]'),
          "name": form.find('input[id="name"]'),
          "image": form.find('input[id="image"]'),
          "description": form.find('input[id="description"]'),
          "mpn": form.find('input[id="mpn"]'),
          "brand": {
            "@type": form.find('input[id="brand_type"]'),
            "name": form.find('input[id="brand_name"]')
          },
          "aggregateRating": {
            "@type": form.find('input[id="aggregateRating_type"]'),
            "ratingValue": form.find('input[id="aggregateRating_ratingValue"]'),
            "reviewCount": form.find('input[id="aggregateRating_reviewCount"]')
          },
          "offers": {
            "@type": form.find('input[id="offers_type"]'),
            "priceCurrency": form.find('input[id="offers_priceCurrency"]'),
            "price": form.find('input[id="offers_price"]'),
            "priceValidUntil": form.find('input[id="offers_priceValidUntil"]'),
            "itemCondition": "http://schema.org/" + form.find('input[id="offers_itemCondition"]'),
            "availability": "http://schema.org/" + form.find('input[id="offers_availability"]'),
            "seller": {
              "@type": form.find('input[id="seller_type"]'),
              "name": form.find('input[id="seller_name"]')
            }
          }
        };

        console.log(jsonStruc);

        //
        //
        //var inputs = $(form).find('input').not('input[type="hidden"]').not('input[type="submit"]');
        //
        //inputs.each(function () {
        //  var $this = this;
        //
        //
        //})


      },
      /**
       *
       */
      populateHiddenFields: function () {


      }
    };

    // public methods
    var api = {
      init: function () {
        methods.setJasonValues();
        methods.populateHiddenFields();

        return;
      }
    }


    return {
      init: api.init
    }

  })();

  hackday.init();

})(document, window, $);
