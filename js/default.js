$(function(){

 $("#next").click(function(){
    if ($("#radio1").attr('checked') || $("#radio2").attr('checked')){
      window.location.replace('answerReliably.html');
    } else {
      $("#radio1").parent().css('background-color', 'red');
    }
  });

/*  
  for (var i = 1; i <= 11; i++){
    var radio = "#radio" + i;
    $(radio).click(function() {
      if (i >= 7 && i <= 10){

      }
      alert("hello");
      //$(radio).parent().css('background-color', 'white');
    });
  }
*/

  //$("label[for='comedyclubs']")

  $( "button").button();
  $(".radio").buttonset();
  $("label").inFieldLabels();

  $( ".resizable" ).resizable({
    handles: "se"
  });



  // 2.html specific
  // 2.html did you receive post acute care?
  $(".typeOfCare").hide();
  $("#radio1").click(function() {
    $(".typeOfCare").show("fast");
  });

  $("#radio2").click(function() {
    $(".typeOfCare").hide("fast");
  });

  // 2.html why did you return to the hospital? other
  $("#otherComment").hide();
  $("#radio11").click(function() {
    $("#otherComment").show("fast");
  });

  for (var i = 7; i <= 10; i++){
    $("#radio" + i).click(function() {
      $("#otherComment").hide("fast");
    });
  }

  $( "#birthdate" ).datepicker({
    changeMonth: true,
    changeYear: true
  });


  // 4, 5.html
  $( "#dialog" ).dialog({
    height: 350, 
    width: 730,
    autoOpen: false,
    modal: true,
    buttons: {
      Ok: function() {
        $( this ).dialog( "close" );
        window.location = "login.html";
      }}
  });

  $( "#opener" ).click(function() {
    $( "#dialog" ).dialog( "open" );
    return false;
  });

  // this needs to go below dialog, or it breaks dialog for some reason
  $("#phone").mask("999 999 9999", {placeholder:" "});

});
