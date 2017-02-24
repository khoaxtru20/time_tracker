list = [];
function submit() {

  var messy_list = $('form').serializeArray();

  messy_list.forEach( function(e) {
    if (e.value != "") {
      list.push(e.value);
    }
  });

  sessionStorage.setItem("list", JSON.stringify(list));
  location.href = "./todo_listed.html";

}
document.onkeypress = (function (e) {
  if (e.which == 13){
    submit();
  }
});

function updateStorage() {
  // sessionStorage.setItem("db", JSON.stringify(list));
}

//Only do this on the page with this element (todo_listed.html)
i=0;
if(document.getElementById("input"+i)){
  var saved = JSON.parse(sessionStorage.getItem("list"));
  for(; saved && i < saved.length; i++){
    var id = document.getElementById("input"+i);

    id.innerHTML = saved[i];
    $(".cb"+i).show();
    $("input"+i).show();
  }
}
