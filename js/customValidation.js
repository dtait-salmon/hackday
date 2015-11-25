var formValidator = (function() {

    var init = function() {
        formValidation();
    };

    var formValidation = function() {
        $('#jsonForm')

        // Form validators
        .formValidation({
            framework: 'bootstrap'
        });
    };

    // Public returns
    return {
        init: init
    };
    // Two () immediately invoke function
})();

// On DOM ready run init
$(function() {
    formValidator.init();
});