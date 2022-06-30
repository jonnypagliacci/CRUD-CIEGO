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

git push -u origin main
*/
// Lista de productos.
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

// Abrir ventanas 
const ventanaInventario = () => {
    document.getElementById("ventanaInventario").style.display = "block";
    document.getElementById("ventanaAgregarProducto").style.display = "none";
    document.getElementById("ventanaVentaDeProducto").style.display = "none";
    document.getElementById("seleccionDeProductos").innerHTML = "";
};
const ventanaAgregarProducto = () => {
    document.getElementById("ventanaAgregarProducto").style.display = "block";
    document.getElementById("ventanaInventario").style.display = "none";
    document.getElementById("ventanaVentaDeProducto").style.display = "none";
    document.getElementById("seleccionDeProductos").innerHTML = "";
    document.getElementById("producto").focus();
};
const ventanaVentaDeProducto = () => {
    document.getElementById("seleccionDeProductos").innerHTML = "";
    document.getElementById("ventanaVentaDeProducto").style.display = "block";
    document.getElementById("ventanaAgregarProducto").style.display = "none";
    document.getElementById("ventanaInventario").style.display = "none";
    let seleccion = document.getElementById("seleccionDeProductos");
    if(seleccion.length !== productos.length)   
    {
        {    
        for(let i = 0; i < productos.length ; i++)
            seleccion.innerHTML +=
            `<option value="${productos[i].nombre}">${productos[i].nombre}</option>`;
        };
    };
};
// Cerrar ventanas
const cerrarVentanaInventario = () => document.getElementById("ventanaInventario").style.display = "none";
const cerrarVentanaAgregarProducto = () => document.getElementById("ventanaAgregarProducto").style.display = "none";
const cerrarVentanaVentaDeProducto = () => {
    document.getElementById("ventanaVentaDeProducto").style.display = "none";
    document.getElementById("seleccionDeProductos").innerHTML = "";
};   
// Inventario. 
const inventarioDeProductos = () => {
    let inventario = document.getElementById('innerInventario');
    if(inventario.children.length === 0)
    {    
        inventario.innerHTML +=
            `<td>Producto</td>
            <td>Precio</td>
            <td>Cantidad</td>`;
        for(let i = 0; i < productos.length; i++){
            inventario.innerHTML +=
            `<tr>
                <td id="${productos[i].precio}">${productos[i].nombre}</td>
                <td id="${productos[i].precio}">$${productos[i].precio}</td>
                <td id="${productos[i].cantidad}">${productos[i].cantidad}</td>
            </tr> `
        }
    }else{
        window.alert("La tabla ha sido actualizada");
    }
};
const borrarInventario = () => {
    let table = document.getElementById("innerInventario");
    let borrar = () => {
        for(let i = 0; i < productos.length; i++)
        {
            while (table.firstChild) {
                table.removeChild(table.firstChild);
            }      
        }
    };
    (table.children.length === 0)
        ? window.alert("La tabla ha sido eliminada")
        : borrar();
};

//Agregar Producto.
const agregarProducto = () => {
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
    }};
    (producto === "") 
       ? window.alert("Coloca el nombre del producto")
       :(precio === "")
            ? window.alert("Coloca el precio del producto")
            : (cantidad === "")
                ? window.alert("Coloca la cantidad del producto")
                : proceso();
};

const agregarProductoEnter = event => {
    if(event.key === "Enter") agregarProducto();
};


// Venta de Producto.
const listaVenta = [];
const botonSeleccionProducto = () => {
    let precioEscrito = document.getElementById("precioVenta");
    let precioVenta = document.getElementById("precioVenta").innerText;
    let seleccionVenta = document.getElementById("seleccionDeProductos");
    let unidad = document.getElementById("cantidadUnidades");
    let cantidadUnidad = document.getElementById("cantidadUnidades").innerText;

    if(precioVenta === "" && cantidadUnidad === ""){
        for(let i = 0; i < productos.length; i++){
        if(seleccionVenta.options[seleccionVenta.selectedIndex].value === `${productos[i].nombre}`){
            precioVenta += `${productos[i].precio}`;
            cantidadUnidad += `${productos[i].cantidad}`;
        }
    }
        return precioEscrito.innerHTML = precioVenta, unidad.innerHTML = cantidadUnidad;
        
    }else{
        document.getElementById("precioVenta").innerHTML = "";
        document.getElementById("cantidadUnidades").innerHTML = "";
    };       
}

const agregarProductoCarrito = () => {
    let totalDeProcutos = document.getElementById("cantidadProductoTotal");
    let agregarProducto = document.getElementById("cantidadTotal");
    let seleccionVenta = document.getElementById("seleccionDeProductos");
    let precioVenta = document.getElementById("precioVenta").innerText;
    let x = 0;
    if(precioVenta !== ""){
        listaVenta.push(parseFloat(precioVenta));
        for(let i = 0; i < listaVenta.length ; i++){
            x += listaVenta[i];
        }
        return agregarProducto.innerHTML = `$${x}`,
        totalDeProcutos.innerHTML += 
        `
        ${seleccionVenta.options[seleccionVenta.selectedIndex].value} 
        $${precioVenta} <p></p>
        `;
        
    }else {
        window.alert("Selecciona un producto");
    };
}

const botonPagar = () => {
    if(listaVenta.length !== 0)
    {   
        for(let i = -2; i <= listaVenta.length; i++){
            listaVenta.pop();
        }
        window.alert("Venta realizada, Gracias por su preferencia");
        return document.getElementById("cantidadTotal").innerHTML = "",
        document.getElementById("precioVenta").innerHTML = "",
        document.getElementById("cantidadUnidades").innerHTML = "",
        document.getElementById("cantidadProductoTotal").innerHTML = "";
    }else
    {
        window.alert("Favor de ingresar producto al carrito");
    };
};




