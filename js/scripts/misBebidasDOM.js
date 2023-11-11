//CAPTURA DOM
//Fecha  y Hora
let horaDiv = document.getElementById("hora")

let selectOrden = document.getElementById("selectOrden")
let buscador = document.getElementById("buscador")
let containerBebidas = document.getElementById("bebidas")
let formCargarBebida = document.getElementById("formCargarBebida")
let guardarBebidaBtn = document.getElementById("guardarBebidaBtn")

//Carrito
let modalBodyCarrito = document.getElementById("modal-bodyCarrito")
let botonCarrito = document.getElementById("botonCarrito")
let precioTotal = document.getElementById("precioTotal")
let botonFinalizarCompra = document.getElementById(`botonFinalizarCompra`)

//Importo variables para usar en el calculo de fardos
import {nroInputsGaseosa} from "./controladorDeGaseosas.js"
import {nroInputsCerveza} from "./controladorDeCervezas.js"
import {nroInputsFernet} from "./controladorDeFernet.js"

//se utiliza en linea 389
let litrosPorFardoDeGaseosa = {}
let litrosPorFardoDeCerveza = {}
let litrosPorFardoDeFernet = {}
//
let productosCarrito = JSON.parse(sessionStorage.getItem(`carrito`)) ?? []

//CREO EL CONSTRUCTOR
class Bebida{
    constructor(id, tipo, marca, sabor, medida, precio, imagen){
//atributos-propiedades
        this.id     = id,
        this.tipo   = tipo,
        this.marca  = marca,
        this.sabor  = sabor,
        this.medida = medida,
        this.precio = precio,
        this.imagen = imagen
        //no es stock, solo sirve para el carrito
        this.cantidad = 1
    }
//Metodos
    unidadesPorBulto () {
        if (this.medida == 3 ) {return 6}
        else if (this.medida == 2.25) {return 8}
        else if (this.medida == 1.75) {return 8}
        else if (this.medida == 1.5) {return 6}
        else if (this.medida == 0.75) {return 12}
        else if (this.medida == 0.5) {return 12}
        else if (this.medida == 0.473) {return 24}
        else if (this.medida == 0.375) {return 12}
        else return "la medida no esta cargada en la base de datos comuniquese con su programador de confianza"
    }
    mostrarInfoBebida(){
        console.log(`La bebida tiene como id el numero ${this.id}, es del tipo ${this.tipo}, es marca ${this.marca}, su sabor es ${this.sabor}, su medida es ${this.medida} Litros, el bulto trae ${this.unidadesPorBulto()} unidades y su precio es ${this.precio}`)
    }
//Metodos para el carrito
    sumarUnidad(){
        this.cantidad++
        return this.cantidad
    }
    restarUnidad(){
        this.cantidad = this.cantidad - 1
        return this.cantidad
    }
} 
//esta funcion vacia todo el storage para poder recargar la pagina y no me duplique los elementos cargados
function liberarStorage () {
    localStorage.removeItem ("deposito")
    localStorage.removeItem ("tiposDeGaseosas")
    localStorage.removeItem ("tiposDeCervezas")
    localStorage.removeItem ("tiposDeFernet")
    localStorage.removeItem ("arrayDatosIngresados")
    }
//esta funcion muestra el catalogo de lo que tenga cargado el array que recibe por parametro, inyecta codigo HTML para visualizar los productos.
function mostrarCatalogoDOM(array){

    containerBebidas.innerHTML = ""

    for(let bebida of array){
        
        let bebidaNuevaDiv= document.createElement("div")
        bebidaNuevaDiv.className = "col-12 col-md-6 col-lg-4 my-2"
        bebidaNuevaDiv.innerHTML = `
            <div id="${bebida.id}" class="card" style="width: 17rem;">
                    <img class="card-img-top img-fluid" style="height: 17rem;"src="./js/assets/img/${bebida.imagen}" alt="${bebida.tipo} marca ${bebida.marca} sabor ${bebida.sabor} de ${bebida.medida} Litros  ">
                    <div class="card-body">
                        <h4 class="card-title"></h4>
                        <p>tipo: ${bebida.tipo}</p>
                        <p>marca: ${bebida.marca}</p>
                        <p>sabor: ${bebida.sabor}</p>
                        <p>medida: ${bebida.medida} L</p>
                        <p> Este Producto contiene <b>${bebida.unidadesPorBulto(bebida.medida)} </b> unidades en el fardo </p>
                        <p class="">Precio: ${bebida.precio}</p>
                    <button id="agregarBtn${bebida.id}" class="btn btn-outline-secondary">Agregar al carrito</button>
                    </div>
        </div> `
        containerBebidas.append(bebidaNuevaDiv)

        let agregarBtn = document.getElementById(`agregarBtn${bebida.id}`)

        agregarBtn.addEventListener("click", () => {
        agregarAlCarrito(bebida)
        
    })
    }
} 

