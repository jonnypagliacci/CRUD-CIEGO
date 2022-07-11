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

//seleccionarVentana('inventario')

const ventanaAgregarProducto = () => {
    document.getElementById("ventanaAgregarProducto").style.display = "block";
    document.getElementById("ventanaInventario").style.display = "none";
    document.getElementById("ventanaVentaDeProducto").style.display = "none";
    document.getElementById("ventanaModificarProducto").style.display = "none";
    document.getElementById("ventanaCompraDeProducto").style.display = "none"
    document.getElementById("seleccionDeProductos").innerHTML = "";
    document.getElementById("producto").focus();
};
const ventanaVentaDeProducto = () => {
    document.getElementById("seleccionDeProductos").innerHTML = "";
    document.getElementById("ventanaVentaDeProducto").style.display = "block";
    document.getElementById("ventanaAgregarProducto").style.display = "none";
    document.getElementById("ventanaInventario").style.display = "none";
    document.getElementById("ventanaModificarProducto").style.display = "none";
    document.getElementById("ventanaCompraDeProducto").style.display = "none"
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
const ventanaModificarProducto = () => {
    document.getElementById("ventanaModificarProducto").style.display = "block";
    document.getElementById("ventanaAgregarProducto").style.display = "none";
    document.getElementById("ventanaVentaDeProducto").style.display = "none";
    document.getElementById("ventanaInventario").style.display = "none";
    document.getElementById("ventanaCompraDeProducto").style.display = "none"
    let seleccion = document.getElementById("seleccionDeProductos1");
    if(seleccion.length !== productos.length)   
    {
           
        for(let i = 0; i < productos.length ; i++)
            {seleccion.innerHTML +=
            `<option value="${productos[i].nombre}" >${productos[i].nombre}</option>`;
        };
        
    };
};
const ventanaCompraDeProducto = () => {
    document.getElementById("ventanaCompraDeProducto").style.display = "block"
    document.getElementById("ventanaAgregarProducto").style.display = "none";
    document.getElementById("ventanaInventario").style.display = "none";
    document.getElementById("ventanaVentaDeProducto").style.display = "none";
    document.getElementById("ventanaModificarProducto").style.display = "none";
    document.getElementById("seleccionDeProductos").innerHTML = "";
    let inventario = document.getElementById('innerInventario1');
    if(inventario.children.length < productos.length)
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
        };
    }else{
        inventario.innerHTML = "";
            if(inventario.children.length < productos.length)
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
            };
            
        }
    }    
};
// Cerrar ventanas
const cerrarVentanaInventario = () => ventanas.inventario.style.display = "none";
const cerrarVentanaAgregarProducto = () => ventanas.agregar.style.display = "none";
const cerrarVentanaVentaDeProducto = () => {
    document.getElementById("ventanaVentaDeProducto").style.display = "none";
    document.getElementById("seleccionDeProductos").innerHTML = "";
};   
const cerrarVentanaModificarProducto = () => document.getElementById("ventanaModificarProducto").style.display = "none";
const cerrarVentanaCompraDeProducto = () => document.getElementById("ventanaCompraDeProducto").style.display = "none";
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
const agregarProductoEnter1 = event => {
    if(event.key === "Enter") window.alert("falta agregar la función a realizar");
}


