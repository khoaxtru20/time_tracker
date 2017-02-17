//Value in the form
var val = "";


if(document.getElementById("test")){

  var test_display = document.getElementById("test");

  if (sessionStorage.getItem("db")) {
    var saved = sessionStorage.getItem("db");
    test_display.innerHTML = saved;
  }
}


if(document.getElementById("input")){
  //Get the form from the html
  var x = document.getElementById("input");
  //Update the value of the form
  x.onkeydown = function(ev) {keydown(ev)};
}

function keydown(ev) {
  if (ev.which == 8) {
    val = val.substring(0, val.length-1);
  }
  else {
    if(ev.which != 13 && ev.which != 16){
      if (!ev.shiftKey && ev.which >= 65 && ev.which <= 90){
        val += String.fromCharCode(ev.which+32);
      }
      else{
        val += String.fromCharCode(ev.which);
      }
    }
  }
  console.log(val);
}

$(document).ready(function() {
  //Advance to Current Activity Page if form is filled, else show warning
    $(".track").click(function() {
        if (val){
          sessionStorage.setItem("db", val);
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