//Creo la variable para mi deposito donde se almacenaran todas mis bebidas
let deposito = []

//Creo las variables donde se almacenan las bebidas dependiendo de su tipo.
export const tiposDeGaseosas = []
export const tiposDeCervezas = []
export const tiposDeFernet = []

//Creo la funcion que toma los Datos del archivo bebidas.json y los convierte en objetos guardados en un array dentro de la variable deposito
const cargarDeposito = async () => {
    const resp = await fetch ("./js/scripts/bebidas.json")
    const dataBebidas = await resp.json ()
    for (let bebida of dataBebidas){
        let bebidaNueva = new Bebida (bebida.id, bebida.tipo, bebida.marca, bebida.sabor, bebida.medida, bebida.precio, bebida.imagen)
        deposito.push(bebidaNueva)
            if (bebidaNueva.tipo == "Gaseosa") {
                tiposDeGaseosas.push(bebidaNueva)
            }
            if (bebidaNueva.tipo == "Cerveza") {
                tiposDeCervezas.push(bebidaNueva)
            }
            if (bebidaNueva.tipo == "Fernet") {
                tiposDeFernet.push(bebidaNueva)
            }
    }
//Almacena en el sessionStorage la key deposito la cual almacena todos los datos de la variable deposito
    sessionStorage.setItem("deposito", JSON.stringify(deposito))
//Almacena en el sessionStorage la key tiposDeGaseosas la cual almacena todos los datos de la variable tiposDeGaseosa
    sessionStorage.setItem("tiposDeGaseosas", JSON.stringify(tiposDeGaseosas))
//Almacena en el sessionStorage la key tiposDeCervezas la cual almacena todos los datos de la variable tiposDeCerveza
    sessionStorage.setItem("tiposDeCervezas", JSON.stringify(tiposDeCervezas))
//Almacena en el sessionStorage la key tiposDeFernet la cual almacena todos los datos de la variable tiposDeFernet
    sessionStorage.setItem("tiposDeFernet", JSON.stringify(tiposDeFernet))

//Una vez cargada la variable "deposito" muestra visualmente en el navegador todas mis bebidas
    mostrarCatalogoDOM(deposito)
} 
//Establece una Condicion si existe deposito en el sessionStorage
if(sessionStorage.getItem("deposito")){
//si ya esta cargado en el sessionStorage, busca la key deposito, si ya existe, no hace nada.|||||||REVISARRRRR|||||

}else{
//si no esta cargado entonces ejecuta la funcion cargar deposito
    cargarDeposito()
}
// Esta funcion se ejecuta para agregar los elementos que se carguen en el formulario agregar bebidas, el cual se accede desde el boton en el header, toma los elementos escritos en esos inputs cada uno tiene su propio id y almacena el valor ingresado en su correspondiente variable.
function agregarBebida(array){
    let tipo = document.getElementById("tipoInput")
    let marca = document.getElementById("marcaInput")
    let sabor = document.getElementById("saborInput")
    let medida = document.getElementById("medidaInput")
    let precio = document.getElementById("precioInput")

//utiliza el constructor crea una nueva bebida 
const nuevaBebida = new Bebida(array.length+1, tipo.value, marca.value, sabor.value, parseInt(medida.value), parseInt(precio.value), "bebidaNueva.webp")
array.push(nuevaBebida) 
//identifica si en el input con id "tipoInput" pusieron tipo Gaseosa entonces carga la bebida en el array de Gaseosas, si no no hace nada de igual forma para Cervezas y Fernet.
    tipo.value === "Gaseosa" ? tiposDeGaseosas.push(nuevaBebida) : ""
    tipo.value === "Cerveza" ? tiposDeCervezas.push(nuevaBebida) : ""
    tipo.value === "Fernet" ? tiposDeFernet.push(nuevaBebida) : ""
//resetea los campos de los inputs para que queden vacios.
    tipo.value =""
    marca.value =""
    sabor.value =""
    medida.value =""
    precio.value ="" 
//envia una notificacion con Sweet Alert indicando la Carga de la bebida
    Swal.fire ({
        title: `Excelente has agregado un tipo de Bebida`,
        text: `La Bebida ${nuevaBebida.marca} sabor ${nuevaBebida.sabor} de ${nuevaBebida.medida} L se ha sumado.`,
        imageUrl: `./js/assets/img/${nuevaBebida.imagen}`,
        imageHeight: 350,
        imageAlt: `${nuevaBebida.marca} sabor ${nuevaBebida.sabor} de ${nuevaBebida.medida}`,
        showConfirmButton: false,
        timer: 5500
    })
//agrega a la key "deposito" en el sessionStorage, lo que esta cargado en la variable "deposito", suma la nueva unidad que ya se cargo en la variable "deposito" en la key "deposito" del sessionStorage igual para el resto
    sessionStorage.setItem("deposito", JSON.stringify(deposito))
    sessionStorage.setItem("tiposDeGaseosas", JSON.stringify(tiposDeGaseosas))
    sessionStorage.setItem("tiposDeCervezas", JSON.stringify(tiposDeCervezas))
    sessionStorage.setItem("tiposDeFernet", JSON.stringify(tiposDeFernet))
} //fin de la funcion agregarBebida

