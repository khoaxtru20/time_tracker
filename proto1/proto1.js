//Value in the form
var val = "";

// if (!sessionStorage.getItem("db")){
//   console.log("no storage");
// }
// else {
//   console.log("var in storage");
// }
//
var test_display = document.getElementById("test");
// console.log(saved);
// sessionStorage.setItem("db", saved);
//
// console.log(sessionStorage.getItem("db"));

if (sessionStorage.getItem("db")) {
  var saved = sessionStorage.getItem("db");
  test_display.innerHTML = saved;
}


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
          sessionStorage.setItem("db", val);
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
