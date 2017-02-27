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
    e.preventDefault();
    submit();
  }

});


//Only do this on the page with this element (todo_listed.html)
i=0;
if(document.getElementById("input"+i)){
  var saved = JSON.parse(sessionStorage.getItem("list"));
  for(; saved && i < saved.length; i++){
    var id = document.getElementById("input"+i);
    id.innerHTML = saved[i];
      $("#cb"+i).show();
      $("#input"+i).show();
    }
}

//To show the to-do elements when pressing "+"
k=0;
function show() {
  $(document).ready(function () {
    var str = "#task";
    $(str+k).show();
    k++;
  });
}

//Remove items from to-do list on check
checkboxes = [];
taskboxes = [];
for (var j = 0; j < 5; j++) {
  checkboxes[j]="ch"+ j;
  taskboxes[j]="input"+ j;
}
document.onclick = (function(e){
  targID = e.target.id;
  if (checkboxes.includes(targID) && document.getElementById(targID).checked){
    // $("#"+targID).hide();
    // $("#input"+targID.slice(-1)).hide();
    // $("#"+targID).fadeOut('medium', function() {
    //   $(this).css({"visibility":"hidden"});
    //   $(this).css({"display":"block"});
    // });
    // $('#input'+targID.slice(-1)).fadeOut('medium', function() {
    //   $(this).css({"visibility":"hidden"});
    //   $(this).css({"display":"block"});
    // });
    $(function() {
      $("#"+targID).css("visibility", "hidden");
      $("#"+targID).css({"display":"block"});
      $('#input'+targID.slice(-1)).css("visibility", "hidden");
      $('#input'+targID.slice(-1)).css({"display":"block"});
    });
  }
  if (taskboxes.includes(targID)){
    saveTask = JSON.stringify(document.getElementById(targID).innerHTML);
    sessionStorage.setItem("db", saveTask);
    location.href="./currActivity.html";
  }

});
