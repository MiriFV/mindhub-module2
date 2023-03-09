
const contenedor = document.querySelector('#contenedor')


const currentDate = data.currentDate;
const events = data.events;

let Tarjetas = ''

function filtroCategorias(valor) {
    let Categorias = document.querySelectorAll('.check-value')
    let elements = document.querySelectorAll(".card");

    elements.forEach((element) => {
        Categorias.forEach((categoria)=>{
            if (element!=categoria){

            }
        })

    })
}
//funcion dibujar


//Buscar
let botonBuscar= document.getElementById("botonBuscar")
let buscador = document.getElementById("buscador")

botonBuscar.addEventListener("click",()=>{
    let CardFiltradas = events.filter((evento)=> evento.name.toLowerCase().includes(buscador.value.toLowerCase()) || evento.category.toLowerCase().includes(buscador.value.toLowerCase()))
    
}) 