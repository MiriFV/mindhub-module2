const queryString = location.search // Obtener lo que se pide 

const params = new URLSearchParams(queryString)

const id = params.get("id")

const evento = data.events.find((event)=>event._id==id)
const currentDate = data.currentDate;
const contenedor = document.querySelector('#contenedor')

 let card =`<div class="card mb-3">
<div class="row g-0">
  <div class="col-md-4">
      <img src="${evento.image}" class="card-img-top" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${evento.name}</h5>
      <p class="card-subtitle">${evento.date}</p>
      <p class="card-text">${evento.description}<br><br></p>
      <p class="card-subtitle">${evento.category}</p>
    <p class="card-text">Capacity: ${evento.capacity}`
if(evento.date<currentDate){
      card +=` / Estimate: ${evento.estimate}</p>
      
            <div class="card-footer row row-cols-2">
            <div class="col"><small class="text-muted">Price: $${evento.price}</small></div>
      
  </div>
  </div>
</div>
             </div>
             </div>`
  }else{
    card +=` / Assistance: ${evento.assistance}</p>
      
    <div class="card-footer row row-cols-2">
      <div class="col"><small class="text-muted">Price: $${evento.price}</small></div>
      
  </div>
  </div>
</div>
</div>
</div>`
  }
  contenedor.innerHTML= card