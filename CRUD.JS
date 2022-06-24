/*
Sistema de inventario.

10 productos con nombre, precio, cantidad

Agregar, borrar, modificar.

Vender y comprar. (Solo se pueden comprar productos que existan, y no se puede vender, si no se tienen suficientes productos)
Se debe poder vender mas de un producto y al final dar el total de la venta o compra.

Menu con opciones

1.- Ver inventario
2.- Modificar productos
3.- Agregar productos
4.- Compra
5.- Venta
*/

const productos = [{
    nombre: 'Cebolla',
    precio: 15 ,
    cantidad: 12    
},{
    nombre: 'Platano',
    precio: 21 ,
    cantidad: 6
},{
    nombre: 'Cerveza',
    precio: 36 ,
    cantidad: 21
}];

// ventana Inventario
let ventanaInventario = () => {
    document.getElementById("ventanaInventario").style.display = "block";
}

let cerrarVentanaInventario = () => {
    document.getElementById("ventanaInventario").style.display = "none";
}

let inventarioDeProductos = () => {
    let inventario = document.getElementById('innerInventario');
    for(let i = 0; i < productos.length; i++){
        inventario.innerHTML +=
        `<tr>
            <td id="${productos[i].nombre}">${productos[i].nombre}</td>
            <td id="${productos[i].precio}">$${productos[i].precio}</td>
            <td id="${productos[i].cantidad}">${productos[i].cantidad}</td>
        </tr> `
    };
}

let borrarInventario = () => {
    let table = document.getElementById("innerInventario");
    let borrar = () => {
        for(let i = -1; i < productos.length; i++){
        table.deleteRow(table[i]);
        }
    }
    (table.length === 0)
        ? window.alert("La tabla ha sido eliminada")
        : borrar();
}

// ventana Agregar Producto

let ventanaAgregarProducto = () => {
    document.getElementById("ventanaAgregarProducto").style.display = "block";
    document.getElementById("producto").focus();
}

let cerrarVentanaAgregarProducto = () => {
    document.getElementById("ventanaAgregarProducto").style.display = "none";
}

let agregarProducto = () => {
    let producto = document.getElementById("producto").value;
    let precio = document.getElementById("precio").value;
    let cantidad = document.getElementById("cantidad").value;
    let proceso = () => {
        if(productos.length >= 10){
            window.alert("Se han agregado 10 productos, elimina productos para agregar mas.");
            producto.value = document.getElementById("producto").value = "";
            precio.value = document.getElementById("precio").value = "";
            cantidad.value = document.getElementById("cantidad").value ="";
            document.getElementById("producto").focus();
        }else{
            productos.push({nombre:producto,precio:parseFloat(precio),cantidad:parseInt(cantidad)});
            producto.value = document.getElementById("producto").value = "";
            precio.value = document.getElementById("precio").value = "";
            cantidad.value = document.getElementById("cantidad").value ="";
            document.getElementById("producto").focus();
            console.log(productos);
    }}
    (producto === "") 
       ? window.alert("Coloca el nombre del producto")
       :(precio === "")
            ? window.alert("Coloca el precio del producto")
            : (cantidad === "")
                ? window.alert("Coloca la cantidad del producto")
                : proceso();
}
// Evento para agregar con Enter.
let agregarProductoEnter = (event) => {
    if(event.key === "Enter") agregarProducto();
}

