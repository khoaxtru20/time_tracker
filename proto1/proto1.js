//Value in the form
var val = "";
//Get the form from the html
var x = document.getElementById("input");
//Update the value of the form
x.onkeydown = function() {val = x.value};

//Advance to the Current Activity Page if form is filled, else show warning
function advPage(){
  if (val){
    location.href = "./currActivity.html";
  }
  else {
    $(document).ready(function(){
      $(".track").click(function(){
        $(".alert").show();
      });
    });
  }
}
//Click on the warning to make it go away
$(document).ready(function(){
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
