var formValidator = (function() {

    var init = function() {
        formValidation();
    };

    var formValidation = function() {
        $('#jsonForm')

        // Form validators
        .formValidation({
            framework: 'bootstrap',
            live: 'enabled',
            trigger: 'blur',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
            }
        });
    };

    // Public returns
    return {
        init: init
    };
})();

// On DOM ready run init
$(function() {
    formValidator.init();
});
