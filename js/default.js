$(function(){

  $("label").inFieldLabels(); // 1.html specific

  // 2.html specific
  $(".typeOfCare").hide();
  
  $("#radio1").click(function() {
    $(".typeOfCare").show("fast");
  });

  $("#radio2").click(function() {
    $(".typeOfCare").hide("fast");
  });

  $(".radio").buttonset();

  $(".ui-button").hover(
    function(){ 
      $(this).addClass("ui-state-hover"); },
    function(){ $(this).removeClass("ui-state-hover");
              });
  
  // 4, 5.html specific
  $(".eval").click(function() {
    $("dialog:ui-dialog").dialog("destroy");
    $("#dialog-modal").dialog({ 
      height: 300, 
      modal: true,
      width: 600
    });
  });

});
