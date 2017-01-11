$(document).ready(function() {

  $("form").submit(function(shout){
    var normInput = $("input#message").val();
    var realInput = normInput.toUpperCase() + "!!!!!!";

    $(".shout").text(realInput);
    $(".mountain").addClass("return");
    event.preventDefault();
  })

});
