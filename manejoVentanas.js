setTimeout(() => {
    window.ventanas = {
      inventario: document.getElementById("ventanaInventario"),
      agregar:document.getElementById("ventanaAgregarProducto"),
      venta:document.getElementById("ventanaVentaDeProducto"),
      modificar:document.getElementById("ventanaModificarProducto"),
      compra:document.getElementById("ventanaCompraDeProducto"),
      seleccion: document.getElementById("seleccionDeProductos")
    }
    window.seleccionarVentana = (nombre) => {
        Object.entries(ventanas).map(ventana => {
          if(ventana[1].style.display === 'block' && nombre !== ventana[0]) {
              ventana[1].style.display = 'none'
          }
          if (nombre === ventana[0]) {
              ventana[1].style.display = 'block'
          }
        })
      };
}, 0)

// Funcion para abrir o cerrar ventanas
// Abrir ventanas 
const ventanaInventario = () => {
  Object.entries(ventanas).map(ventana => {
    console.log(ventana)
    if(ventana[1].style.display === 'block')
    ventana[1].style.display = 'none'
  })
  ventanas.inventario.style.display = 'block'
};