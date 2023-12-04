let rowPostres = document.getElementById("rowPostres");
let rowBebidas = document.getElementById("rowBebidas");
let rowPizzas = "";
let colPostres = "";

let rowPiza = document.getElementById("rowPiza");
let contianerAnuncio = document.getElementById("contianerAnuncio");

let verTodo = document.getElementById("verTodo");
let soloPizza = document.getElementById("soloPizza");
let soloRefrescos = document.getElementById("soloRefrescos");
let soloPostres = document.getElementById("soloPostres");

const ponerRowFilasBebidas = () => {
  contianerAnuncio.innerHTML += `<div id="rowBebidas" class="row cartelDescrip"> <div class="col-4 ColCartel">
      <div class="textoP3"><p>BEBIDAS</p></div>
      </div>
      <div class="col-4 ColCartel2">
        <div class="textoP32"><p>Lo mejor de lo mejor</p></div>
        </div></div>`;

  contianerAnuncio.innerHTML += `<div id="colBebidas" style="margin-top: 10px;margin-bottom: 10px; display: flex;justify-content: space-between;" class="row"></div>`;
};

const func_rowFilasPizzas = () => {
  //aca voy a colocar header de cada producto
  contianerAnuncio.innerHTML += `<div id="rowPiza" class="row cartelDescrip">
  <div class="col-4 ColCartel">
   <div class="textoP3"><p>Pizzas</p></div>
   </div>
   <div class="col-4 ColCartel2">
     <div class="textoP32"><p>Lo mejor de lo mejor</p></div>
     </div>
 </div>`;
  contianerAnuncio.innerHTML += `<div id="rowPizzas" style="margin-top: 10px;margin-bottom: 10px; display: flex;justify-content: space-between;" class="row"></div>`;
};

const func_rowFilasPostres = () => {
  //aca voy a colocar titulo de los postres
  contianerAnuncio.innerHTML += `<div id="rowPostres" class="row cartelDescrip"> <div class="col-4 ColCartel">
 <div class="textoP3"><p>POSTRES</p></div>
 </div>
 <div class="col-4 ColCartel2">
   <div class="textoP32"><p>Lo mejor de lo mejor</p></div>
   </div></div>`;
  contianerAnuncio.innerHTML += `<div id="colPostres" style="margin-top: 10px;margin-bottom: 10px; display: flex;justify-content: space-between;" class="row"></div>`;
};

//aca empiezo a llamar las funciones para que lo muestre
//func_rowFilasPizzas();
//func_rowFilasPostres();
//ponerRowFilasBebidas();
colPostres = document.getElementById("colPostres");
let colBebidas = document.getElementById("colBebidas");
rowPizzas = document.getElementById("rowPizzas");
//------------------------------------------------------------
fetch("productos.json")
  .then((datos) => {
    return datos.json();
  })
  .then((datos) => {
    datos.pizza.forEach((element) => {
      let descrit = ` <div class="col-3">
     <div class="card" style="width: 100%;">
       <img src="${element.imagen}" class="card-img-top" alt="${element.imagen}">
       <div class="card-body">
         <a  href="#" class="btn btn-primary btnAnuncio">PIDE YA</a>
         <h5 class="card-title tituloAnuncio">${element.nombre}</h5>
         <p style="height: 65px;" class="card-text textoAnuncio">${element.descripcion}</p>
        
       </div>
     </div>
   </div>`;
      rowPizzas.innerHTML += descrit;
    });

    datos.postres.forEach((element) => {
      let descrit = ` <div class="col-3">
       <div class="card" style="width: 100%;">
         <img src="${element.imagen}" class="card-img-top" alt="${element.imagen}">
         <div class="card-body">
           <a  href="#" class="btn btn-primary btnAnuncio">PIDE YA</a>
           <h5 class="card-title tituloAnuncio">${element.nombre}</h5>
           <p style="height: 65px;" class="card-text textoAnuncio">${element.descripcion}</p>
          
         </div>
       </div>
     </div>`;
      colPostres.innerHTML += descrit;
    });

    //aca voy a colocar el titulo de las bebidas
    rowBebidas.innerHTML = ` <div class="col-4 ColCartel">
     <div class="textoP3"><p>BEBIDAS</p></div>
     </div>
     <div class="col-4 ColCartel2">
       <div class="textoP32"><p>Lo mejor de lo mejor</p></div>
       </div>`;

    datos.refrescos.forEach((element) => {
      let descrit = ` <div class="col-3">
       <div class="card" style="width: 100%;">
         <img src="${element.imagen}" class="card-img-top" alt="${element.imagen}">
         <div class="card-body">
           <a  href="#" class="btn btn-primary btnAnuncio">PIDE YA</a>
           <h5 class="card-title tituloAnuncio">${element.nombre}</h5>
           <p style="height: 65px;" class="card-text textoAnuncio">${element.descripcion}</p>
          
         </div>
       </div>
     </div>`;
      colBebidas.innerHTML += descrit;
    });
  });