//asigna un evento al boton guardarBebidaBtn que esta dentro del modal de agregarbebidas en el header del index.html, la funcion que tiene asignada al hacer click es agregar la bebida al array deposito y dependiendo del tipo a su correspondiente array (puede ser Gaseosa, Cerveza o Fernet) tambien carga las key en el sessionStorage con el nuevo producto, despues ejecuta la funcion mostrarCatalogoDOM con la variable "deposito" como parametro la cual muestra el nuevo elemento agregado visualmente en el navegador.
guardarBebidaBtn.addEventListener("click", () =>{
    agregarBebida(deposito)
    mostrarCatalogoDOM(deposito)
} )

//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||| ESTABLEZCO CONSTANTES Y FORMULAS PARA EL CALCULO  |||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

const coefgaseosas = 0.5
const coefcerveza = 0.25
const coeffernet = 0.045

const coeffrio = 0.82
const coefcalor = 1.18

function cantidadAdultos(){
    let cantAdultos = 0
    if(document.getElementById("cantAdultos").value === ""){
        cantAdultos = 0;
    }
    else{
        cantAdultos = document.getElementById("cantAdultos").value;
    }
    return (cantAdultos.value) 
}

function cantidadNinios(){
    let cantNinios = 0
    if(document.getElementById("cantNinios").value === ""){
        cantNinios = 0;
    }
    else{
        cantNinios = document.getElementById("cantNinios").value;
    }

    return (cantNinios.value) 
}

function cantidadHoras(){
    let cantHoras = 0
    if(document.getElementById("cantHoras").value === ""){
        cantHoras = 0;
    }
    else{
        cantHoras = document.getElementById("cantHoras").value;
    }
    return (cantHoras.value) 
}

function haceFrioOCalor(){
    let frioOCalor = 0
    if(document.getElementById("frioOCalor").value === ""){
        frioOCalor = 0;
    }
    else{
        frioOCalor = document.getElementById("frioOCalor").value;
    }
    if (frioOCalor == 1) {
        frioOCalor = coeffrio}
    else if (frioOCalor == 2) {
        frioOCalor = coefcalor} 
    return (frioOCalor.value)
    }

