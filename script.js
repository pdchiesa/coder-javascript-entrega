function solicitarProducto() {
  producto = prompt("Ingrese el nombre del producto");
}

let opcion;
let stock = [];
let producto;

opcion = parseInt(
  prompt(
    "Para ingresar un producto ingrese 1, para ver stock ingrese 2, Para salir ingrese 0"
  )
);
console.log(opcion);
while (opcion !== 0) {
  switch (opcion) {
    case 1:
      stock.push(solicitarProducto());
      break;
    case 2:
      console.log(stock);
      break;
    default:
      alert("Opcion incorrecta");
      break;
  }
  opcion = parseInt(
    prompt(
      "Para ingresar un producto ingrese 1, para ver stock ingrese 2, Para salir ingrese 0"
    )
  );
}
