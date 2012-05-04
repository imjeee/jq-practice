$(function(){
  $("#next").click(function(){
    if ($("#radio1").attr('checked')){
      window.location.replace('3.html');
    } else {
      $("#next").hide();//css('color', 'red');
    }
  });

});