//aca voy hacer el evento del boton solo pizzas para que muestre solo las pizzas
soloPizza.addEventListener("click", () => {
  rowBebidas.innerHTML = "";
  colBebidas.innerHTML = "";
  rowPostres.innerHTML = "";
  colPostres.innerHTML = "";
  rowPiza.innerHTML = "";
  rowPizzas.innerHTML = "";
  rowPiza.innerHTML = ` <div class="col-4 ColCartel">
  <div class="textoP3"><p>Pizzas</p></div>
  </div>
  <div class="col-4 ColCartel2">
    <div class="textoP32"><p>Lo mejor de lo mejor</p></div>
    </div>`;
  fetch("productos.json")
    .then((datos) => {
      return datos.json();
    })
    .then((datos) => {
      datos.pizza.forEach((element) => {
        let descrit = ` <div class="col-3">
           <div class="card" style="width: 100%;">
             <img src="${element.imagen}" class="card-img-top" alt="${element.imagen}">
             <div class="card-body">
               <a  href="#" class="btn btn-primary btnAnuncio">PIDE YA</a>
               <h5 class="card-title tituloAnuncio">${element.nombre}</h5>
               <p style="height: 65px;" class="card-text textoAnuncio">${element.descripcion}</p>
              
             </div>
           </div>
         </div>`;
        rowPizzas.innerHTML += descrit;
      });
    });
});

//aca voy hacer el evento del boton solo bebidas para que muestre solo las bebidas
soloRefrescos.addEventListener("click", () => {
  rowBebidas.innerHTML = "";
  colBebidas.innerHTML = "";
  rowPostres.innerHTML = "";
  colPostres.innerHTML = "";
  rowPiza.innerHTML = "";
  rowPizzas.innerHTML = "";
  rowBebidas.innerHTML = ` <div class="col-4 ColCartel">
    <div class="textoP3"><p>BEBIDAS</p></div>
    </div>
    <div class="col-4 ColCartel2">
      <div class="textoP32"><p>Lo mejor de lo mejor</p></div>
      </div>`;
  fetch("productos.json")
    .then((datos) => {
      return datos.json();
    })
    .then((datos) => {
      datos.refrescos.forEach((element) => {
        let descrit = ` <div class="col-3">
             <div class="card" style="width: 100%;">
               <img src="${element.imagen}" class="card-img-top" alt="${element.imagen}">
               <div class="card-body">
                 <a  href="#" class="btn btn-primary btnAnuncio">PIDE YA</a>
                 <h5 class="card-title tituloAnuncio">${element.nombre}</h5>
                 <p style="height: 65px;" class="card-text textoAnuncio">${element.descripcion}</p>
                
               </div>
             </div>
           </div>`;
        colBebidas.innerHTML += descrit;
      });
    });
});