// Venta de Producto.
const listaVenta = [];
const botonSeleccionProducto = () => {
    const precioEscrito = document.getElementById("precioVenta");
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
    let totalCantidad = document.getElementById("cantidadUnidades");
    let totalDeProcutos = document.getElementById("cantidadProductoTotal");
    let agregarProducto = document.getElementById("cantidadTotal");
    let seleccionVenta = document.getElementById("seleccionDeProductos");
    let precioVenta = document.getElementById("precioVenta").innerText;
    let x = 0;
    if(totalCantidad.innerText !== "0") {
            for(const cantidad in productos){
                if(productos[cantidad].nombre === seleccionVenta.options[seleccionVenta.selectedIndex].value) {
                    productos[cantidad].cantidad -= 1;
                    totalCantidad.innerText = productos[cantidad].cantidad;
                }
            }
            if(precioVenta !== ""){
                listaVenta.push(parseFloat(precioVenta));
                for(let index = 0; index < listaVenta.length ; index++){
                    x += listaVenta[index];
                };
                return agregarProducto.innerHTML = `$${x}`,
                totalDeProcutos.innerHTML += 
                `
                ${seleccionVenta.options[seleccionVenta.selectedIndex].value} 
                $${precioVenta} <p></p>
                `;
                
            }else {
                window.alert("Selecciona un producto");
            };
        }else{
            window.alert(`No se cuenta con existencia de ${seleccionVenta.options[seleccionVenta.selectedIndex].value}, seleccione otro producto`);
        }    
}
const botonPagar = () => {
    if(listaVenta.length !== 0) {
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

// Ventana Modificar El Producto
const seleccionModificarProducto = () => {
    let ventanaProductosSeleccionados = document.getElementById("ventanitaModificarProducto");
    let seleccionVenta = document.getElementById("seleccionDeProductos1");
    for(let i = 0; i < productos.length; i++){
        if(seleccionVenta.options[seleccionVenta.selectedIndex].value === productos[i].nombre){
            ventanaProductosSeleccionados.innerText = 
            `
            Nombre del producto: ${productos[i].nombre} 
            Precio del Producto: $${productos[i].precio} 
            Cantidad del producto: ${productos[i].cantidad}
            `;
        }
    }
};
const botonModificar = () => {
    let ventanaProductosSeleccionados = document.getElementById("ventanitaModificarProducto");
    let seleccionVenta = document.getElementById("seleccionDeProductos1");
    let textoModificar = document.getElementById("textoModificar").value;
    let precioModificar = parseFloat(document.getElementById("precioModificar").value);
    let cantidadModificar = document.getElementById("cantidadModificar").value;

    if (!textoModificar){
        window.alert("Coloque el nuevo nombre del producto por favor");
    }else if(!precioModificar){
        window.alert("Coloca el nuevo precio del producto por favor");
    }else if(!cantidadModificar){
        window.alert("Coloca la nueva Cantidad del producto por favor");
    }else{
        for(let i = 0; i < productos.length; i++){
            if(seleccionVenta.options[seleccionVenta.selectedIndex].value === productos[i].nombre){
                productos[i].nombre = textoModificar,
                productos[i].precio = precioModificar,
                productos[i].cantidad = cantidadModificar;
                console.log(productos[i]);
            };
        };
        seleccionVenta.innerHTML = "";

        if(seleccionVenta.length !== productos.length)   
        {
            {    
            for(let i = 0; i < productos.length ; i++)
                seleccionVenta.innerHTML +=
                `<option value="${productos[i].nombre}" >${productos[i].nombre}</option>`;
            };
        };

        ventanaProductosSeleccionados.innerText = "";

        for(let i = 0; i < productos.length; i++){
            if(textoModificar === productos[i].nombre){
                ventanaProductosSeleccionados.innerText = 
                `"Producto modificado"
                Nombre del producto: ${productos[i].nombre} 
                Precio del Producto: $${productos[i].precio} 
                Cantidad del producto: ${productos[i].cantidad}
                `;
            }
        }
        document.getElementById("textoModificar").value = "";
        document.getElementById("precioModificar").value = "";
        document.getElementById("cantidadModificar").value = "";
        document.getElementById("textoModificar").focus();
    };
};

// Comprar Producto 

document.addEventListener("DOMContentLoaded", function(event) {
    let botonComprarProducto = document.getElementById("botonComprarProducto");
    let productoAComprar = document.getElementById("productoAComprar");
    let cantidadAComprar = document.getElementById("cantidadAComprar");
    botonComprarProducto.addEventListener("click", () => {
        for(let i = 0; i < productos.length ; i++){
            if(productoAComprar.value.toLowerCase() === productos[i].nombre.toLowerCase()){
                productos[i].cantidad += parseInt(cantidadAComprar.value);
                productoAComprar.value = "";
                cantidadAComprar.value = "";
                productoAComprar.focus();
            };
        };
    });
});
