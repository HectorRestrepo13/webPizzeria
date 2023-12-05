let totalItem = document.getElementById("totalItem");
let contenedorPrincipal = document.getElementById("contenedorPrincipal");
let datosLocal = window.localStorage;
let verCantidad = Object.keys(datosLocal);
totalItem.innerHTML = `<p>${verCantidad.length}</p>`;
if (verCantidad.length > 0) {
} else {
  contenedorPrincipal.innerHTML += `  <div class="row">
    <div class="col colImagen">
      <div class="tituloGoldo">
        <h1>TU CARRITO</h1>
      </div>
      <div class="imagenGoldo">
        <img
          src="./imagenes/63675557-hombre-gordo-con-la-hamburguesa-ilustración-vectorial-de-dibujos-animados-carácter-obesos-gordo.jpg"
          alt="hombreGoldo"
          srcset="
            ./imagenes/63675557-hombre-gordo-con-la-hamburguesa-ilustración-vectorial-de-dibujos-animados-carácter-obesos-gordo.jpg
          "
        />
      </div>
      <div class="textoGoldo">
        <p>
          Tu carrito de compras está vacío, pero tu estómago no debería
          estar igual. Haz tu pedido y vuelve para aquí para pagar.
        </p>
      </div>
    </div>
  </div>`;
}
