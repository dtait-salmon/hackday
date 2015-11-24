$(document).ready(function() {

    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    var date = new Date();
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    $('#urlList').on('click', 'a', function(e) {
        e.preventDefault();

        var url = $(this).text();
        var jsonStr = $(this).attr('data-value');

        $('#urlInput').val(url);
        $('#jsonInput').val(jsonStr);
    });
    $("#datetimepicker").datetimepicker({
        format: "dd MM yyyy",
        autoclose: true,
        todayBtn: true,
        pickerPosition: "bottom",
        minView: 2,
        todayHighlight: true,
        startView: 4
    });

    $('#jsonModal').on('shown.bs.modal', function(e) {
        document.getElementById('aggregate_priceValidUntil').value = day + ' ' + monthNames[monthIndex] + ' ' + year;
    })
});

var hackday = hackday || {};

;(function(doc, win, $){

  // private members
  hackday = (function () {

    var jsonStruc;
    var currentUrl;
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

      },
      /**
       *
       */
      populateHiddenFields: function () {
        // url
        // json object
        jsonStruc = JSON.stringify(jsonStruc);
        jsonStruc = $.parseJSON(jsonStruc);

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
          currentUrl = $(this).val();
        });

        $('#submitButton').on('click', function(e){
          e.preventDefault();

          methods.setJasonValues();
          methods.populateHiddenFields();
          methods.resetForm();

          var data = {
            url: currentUrl,
            jsonStr: JSON.stringify(jsonStruc)
          }

          jQuery.ajax({
            method: "POST",
            url: "code/submitJSON.php",
            data: data
          }).done(function(response) {
            console.log(response);
          });
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
