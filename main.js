const suvelocidad = parseInt (prompt ("ingrese la velocidad de su auto"));


if (suvelocidad < 50) {
  alert("Este auto es lento");
} else if (suvelocidad >= 50 && suvelocidad < 100) {
  alert("Este auto tiene una velocidad promedio");
} else {
  alert("Este auto es rápido");
}


// Ejemplo de algoritmo de ciclo en JavaScript para listar los modelos de autos 

const autos = ["Ford", "Chevrolet", "Toyota", "Honda", "Nissan"];

for (let i = 0; i < autos.length; i++) {
  console.log(autos[i]);
}
console.log("fin del ciclo")