//aca voy hacer el evento del boton solo postres para que muestre solo las postres
soloPostres.addEventListener("click", () => {
  rowBebidas.innerHTML = "";
  colBebidas.innerHTML = "";
  rowPostres.innerHTML = "";
  colPostres.innerHTML = "";
  rowPiza.innerHTML = "";
  rowPizzas.innerHTML = "";
  rowPostres.innerHTML = ` <div class="col-4 ColCartel">
      <div class="textoP3"><p>POSTRES</p></div>
      </div>
      <div class="col-4 ColCartel2">
        <div class="textoP32"><p>Lo mejor de lo mejor</p></div>
        </div>`;
  fetch("productos.json")
    .then((datos) => {
      return datos.json();
    })
    .then((datos) => {
      datos.postres.forEach((element) => {
        let descrit = ` <div class="col-3">
               <div class="card" style="width: 100%;">
                 <img src="${element.imagen}" class="card-img-top" alt="${element.imagen}">
                 <div class="card-body">
                   <a  href="#" class="btn btn-primary btnAnuncio">PIDE YA</a>
                   <h5 class="card-title tituloAnuncio">${element.nombre}</h5>
                   <p style="height: 65px;" class="card-text textoAnuncio">${element.descripcion}</p>
                  
                 </div>
               </div>
             </div>`;
        colPostres.innerHTML += descrit;
      });
    });
});

//aca voy hacer el evento del boton sver todo para que muestre todo
verTodo.addEventListener("click", () => {
  rowBebidas.innerHTML = "";
  colBebidas.innerHTML = "";
  rowPostres.innerHTML = "";
  colPostres.innerHTML = "";
  rowPiza.innerHTML = "";
  rowPizzas.innerHTML = "";
  rowPostres.innerHTML = ` <div class="col-4 ColCartel">
        <div class="textoP3"><p>POSTRES</p></div>
        </div>
        <div class="col-4 ColCartel2">
          <div class="textoP32"><p>Lo mejor de lo mejor</p></div>
          </div>`;
  fetch("productos.json")
    .then((datos) => {
      return datos.json();
    })
    .then((datos) => {
      rowPiza.innerHTML = ` <div class="col-4 ColCartel">
             <div class="textoP3"><p>PIZZA</p></div>
             </div>
             <div class="col-4 ColCartel2">
               <div class="textoP32"><p>Lo mejor de lo mejor</p></div>
               </div>`;
      datos.pizza.forEach((element) => {
        let descrit = ` <div class="col-3">
             <div class="card" style="width: 100%;">
               <img src="${element.imagen}" class="card-img-top" alt="${element.imagen}">
               <div class="card-body">
                 <a  href="#" class="btn btn-primary btnAnuncio">PIDE YA</a>
                 <h5 class="card-title tituloAnuncio">${element.nombre}</h5>
                 <p style="height: 65px;" class="card-text textoAnuncio">${element.descripcion}</p>
                
               </div>
             </div>
           </div>`;
        rowPizzas.innerHTML += descrit;
      });

      datos.postres.forEach((element) => {
        let descrit = ` <div class="col-3">
               <div class="card" style="width: 100%;">
                 <img src="${element.imagen}" class="card-img-top" alt="${element.imagen}">
                 <div class="card-body">
                   <a  href="#" class="btn btn-primary btnAnuncio">PIDE YA</a>
                   <h5 class="card-title tituloAnuncio">${element.nombre}</h5>
                   <p style="height: 65px;" class="card-text textoAnuncio">${element.descripcion}</p>
                  
                 </div>
               </div>
             </div>`;
        colPostres.innerHTML += descrit;
      });

      //aca voy a colocar el titulo de las bebidas
      rowBebidas.innerHTML = ` <div class="col-4 ColCartel">
             <div class="textoP3"><p>BEBIDAS</p></div>
             </div>
             <div class="col-4 ColCartel2">
               <div class="textoP32"><p>Lo mejor de lo mejor</p></div>
               </div>`;

      datos.refrescos.forEach((element) => {
        let descrit = ` <div class="col-3">
               <div class="card" style="width: 100%;">
                 <img src="${element.imagen}" class="card-img-top" alt="${element.imagen}">
                 <div class="card-body">
                   <a  href="#" class="btn btn-primary btnAnuncio">PIDE YA</a>
                   <h5 class="card-title tituloAnuncio">${element.nombre}</h5>
                   <p style="height: 65px;" class="card-text textoAnuncio">${element.descripcion}</p>
                  
                 </div>
               </div>
             </div>`;
        colBebidas.innerHTML += descrit;
      });
    });
});
