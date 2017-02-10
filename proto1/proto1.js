//Value in the form
var val = "";
//Get the form from the html
var x = document.getElementById("input");
//Update the value of the form
x.onkeypress = function(ev) {keypress(ev)};

function keypress(ev) {
  val += String.fromCharCode(ev.which);
}
var y = document.getElementsByClassName("track");

$(document).ready(function() {
    $(".track").click(function() {
      console.log(val);
        if (val){
          location.href = "./currActivity.html";
        }
        else {
              $(".alert").show();
        }
    });
//Click on the warning to make it go away
  $(".alert").click(function(){
    $(".alert").hide();
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
});
