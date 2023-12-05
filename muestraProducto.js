let totalItem = document.getElementById("totalItem");
let contenedorPrincipal = document.getElementById("contenedorPrincipal");
let datosLocal = window.localStorage;
let fila1 = document.getElementById("fila1");
let fila2 = document.getElementById("fila2");
let fila3 = document.getElementById("fila3");
let fila4 = document.getElementById("fila4");
let fila5 = document.getElementById("fila5");
let llaves = Object.keys(datosLocal);
totalItem.innerHTML = `<p>${llaves.length}</p>`;
if (llaves.length > 0) {
  llaves.forEach((llave, index) => {
    let elemento = JSON.parse(datosLocal.getItem(llave));

    let descripcion = `   <div class="col-2">
    <div class="card" style="width: 100%">
      <img
        id="ImagenPizza"
        src="${elemento.Imagen}"
        class="card-img-top"
        alt="${elemento.Imagen}"
      />
      <div class="card-body">
        <h5 class="card-title tituloAnuncio">${elemento.nombre}</h5>
        <p style="height: 65px" class="card-text textoAnuncio">${elemento.precio}</p>
        <a onclick="funcionEliminarItem(${llave})" id="btnPideYA" href="#" class="btn btn-primary btnAnuncio"
          >Eliminar</a
        >
      </div>
    </div>
  </div>`;

    if (index + 1 <= 6) {
      fila1.innerHTML += descripcion;
    }
    if (index + 1 > 6 && index + 1 <= 12) {
      fila2.innerHTML += descripcion;
    }
    if (index + 1 > 12 && index + 1 <= 18) {
      fila3.innerHTML += descripcion;
    }
    if (index + 1 > 18 && index + 1 <= 24) {
      fila4.innerHTML += descripcion;
    }
    if (index + 1 > 24 && index + 1 <= 30) {
      fila5.innerHTML += descripcion;
    }
  });
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

//aca voy hacer la funcion eliminar item
const funcionEliminarItem = (numero) => {
  datosLocal.removeItem(numero);
  window.location.href = "muestraProductos.html";
};
