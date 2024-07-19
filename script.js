/** funcion que solicita el producto */
function solicitarProducto() {
  return (producto = prompt("Ingrese el nombre del producto"));
}

/** funcion que carga producto al arreglo */
const cargarProductos = (producto) => stock.push(producto);

/** funcion que muestra los resultados, en un alert la cantidad de productos y por consola el listado completo */
function imprimirResultados() {
  alert("Se cargaron " + stock.length + " productos");
  console.log(stock);
}

/** funcion que solicita el producto */
function leerProducto() {
  opcion = parseInt(
    prompt("1 - Ingresar un producto\n2 - Ver productos\n0 - Salir")
  );
}

let opcion = "";
let stock = [];

leerProducto();
while (opcion !== 0) {
  switch (opcion) {
    case 1:
      cargarProductos(solicitarProducto());
      break;
    case 2:
      imprimirResultados();
      break;
    default:
      alert("Opcion incorrecta");
      break;
  }
  leerProducto();
}
