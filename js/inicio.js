//Validacion del usuario
let nick, contrasenia;
function usuarioNuevo(){
    do{
        nick = prompt("Ingresa nombre de usuario nuevo");
        
    }while( nick.length < 3 || nick[0] == nick[0].toLowerCase());

    do{
        contrasenia = prompt("Ingresa contraseña nueva");
    }while( contrasenia.length < 3 || contrasenia == contrasenia.isNumber);
    return {nick : nick, contrasenia : contrasenia}
}
// Inicio de Sesion
function iniciarSesion(){
    do{
        nickIngresado = prompt("Ingrese su nombre: ");
    }while(nickIngresado != nick)
        alert("Nombre correcto");
    do{
        contraseniaIngresada = prompt("Ingrese tu contraseñia: ");
    }while(contraseniaIngresada != contrasenia)
        alert("Contraseña correcta");
}
// Definición de productos
const productos = [
    { id: 1, nombre: "Camiseta", precio: 20 },
    { id: 2, nombre: "Pantalón", precio: 30 },
    { id: 3, nombre: "Zapatos", precio: 50 }
];

// Función para agregar un producto al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(prod => prod.id === id);
    if (producto) {
        carrito.push(producto);
        console.log(`Producto "${producto.nombre}" agregado al carrito.`);
    } else {
        console.log("Producto no encontrado.");
    }
}
// Función para eliminar un producto del carrito
function eliminarDelCarrito(id) {
    const indice = carrito.findIndex(prod => prod.id === id);
    if (indice !== -1) {
        const productoEliminado = carrito.splice(indice, 1)[0];
        console.log(`Producto "${productoEliminado.nombre}" eliminado del carrito.`);
    } else {
        console.log("Producto no encontrado en el carrito.");
    }
}
// Función para calcular el total de la compra
function calcularTotal() {
    let total = 0;
    carrito.forEach(producto => total += producto.precio);
    return total;
}

usuarioNuevo()
iniciarSesion()
const carrito = [];
agregarAlCarrito(1); // Agregar una camiseta al carrito
agregarAlCarrito(3)
agregarAlCarrito(2); // Agregar un pantalón al carrito
console.log("Carrito:", carrito);
eliminarDelCarrito(1); // Eliminar la camiseta del carrito
console.log("Carrito:", carrito);
total = calcularTotal()
console.log(total)