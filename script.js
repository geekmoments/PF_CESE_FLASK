document.addEventListener("DOMContentLoaded", function() {
  var tabla1 = document.getElementById("tabla1");
  var tabla2 = document.getElementById("tabla2");
  var tabla3 = document.getElementById("tabla3");
  var tabla4 = document.getElementById("tabla4");

  tabla1.addEventListener("click", cambiarColorCelda);
  tabla2.addEventListener("click", cambiarColorCelda);
  tabla3.addEventListener("click", cambiarColorCelda);
  tabla4.addEventListener("click", cambiarColorCelda);

  function cambiarColorCelda(event) {
    var celda = event.target;
    var colorActual = celda.style.backgroundColor;
    
    // Si la celda es verde, cambia su color a rojo
    if (colorActual === "green") {
      celda.style.backgroundColor = "red";
    } else {
      // Si la celda es roja, cambia su color a verde
      celda.style.backgroundColor = "green";
    }
  }

  for (var i = 0; i < 4; i++) {
    var fila1 = document.createElement("tr");
    var fila2 = document.createElement("tr");
    var fila3 = document.createElement("tr");
    var fila4 = document.createElement("tr");
    for (var j = 0; j < 4; j++) {
      var celda1 = document.createElement("td");
      var celda2 = document.createElement("td");
      var celda3 = document.createElement("td");
      var celda4 = document.createElement("td");
      fila1.appendChild(celda1);
      fila2.appendChild(celda2);
      fila3.appendChild(celda3);
      fila4.appendChild(celda4);

      celda1.style.backgroundColor = "red";
      celda2.style.backgroundColor = "red";
      celda3.style.backgroundColor = "red";
      celda4.style.backgroundColor = "red";
    }
    tabla1.appendChild(fila1);
    tabla2.appendChild(fila2);
    tabla3.appendChild(fila3);
    tabla4.appendChild(fila4);
  }
});
