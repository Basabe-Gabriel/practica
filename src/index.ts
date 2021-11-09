//

//Ejercicio - Mayor a 20
//let nrodeseado: number = 25;

//if (nrodeseado > 20) {
//console.log("el numero es mayo a 20: " + nrodeseado);
//} else {
//console.log("el numero deseado es menor a 20: " + nrodeseado);
//}
//----------------------------------------------------------------

//Desarrolle un algoritmo que diga el precio de una compra
//La compra se compone del precio del
//producto y la cantidad
//Si el cliente gasta más de $1000 debemos
//aplicarle un descuento del 10%

let precio: number = 0;
let cantidad: number = 0;
let descuento: number;

// precio = Number(prompt("ingrese un precio:"));
// cantidad = Number(prompt("ingrese la cantidad: "));
precio = precio * cantidad;

if (precio >= 1000) {
  descuento = precio * 0.1;
  console.log(
    "se le aplica un desceunto del 10%. el valor final es" + precio - desceunto
  );
} else {
  console.log("no se le aplica descuento");
}
