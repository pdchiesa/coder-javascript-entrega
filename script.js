function solicitarDatos() {
  nro1 = prompt("Ingresar el primer numero");
  nro2 = prompt("Ingrese el segundo numero");
}

function suma() {
  let suma = nro1 + nro2;
  return suma;
}

let nro1;
let nro2;

solicitarDatos();

console.log(nro1);
console.log(nro2);
console.log("resultado:" + suma());