cantidadAdultos()
cantidadNinios()
cantidadHoras()
haceFrioOCalor()

    let arrayDatosIngresados = [cantAdultos.value,cantNinios.value,cantHoras.value,frioOCalor.value]
    sessionStorage.setItem ("arrayDatosIngresados",JSON.stringify(arrayDatosIngresados))

    let acumGaseosa20 = 0
    let acumCerveza20 = 0
    let acumFernet20 = 0
    let frioOCalor20 = ""
    let calorOFrio

    let botonCalcular = document.getElementById("botonCalcular")

    botonCalcular.addEventListener("click", () =>{
    
    let acumGaseosa2 = document.getElementById("acumGaseosa2")
    let acumCerveza2 = document.getElementById("acumCerveza2")
    let acumFernet2 = document.getElementById("acumFernet2")
    let frioOCalor2 = document.getElementById("frioOCalor2")
    if (frioOCalor.value == 1) {
        calorOFrio = coeffrio }
        else if (frioOCalor.value == 2){
        calorOFrio = coefcalor } 

let acumGaseosa = cantAdultos.value * coefgaseosas * cantHoras.value * calorOFrio + cantNinios.value * coefgaseosas * cantHoras.value * calorOFrio
let acumCerveza = cantAdultos.value * coefcerveza * cantHoras.value * calorOFrio
let acumFernet = cantAdultos.value * coeffernet * cantHoras.value * calorOFrio

let frioCalorRetorno
if (frioOCalor.value == 1) {
frioCalorRetorno = "Frio"}
else if (frioOCalor.value == 2){
frioCalorRetorno = "Calor" } 

    let arrayLitrosCalculados = [acumGaseosa, acumCerveza, acumFernet, frioCalorRetorno]

    acumGaseosa2.value = acumGaseosa.toFixed(0)
    acumCerveza2.value = acumCerveza.toFixed(0)
    acumFernet2.value = acumFernet.toFixed(0)
    frioOCalor2.value = frioCalorRetorno

    acumGaseosa20 = acumGaseosa2.value 
    acumCerveza20 = acumCerveza2.value
    acumFernet20 = acumFernet2.value
    frioOCalor20 = frioOCalor2.value

})

function limpiarCalc() {
    cantAdultos.value = ""
    cantNinios.value = ""
    cantHoras.value = ""
    frioOCalor.value = ""
    acumGaseosa2.value = ""
    acumCerveza2.value = ""
    acumFernet2.value = ""
    frioOCalor2.value = ""
}
limpiarCalculadoraBtn.addEventListener("click", () => {
    limpiarCalc()
})

///////////////////////////////////////
//////                          ///////
//////  CALCULADORA DE FARDOS   ///////
//////                          ///////
///////////////////////////////////////

for (let i = 0; i < tiposDeGaseosas.length; i++) {
    let labelGaseosa = `${tiposDeGaseosas[i].marca} ${tiposDeGaseosas[i].sabor} ${tiposDeGaseosas[i].medida} L`
    let litrosPorFardo = tiposDeGaseosas[i].medida* tiposDeGaseosas[i].unidadesPorBulto()
    litrosPorFardoDeGaseosa[labelGaseosa] = litrosPorFardo
    ;

}

for (let i = 0; i < tiposDeCervezas.length; i++) {
    let labelCerveza = `${tiposDeCervezas[i].marca} ${tiposDeCervezas[i].sabor} ${tiposDeCervezas[i].medida} L`
    let litrosPorFardo = tiposDeCervezas[i].medida* tiposDeCervezas[i].unidadesPorBulto()
    litrosPorFardoDeCerveza[labelCerveza] = litrosPorFardo
    ;
    
}

for (let i = 0; i < tiposDeFernet.length; i++) {
    let labelFernet = `${tiposDeFernet[i].marca} ${tiposDeFernet[i].sabor} ${tiposDeFernet[i].medida} L`
    let litrosPorFardo = tiposDeFernet[i].medida* tiposDeFernet[i].unidadesPorBulto()
    litrosPorFardoDeFernet[labelFernet] = litrosPorFardo
    ;
    
}
let botonCalcularFardos = document.getElementById("botonCalcularFardos")
    botonCalcularFardos.addEventListener("click", () =>{
        sectorMuestraDeCalculo.innerHTML = "";
        for (let i = 0; i < nroInputsGaseosa.length; i++) {
        let inputNro = document.getElementById(`inputGaseosa${i}`).value
        let selectNro = document.getElementById (`selectGaseosa${i}`)
        let optionText = selectNro.querySelector(`[value="${selectNro.value}"]`).innerText
        let litrosPorFardoNro = litrosPorFardoDeGaseosa[optionText]
        let muestraDeDatos = (acumGaseosa20*inputNro/100)/litrosPorFardoNro
        let muestraDeDatosFinal = [`${muestraDeDatos.toFixed(0)} fardos de ${optionText}`]
        
        let sectorMuestraDeCalculo = document.getElementById("sectorMuestraDeCalculo");
        let muestraResultadoG = document.createElement("p")
        muestraResultadoG.className ="text-bg-dark text-center";
        muestraResultadoG.textContent = muestraDeDatosFinal;
        sectorMuestraDeCalculo.appendChild(muestraResultadoG);
        }
        
        for (let i = 0; i < nroInputsCerveza.length; i++) {
            let inputNro = document.getElementById(`inputCerveza${i}`).value
            let selectNro =document.getElementById (`selectCerveza${i}`)
            let optionText = selectNro.querySelector(`[value="${selectNro.value}"]`).innerText
            let litrosPorFardoNro = litrosPorFardoDeCerveza[optionText]
            let muestraDeDatos = (acumCerveza20*inputNro/100)/litrosPorFardoNro
            let muestraDeDatosFinal = [`${muestraDeDatos.toFixed(0)} fardos de ${optionText}`]
            
            let sectorMuestraDeCalculo = document.getElementById("sectorMuestraDeCalculo");
            let muestraResultadoC = document.createElement("p");
            muestraResultadoC.className ="text-bg-dark text-center"
            muestraResultadoC.textContent = muestraDeDatosFinal;
            sectorMuestraDeCalculo.appendChild(muestraResultadoC);
            }

            for (let i = 0; i < nroInputsFernet.length; i++) {
                let inputNro = document.getElementById(`inputFernet${i}`).value
                let selectNro =document.getElementById (`selectFernet${i}`)
                let optionText = selectNro.querySelector(`[value="${selectNro.value}"]`).innerText
                let litrosPorFardoNro = litrosPorFardoDeFernet[optionText]
                let muestraDeDatos = (acumFernet20*inputNro/100)/litrosPorFardoNro
                let muestraDeDatosFinal = [`${muestraDeDatos.toFixed(0)} fardos de ${optionText}`]
                
                let sectorMuestraDeCalculo = document.getElementById("sectorMuestraDeCalculo");
                let muestraResultadoF = document.createElement("p");
                muestraResultadoF.className ="text-bg-dark text-center"
                muestraResultadoF.textContent = muestraDeDatosFinal;
                sectorMuestraDeCalculo.appendChild(muestraResultadoF);
        
                }
            
    })

