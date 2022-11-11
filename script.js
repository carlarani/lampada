function Ligar() {
    document.getElementById("lampada").src="ligada.png";
    document.getElementById("ligar").style.visibility="hidden";
    document.getElementById("desligar").style.visibility="visible";
  }

  function Desligar() {
    document.getElementById("lampada").src="desligada.png";
    document.getElementById("desligar").style.visibility="hidden";
    document.getElementById("ligar").style.visibility="visible";
  }