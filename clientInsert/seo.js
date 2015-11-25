var schemaTools = {};

schemaTools.controller = {
  init:function(){
    this.requestSchema();
  },
  requestSchema: function(){
    self = this;

    jQuery.ajax({
      method: "POST",
      url: "http://127.0.0.1:8888/schematools/hackday/code/requestJSON.php",
      data: { url:  window.location.pathname.toString() }
    }).done(function(response) {
      console.log(response);
      self.renderSchema(response);
    });
  },
  renderSchema: function(response){
    // parsedJSON = jQuery.parseJSON(response);

    var linkingEl = document.createElement("script");
    var linkingData = document.createTextNode(response);
    var docHead = document.getElementsByTagName("head");

        linkingEl.type = 'application/ld+json';
        linkingEl.id = 'linkingData'
        linkingEl.appendChild(linkingData);

        docHead[0].appendChild(linkingEl);
  }
};
jQuery(document).ready(function(){
  schemaTools.controller.init();
});