///////////////////////////////////////
//////                          ///////
//////  AGREGAR AL CARRITO     ///////
//////                          ///////
///////////////////////////////////////




function agregarAlCarrito(elemento){

    let bebidaAgregada = productosCarrito.find((bebida) => bebida.id == elemento.id)
    bebidaAgregada == undefined ?  
            (
            productosCarrito.push(elemento),
            

            sessionStorage.setItem("carrito", JSON.stringify(productosCarrito)),
            
            Toastify({
                text: `La Bebida ${elemento.tipo} ${elemento.marca} ${elemento.sabor} ${elemento.medida} L ha sido sumado al carrito`,
                duration: 4000,
                gravity: "bottom",
                position: "right", 
                style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                }).showToast()) :
                Toastify({
                text: `La Bebida ${elemento.tipo} ${elemento.marca} ${elemento.sabor} ${elemento.medida} L ya existe en el carrito`,
                duration: 2500,
                gravity: "top",
                position: "center", 
                style: {
                background: "linear-gradient(to right, red, orange)",
                 color: "black",
                  fontWeight: "bold"
                },
              }).showToast()
            }

function cargarProductosCarrito(array){
    modalBodyCarrito.innerHTML = ""
    array.forEach(
        (productoCarrito) => {
            modalBodyCarrito.innerHTML += `
            <div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 100%;">
                 <img class="card-img-top top-50 start-50" style="width: 80%;" src="./js/assets/img/${productoCarrito.imagen}" alt="">
                 <div class="card-body">
                        <h4 class="card-title">${productoCarrito.marca}</h4>
                        <p class="card-text">${productoCarrito.sabor}</p>
                        <p class="card-text">$${productoCarrito.precio}</p>
                        <p class="card-text">Total de unidades ${productoCarrito.cantidad}</p> 
                        <p class="card-text">SubTotal ${productoCarrito.cantidad * productoCarrito.precio}</p> 
                        <button class= "btn btn-success" id="botonSumarUnidad${productoCarrito.id}"><i class=""></i>+</button>
                        <button class= "btn btn-danger" id="botonEliminarUnidad${productoCarrito.id}"><i class=""></i>-</button>
                        <button class= "btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
                 </div>    
            </div>
            `}
    )
    array.forEach(
        (productoCarrito) => {
                        document.getElementById(`botonSumarUnidad${productoCarrito.id}`).addEventListener("click", 
                        ()=>{
                            productoCarrito.sumarUnidad()
                            sessionStorage.setItem("carrito", JSON.stringify(array))
                            cargarProductosCarrito(array)
                        })
                        document.getElementById(`botonEliminarUnidad${productoCarrito.id}`).addEventListener("click",
                        ()=>{
                            let cantidadActual = productoCarrito.cantidad
                                if(cantidadActual <= 1){
                                let cardProducto = document.getElementById(`productoCarrito${productoCarrito.id}`)
                                cardProducto.remove()
                                let posicion = array.indexOf(productoCarrito)
                                array.splice(posicion, 1)
                                sessionStorage.setItem("carrito", JSON.stringify(array))
                                calcularTotal(array)
                            }else{
                                productoCarrito.restarUnidad()
                            }
                            sessionStorage.setItem("carrito", JSON.stringify(array))
                            cargarProductosCarrito(array)
                        })
            
            document.getElementById(`botonEliminar${productoCarrito.id}`).addEventListener("click", () =>{
                let cardProducto = document.getElementById(`productoCarrito${productoCarrito.id}`)
                cardProducto.remove()
                let posicion = array.indexOf(productoCarrito)
                array.splice(posicion, 1)
                sessionStorage.setItem("carrito", JSON.stringify(array))
                calcularTotal(array) 
            })
        }
    )
    calcularTotal(array)    
}
function calcularTotal(array){
    
    const totalReduce = array.reduce(
        (acumulador, bebida)=>
        {return acumulador + bebida.precio * bebida.cantidad},
        0
    )
    totalReduce > 0 ? precioTotal.innerHTML = `<strong>El total de su compra es: ${totalReduce}</strong>` : precioTotal.innerHTML = `No hay productos en el carrito` 
    return totalReduce
}

