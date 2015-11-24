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


var hackday = hackday || {};

;(function(doc, win, $){

  // private members
  hackday = (function () {

    var jsonStruc;
    var form = $('#jsonForm');

    var methods = {
      /**
       *
       */
      setJasonValues: function () {

        // get field values
        jsonStruc = {
          "@context": "http://schema.org/" + form.find('input[id="context"]').val() || "",
          "@type": form.find('input[id="type"]').val() || "",
          "name": form.find('input[id="name"]').val() || "",
          "image": form.find('input[id="image"]').val() || "",
          "description": form.find('input[id="description"]').val() || "",
          "mpn": form.find('input[id="mpn"]').val() || "",
          "brand": {
            "@type": form.find('input[id="brand_type"]').val() || "",
            "name": form.find('input[id="brand_name"]').val() || ""
          },
          "aggregateRating": {
            "@type": form.find('input[id="aggregateRating_type"]').val() || "",
            "ratingValue": form.find('input[id="aggregateRating_ratingValue"]').val() || "",
            "reviewCount": form.find('input[id="aggregateRating_reviewCount"]').val() || ""
          },
          "offers": {
            "@type": form.find('input[id="offers_type"]').val() || "",
            "priceCurrency": form.find('input[id="offers_priceCurrency"]').val() || "",
            "price": form.find('input[id="offers_price"]').val() || "",
            "priceValidUntil": form.find('input[id="offers_priceValidUntil"]').val() || "",
            "itemCondition": "http://schema.org/" + form.find('input[id="offers_itemCondition"]').val() || "",
            "availability": "http://schema.org/" + form.find('input[id="offers_availability"]').val() || "",
            "seller": {
              "@type": form.find('input[id="offers_seller_type"]').val() || "",
              "name": form.find('input[id="offers_seller_name"]').val() || ""
            }
          }
        };

        //console.log(JSON.stringify(jsonStruc));

      },
      /**
       *
       */
      populateHiddenFields: function () {
        // url
        // json object

        //JSON.stringify(jsonStruc);
        form.find('input[id="jsonInput"]').val(JSON.stringify(jsonStruc));

      },
      resetForm: function(){
        form[0].reset();
      }
    };

    // public methods
    var api = {
      init: function () {

        $('#urlList li a').on('click', function(){
          // grab url and put in hidden field
          form.find('input[id="urlInput"]').val($(this).val());
        });

        $('#submitButton').on('click', function(e){
          e.preventDefault();

          methods.setJasonValues();
          methods.populateHiddenFields();
          methods.resetForm();

          $(this).submit();
        });

        $('#closeModal').on('click', function(){
          methods.resetForm();
        });

        return;
      }
    }


    return {
      init: api.init
    }

  })();

  hackday.init();

})(document, window, $);
