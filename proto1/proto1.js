//Value in the form
var val = "";
//Get the form from the html
var x = document.getElementById("input");
//Update the value of the form
x.onkeypress = function(ev) {keypress(ev)};

function keypress(ev) {
  val += String.fromCharCode(ev.which);
}
$(document).ready(function() {
  //Advance to Current Activity Page if form is filled, else show warning
    $(".track").click(function() {
        if (val){
          location.href = "./currActivity.html";
        }
        else {
              $(".alert").show();
        }
    });
    //Advance to Current Activity Page by pressing Enter Key if form is filled, else show warning
    $("input").keypress(function(event) {
      if (event.which == 13) {
        event.preventDefault();
        if (val){
          location.href = "./currActivity.html";
        }
        else {
          $(".alert").show();
        }
      }
    });
//Click on the warning to make it go away
  $(".alert").click(function(){
    $(".alert").hide();
  });
});
