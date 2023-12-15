let totalItem = document.getElementById("totalItem");
let contenedorPrincipal = document.getElementById("contenedorPrincipal");
let datosLocal = window.localStorage;
let fila1 = document.getElementById("fila1");
let fila2 = document.getElementById("fila2");
let fila3 = document.getElementById("fila3");
let fila4 = document.getElementById("fila4");
let fila5 = document.getElementById("fila5");
let mostrarFactura = document.getElementById("mostrarFactura");
let valorPizza = 0,
  cantidadPizza = 0;
let valorBebidas = 0,
  cantidadBebidas = 0;
let valorPostres = 0,
  cantidadPostres = 0;
let total = 0;
let llaves = Object.keys(datosLocal);
totalItem.innerHTML = `<p>${llaves.length}</p>`;
if (llaves.length > 0) {
  llaves.forEach((llave, index) => {
    let elemento = JSON.parse(datosLocal.getItem(llave));
    if (elemento.categoria == "pizza") {
      cantidadPizza = cantidadPizza + 1;
      valorPizza = valorPizza + elemento.precio;
    } else if (elemento.categoria == "postres") {
      cantidadPostres = cantidadPostres + 1;
      valorPostres = valorPostres + elemento.precio;
    } else if (elemento.categoria == "refrescos") {
      cantidadBebidas = cantidadBebidas + 1;
      valorBebidas = valorBebidas + elemento.precio;
    }

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

  let filaFactura = `<div class="col-6 colFactura">
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"
      >Valor Apagar</label
    >

    <div class="form-text">
      <label for="">Total de Pizza:</label>
      <label for="">${cantidadPizza}</label>
      <label for="">---- </label>
      <label for=""> SUBTOTAL $${valorPizza}</label>
    </div>
    <div class="form-text">
      <label for="">Total de Bebidas:</label>
      <label for="">${cantidadBebidas}</label>
      <label for="">---- </label>
      <label for=""> SUBTOTAL $${valorBebidas}</label>
    </div>
    <div class="form-text">
      <label for="">Total de Postres:</label>
      <label for="">${cantidadPostres}</label>
      <label for="">---- </label>
      <label for=""> SUBTOTAL $${valorPostres}</label>
    </div>
    <label for="exampleInputEmail1" class="form-label"
      >Valor TOTAL:
    </label>
    <label for="exampleInputEmail1" class="form-label">2510 </label>
  </div>

  <button id="pagar" type="button" class="btn btn-primary">Pagar</button>
</form>
</div>`;
  mostrarFactura.innerHTML = filaFactura;
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

let pagar = document.getElementById("pagar");

pagar.addEventListener("click", () => {
  Swal.fire({
    title: "Deseas Pagar?",
    text: "Se te descontara de la targeta de credito!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, Pagar",
  }).then((result) => {
    if (result.isConfirmed) {
      datosLocal.clear();
      Swal.fire({
        title: "Pagado!",
        text: "El pedido sera Enviado.",
        icon: "success",
      });
    }

    window.location.href = "muestraProductos.html";
  });
});
