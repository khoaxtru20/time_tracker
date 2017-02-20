function submit() {
  var messy_list = $('form').serializeArray();
  var list = [];

  messy_list.forEach( function(e) {
    if (e.value != "") {
      list.push(e.value);
    }
  });
  sessionStorage.setItem("list", list);
}
