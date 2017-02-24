function submit() {
  var messy_list = $('form').serializeArray();
  var list = [];

  messy_list.forEach( function(e) {
    if (e.value != "") {
      list.push(e.value);
    }
  });
  sessionStorage.setItem("list", JSON.stringify(list));
  location.href = "./todo_listed.html";

}

function submitEnter() {
  var messy_list = $('form').serializeArray();
  var list = [];

  messy_list.forEach( function(e) {
    if (e.value != "") {
      list.push(e.value);
    }
  });
  sessionStorage.setItem("list", JSON.stringify(list));
  location.href = "./todo_listed.html";

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
