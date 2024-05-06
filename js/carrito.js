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

// Función para calcular el total de la compra
function calcularTotal() {
    let total = 0;
    carrito.forEach(producto => total += producto.precio);
    return total;
}


// Función para procesar el pago
function procesarPago() {
    const total = calcularTotal();
    console.log(`Total a pagar: $${total}`);
    // Aquí iría la lógica para procesar el pago, como enviar la información a un servidor.
}



// Ejemplo de uso
const carrito = [];
agregarAlCarrito(1); // Agregar una camiseta al carrito
agregarAlCarrito(1); // Agregar un pantalón al carrito
console.log("Carrito:", carrito);
procesarPago(); // Calcular y procesar el pago
