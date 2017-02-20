//Value in the form
var val = "";

//Only do this on the page with this element (currActivity.html)
if(document.getElementById("currAct")){

  var test_display = document.getElementById("currAct");

  if (sessionStorage.getItem("db")) {
    var saved = sessionStorage.getItem("db");
    test_display.innerHTML = saved;
  }
}
//Only do this on the page with this element (homepage_timeline.html)
if(document.getElementById("timeline")){

  var timeLine = document.getElementById("timeline");

  if (sessionStorage.getItem("db")) {
    var saved = sessionStorage.getItem("db");
    timeLine.innerHTML = saved;
  }
}

//Only do this on the pages with this element (index.html)
if(document.getElementById("input")){
  //Get the form from the html
  var x = document.getElementById("input");
  //Update the value of the form
  x.onkeydown = function(ev) {keydown(ev)};
}

//Only do this on the pages with this element (index.html)
if(document.getElementById("input0")){
  //Get the form from the html
  var x = document.getElementById("input0");
  //Update the value of the form
  x.onkeydown = function(ev) {keydown(ev)};
}

//**NOTE: breaks on symbols that are only accessible with a key + shift e.g. exclamation point
function keydown(ev) {
  //If backspace is pressed, delete the last element in string
  if (ev.which == 8) {
    val = val.substring(0, val.length-1);
  }
  else {
    //As long as shift and enter keys aren't pressed initially:
    if(ev.which != 13 && ev.which != 16){
      //And the keys are a-z
      if (!ev.shiftKey && ev.which >= 65 && ev.which <= 90){
        //Print lowercase (since default is capital for the onkeydown event)
        val += String.fromCharCode(ev.which+32);
      }
      else{
        //Print everything else
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
