main = [];
function track() {

  var messy_list = $('form').serializeArray();

  messy_list.forEach( function(e) {
    if (e.value != "") {
      main.push(e.value);
    }
  });

  if (JSON.stringify(main) != "[]"){
    sessionStorage.setItem("db", JSON.stringify(main));
    location.href = "./currActivity.html";
  }
  else {
    $(".alert").show();
  }

}
document.onkeypress = (function (e) {
  if (e.which == 13){
    e.preventDefault();
    track();
  }
});

document.onclick = (function (e) {
  
  if (document.getElementsByClassName("alert")){
    $(".alert").hide();
  }
});

//Set storage value to element;
function setStorage(id){

  if(document.getElementById(id)){

    var setEl = document.getElementById(id);

    if (sessionStorage.getItem("db")) {
      var saved = JSON.parse(sessionStorage.getItem("db"));
      setEl.innerHTML = saved;
    }
  }
}

setStorage("currAct");
setStorage("timeline");

//Set Date on TimeLine
function gDate() {
  var d = new Date();
  var dateEl = document.getElementById('date');
  // 'Setting' data-attributes using setAttribute
  dateEl.setAttribute('data-date',d.toDateString());
  return;
}
