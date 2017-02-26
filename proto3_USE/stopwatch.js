var clear;
var x = document.getElementById("countUp");

function pad (str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}

sec = -1;
min = -1;
hr = 0;
function stopWatch() { // javascript statement here
  if (sec >=0 && sec <60){
    sec++;
    x.innerHTML= pad(hr,2) + ":" + pad(min,2)+ ":" + pad(sec,2);
  }
  else {
    sec=0;
    min++;
    x.innerHTML="00:00:"+ pad(sec,2);
    x.innerHTML= pad(hr,2) + ":" + pad(min,2)+ ":" + pad(sec,2);

    if (min == 60){
      min = 0;
      hr++;
      x.innerHTML= pad(hr,2) + ":" + pad(min,2)+ ":" + pad(sec,2);
    }
  }
  clear = setTimeout( "stopWatch()", 1000 );
}
