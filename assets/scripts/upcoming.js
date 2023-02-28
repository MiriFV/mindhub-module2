const contenedor = document.getElementById('contenedorUp')

const currentDate = data.currentDate;
const events = data.events;

let Tarjetas = crearCardUp(events,currentDate);
function crearCardUp(events, currentDate);
  {   let coleccionEventos=''
      for(const evento of events){
        if(evento.date > currentDate)
      coleccionEventos += `<div class="col ">
                      <div class="card h-100 " style="height:35rem,weight: 20rem">
                          <img src="${evento.image}" class="card-img-top" alt="...">
                      <div class="card-body">
                      <h5 class="card-title">${evento.name}</h5>
                      <p class="card-subtitle">${evento.date}</p>
                      <p class="card-text">${evento.description}</p>
                      <p class="card-text">Capacidad: ${evento.capacity}</p>
                      </div>
                      <div class="card-footer row row-cols-2">
                     <div class="col"><small class="text-muted">Asistencia: ${evento.price}</small></div>
                      <div class="col"><a href="./details.html"><button class="btn btn-outline-light btn-dark" type="submit">Ver mas</button></a></div>
                      </div>
    </div>
  </div>`
   }
    return coleccionEventos;
}
contenedorUp.innerHTML=Tarjetas;