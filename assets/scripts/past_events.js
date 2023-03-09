
const contenedor = document.querySelector('#contenedor')


const currentDate = data.currentDate;
const events = data.events;

let Tarjetas = ''

function crearCard(eventos,currentDate)
  {   
    let coleccionEventos=''
      for(const evento of eventos){
      coleccionEventos += `<div class="col ">
                      <div class="card h-100 " style="height:30rem">
                          <img src="${evento.image}" class="card-img-top" alt="...">
                      <div class="card-body">
                      <h5 class="card-title">${evento.name}</h5>
                      <p class="card-subtitle">${evento.date}</p>
                      <p class="card-text">${evento.description}</p>
                      </div>
                      <div class="card-footer row row-cols-2">`
      if(evento.date>currentDate){
        coleccionEventos += `<div class="col"><small class="text-muted">Price: $${evento.price}</small></div>
                      <div class="col"><a href="./details.html?id=${evento._id}" class="card-link"><button class="btn btn-outline-light btn-dark" type="submit">Details</button></a></div>
                      </div>
                      </div>
                      </div>`
      }else{
        coleccionEventos +=`<div class="col"><small class="text-muted">Asistence: ${evento.assistance}</small></div>
                      <div class="col"><a href="./details.html?id=${evento._id}" class="card-link"><button class="btn btn-outline-light btn-dark" type="submit">Details</button></a></div>
                      </div>
                      </div>
                      </div>`
      }
      
          
   }
    return coleccionEventos;
}
let eventosPasados = events.filter((evento)=>evento.date<currentDate)
Tarjetas = crearCard(eventosPasados,currentDate);
contenedor.innerHTML=Tarjetas;

//Buscar escribiendo por titulo o categoria
let botonBuscar= document.getElementById("botonBuscar")
let buscador = document.getElementById("buscador")
let formWrite = document.getElementById("formWrite")

formWrite.addEventListener("submit",(buscar)=>{
  buscar.preventDefault()
})
botonBuscar.addEventListener("click" ,()=>{
    let CardFiltradas = eventosPasados.filter((evento)=> evento.name.toLowerCase().includes(buscador.value.toLowerCase()) || evento.category.toLowerCase().includes(buscador.value.toLowerCase()))
    Tarjetas = crearCard(CardFiltradas,currentDate);
    contenedor.innerHTML=Tarjetas;

}) 