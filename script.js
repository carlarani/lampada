function Ligar() {
  document.getElementById("lampada").src = "ligada.png";
  document.getElementById("ligar").style.visibility = "hidden";
  document.getElementById("desligar").style.visibility = "visible";
  var back = document.getElementsByTagName("body");
  back[0].style.backgroundColor = "white";

}

function Desligar() {
  document.getElementById("lampada").src = "desligada.png";
  document.getElementById("desligar").style.visibility = "hidden";
  document.getElementById("ligar").style.visibility = "visible";
  var back = document.getElementsByTagName("body");
  back[0].style.backgroundColor = "black";

}