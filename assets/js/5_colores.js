let ColorSeleccionado = "";

function CambioColor(elemento, color) {
   document.getElementById(elemento).style.backgroundColor = color;
   if (elemento === "key2") {
      document.getElementById(elemento).style.display = "block";
   }
}

document.addEventListener("keydown", function (event) {
   if (event.key === "a") {
      ColorSeleccionado = "pink";
      CambioColor("key", ColorSeleccionado);
   } else if (event.key === "s") {
      ColorSeleccionado = "orange";
      CambioColor("key", ColorSeleccionado);
   } else if (event.key === "d") {
      ColorSeleccionado = "cyan";
      CambioColor("key", ColorSeleccionado);
   } else if (event.key === "q") {
      ColorSeleccionado = "purple";
      CambioColor("key2", ColorSeleccionado);
   } else if (event.key === "w") {
      ColorSeleccionado = "grey";
      CambioColor("key2", ColorSeleccionado);
   } else if (event.key === "e") {
      ColorSeleccionado = "brown";
      CambioColor("key2", ColorSeleccionado);
   }
});
