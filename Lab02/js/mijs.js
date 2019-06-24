var flag = 0;

function cambiarImagen() {
  var balling = document.getElementById("icon01");

  if (flag == 0) {
    balling.src = "img/mario.jpg";
    flag = 1;
  } else {
    balling.src = "img/pok.jpg";
    flag = 0;
  }
}

function mensaje() {
  alert("Probando window onload");
}
window.onload = mensaje;