function finalizarCompra(array){
    let total = calcularTotal(array)
    Swal.fire({
        text: `Gracias por su compra, usted ha gastado ${total}`
    })
    productosCarrito = []
    sessionStorage.removeItem("carrito")
    document.getElementById("contar-items").innerHTML ="0";
}
    botonCarrito.addEventListener("click", () => {
        cargarProductosCarrito(productosCarrito)
    })
    botonFinalizarCompra.addEventListener("click", () =>{
        finalizarCompra(productosCarrito)
    })

///////////////////////////////////////
/////                            //////
/////  Buscar, Filtros y Ordenar //////
/////                            //////
///////////////////////////////////////


    function ordenarMayorMenor(array){
        let arrayMayorMenor = array.concat()
        
         arrayMayorMenor.sort(
            (par1,par2) => par2.precio - par1.precio
        )
        mostrarCatalogoDOM(arrayMayorMenor)
    }
    function ordenarMenorMayor(ar){
        let arrMenor = ar.concat()
        arrMenor.sort(
            (a, b) => a.precio - b.precio
        )
        mostrarCatalogoDOM(arrMenor)
    }
    function ordenarAlfabeticamenteMarca(array){
        let ordenadoAlf = array.concat()
        ordenadoAlf.sort(
            (a,b) => {
                if(a.marca > b.marca){
                    return 1
                }
                if(a.marca < b.marca){
                    return -1
                }
                return 0
            }
        )
        mostrarCatalogoDOM(ordenadoAlf)
    }
    function buscarInfo(buscado,array){
        let coincidencias = array.filter(
            (bebida) => {
                return bebida.marca.toLowerCase().includes(buscado.toLowerCase()) || bebida.marca.toLowerCase().includes(buscado.toLowerCase())
            }
        )
        coincidencias.length > 0 ? (mostrarCatalogoDOM(coincidencias), coincidenciasDiv.innerHTML ="") : (mostrarCatalogoDOM(array), coincidenciasDiv.innerHTML = `<h3>No hay coincidencias con su búsqueda, este es nuestro catálogo completo</h3>`) 
    }

    buscador.addEventListener("input", () => {
       
        buscarInfo(buscador.value,deposito)
    })

    selectOrden.addEventListener("change", () => {
        
        switch(selectOrden.value){
            case "1":
                ordenarMayorMenor(deposito)
            break
            case "2":
                ordenarMenorMayor(deposito)
            break
            case "3":
                ordenarAlfabeticamenteMarca(deposito)
            break
            default:
                mostrarCatalogoDOM(deposito)
            break
        }
    })

///////////////////////////////////////
/////                            //////
/////  Muestra la Fecha y Hora   //////
/////                            //////
///////////////////////////////////////

//Muestra la Hora y se actualiza cada 1 seg. 
    setTimeout(()=>{
    const DateTime = luxon.DateTime
    
    setInterval(()=>{
        let horaActual = DateTime.now()
        horaDiv.innerHTML = `${horaActual.toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS)}`
    },1000)
    })