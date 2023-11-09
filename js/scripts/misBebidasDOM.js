//CAPTURA DOM
//ES PARA INGRESAR CODIGO DE LA HORA EN EL MAIN
let horaDiv =document.getElementById("hora")


import {nroInputsGaseosa} from "./controladorDeGaseosas.js"
import {nroInputsCerveza} from "./controladorDeCervezas.js"
import {nroInputsFernet} from "./controladorDeFernet.js"
//se utiliza en linea 389


let litrosPorFardoDeGaseosa = {}
let litrosPorFardoDeCerveza = {}
let litrosPorFardoDeFernet = {}
//
let productosCarrito = JSON.parse(sessionStorage.getItem(`carrito`)) ?? []
console.log(productosCarrito)

let selectOrden = document.getElementById("selectOrden")
let buscador = document.getElementById("buscador")

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
//métodos en class se declaran por fuera del constructor
    unidadesPorBulto () {
/*esta comentada una parte porque intento hacer condiciones dentro de las condiciones, porque hay gaseosas como la secco y la Crush que viene en fardos de 4 botellas pero el console log de la linea nro50 me muestra otro resultado al que tiene que ser, no me estaria tomando las condiciones de &&*/
        if (this.medida == 3 /* && this.marca == "Coca Cola" || "Pepsi"  || "Sprite" || "Fanta" */) {return 6}
        /* else if (this.medida == 3 && this.marca == "Secco" || "Crush") {return 4}
        else if (this.medida == 3 && this.marca != "Secco" || "Crush") {return 6} */
        else if (this.medida == 2.25) {return 8}
        else if (this.medida == 1.75) {return 8}
        else if (this.medida == 1.5) {return 6}
        else if (this.medida == 0.75) {return 12} //fernet
        else if (this.medida == 0.5) {return 12}
        else if (this.medida == 0.473) {return 24} //latasDeCervezas
        else if (this.medida == 0.375) {return 12}
        else return "la medida no esta cargada en la base de datos comuniquese con su programador de confianza"
    }
    mostrarInfoBebida(){
        console.log(`La bebida tiene como id el numero ${this.id}, es del tipo ${this.tipo}, es marca ${this.marca}, su sabor es ${this.sabor}, su medida es ${this.medida} Litros, el bulto trae ${this.unidadesPorBulto()} unidades y su precio es ${this.precio}`)

        /* return `La bebida tiene como id el numero ${this.id}, es del tipo ${this.tipo}, es marca ${this.marca}, su sabor es ${this.sabor}, su medida es ${this.medida} Litros, el bulto trae ${this.unidadesPorBulto()} unidades y su precio es ${this.precio}` */
    }
    exponerEnCatalogo()
    {console.log(this.id, this.tipo, this.marca, this.sabor, this.medida, this.precio, this.imagen)}
    
    //sumarUnidad()
    sumarUnidad(){
        this.cantidad++
        return this.cantidad
    }
    restarUnidad(){
        this.cantidad = this.cantidad - 1
        return this.cantidad
    }
}
//Instanciación de objetos: 
    const gaseosa1 = new Bebida(1, "Gaseosa", "Coca Cola", "Cola", 3, 5600, "coca3.webp")

    const gaseosa2 = new Bebida(2, "Gaseosa", "Sprite", "Lima Limon", 3, 5400, "sprite3.webp")

    const gaseosa3 = new Bebida(3, "Gaseosa", "Fanta", "Naranja", 3, 5400, "fanta3.webp")

    const gaseosa4 = new Bebida(4, "Gaseosa", "Pepsi", "Cola", 3, 4900, "pepsi3.webp")

    const gaseosa5 = new Bebida(5, "Gaseosa", "Pepsi","Cola", 2.25, 5000, "pepsi225.webp")

    const gaseosa6 = new Bebida(6, "Gaseosa", "Mirinda", "Manzana", 2.25, 4800, "mirinda225.webp")

    const gaseosa7 = new Bebida(7, "Gaseosa", "Paso De Los Toros", "Pomelo", 2.25, 5300, "paso225.webp")

    const gaseosa8 = new Bebida(8, "Gaseosa", "Coca Cola", "Cola", 0.375, 2300, "coca375.webp")

    const cerveza1 = new Bebida(9, "Cerveza", "Imperial", "Lager", 0.473, 9500, "imperial473.webp")
    
    const cerveza2 = new Bebida(10, "Cerveza", "Imperial Golden", "Lager", 0.473, 9700, "golden473.webp")
    
    const cerveza3 = new Bebida(11, "Cerveza", "Quilmes", "Lager", 0.473, 9200, "quilmes473.webp")

    const fernet750 = new Bebida(12, "Fernet", "Branca", "Clasico", 0.750, 36000, "fernet750.webp")

//creo una variable que sera el array de las gaseosas.
//la exporto para usarla en controlador de Fardos.js
export const tiposDeGaseosas = []
//hago push dentro del array con todos los objetos gaseosas
//aqui tengo que mejorar con un for o algo asi para que se carguen todas las gaseosas incluso las que agreguen despues
tiposDeGaseosas.push (gaseosa1,gaseosa2,gaseosa3,gaseosa4,gaseosa5,gaseosa6,gaseosa7,gaseosa8)
// console log para comprobar que esten cargadas las gaseosas en el array y no continue vacio.
console.log(tiposDeGaseosas.length)

//creo una variable que sera el array de las cervezas.
//la exporto para usarla en controlador de Fardos.js
export const tiposDeCervezas = []
//hago push dentro del array con todos los objetos cervezas
//aqui tengo que mejorar con un for o algo asi para que se carguen todas las cervezas incluso las que agreguen despues
tiposDeCervezas.push (cerveza1, cerveza2, cerveza3)
// console log para comprobar que esten cargadas las cervezas en el array y no continue vacio.
console.log(tiposDeCervezas.length)

//creo una variable que sera el array del fernet.
//la exporto para usarla en controlador de Fardos.js
export const tiposDeFernet = []
//hago push dentro del array con todos los objetos fernet
//aqui tengo que mejorar con un for o algo asi para que se carguen todos los fernet incluso los que agreguen despues
tiposDeFernet.push (fernet750)
// console log para comprobar que esten cargados los fernet en el array y no continue vacio.
console.log(tiposDeFernet.length)

//console log para comprobar que la funcion retorne el valor correcto de unidades por bulto segun la medida de la misma.    
    let mostrar = gaseosa8.unidadesPorBulto ();
    console.log(mostrar);
//console log para comprobar que la funcion retorne, si se descomenta en la linea 28 entrega bien, sino entrega undefined por el scope.
    let mostrar2 = gaseosa8.mostrarInfoBebida()
    console.log(mostrar2);

//arrays de objetos:
//es preguntar si estanteria existe en el storage:
//si existe, hay info cargada

let estanteria = []
if(sessionStorage.getItem("estanteria")){
    console.log("ya existe")
    
    // estanteria = JSON.parse(sessionStorage.getItem("estanteria"))
    //hacer for of de estanteria y pasarle new Bebida
    for(let bebida of JSON.parse(sessionStorage.getItem("estanteria"))){
        let bebidaStorage = new Bebida (bebida.id, bebida.tipo, bebida.marca, bebida.sabor, bebida.medida, bebida.precio, bebida.imagen)
        estanteria.push(bebidaStorage)
    }
    console.log(estanteria)

}else{
    //no existe seteamos por primera vez
    console.log("seteamos por primera vez")
    estanteria.push(gaseosa1, gaseosa2, gaseosa3, gaseosa4, gaseosa5, gaseosa6, gaseosa7, gaseosa8, cerveza1, cerveza2, cerveza3,fernet750)
    console.log(estanteria)
    sessionStorage.setItem("estanteria", JSON.stringify(estanteria))
}

function mostrarCatalogo(array){
    //for of: para recorrer un array posición a posición
    console.log("Nuestro catálogo es: ")
    for(let bebida of array){
        bebida.exponerEnCatalogo()
    }
}

let containerBebidas = document.getElementById("bebidas")

function mostrarCatalogoDOM(array){
    //resetear el container
    containerBebidas.innerHTML = ""
    //for of: para recorrer un array posición a posición
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
        console.log(agregarBtn)
        agregarBtn.addEventListener("click", () => {
        agregarAlCarrito(bebida)
        
    })
    }
} 

mostrarCatalogoDOM(estanteria)

//EVENTOS: 
let formCargarBebida = document.getElementById("formCargarBebida")
function agregarBebida(array){
    let tipo = document.getElementById("tipoInput")
    let marca = document.getElementById("marcaInput")
    let sabor = document.getElementById("saborInput")
    let medida = document.getElementById("medidaInput")
    let precio = document.getElementById("precioInput")
    console.log(tipo)
    console.log(marca)
    console.log(sabor)
    console.log(medida)
    console.log(precio)
    //instanciarlo en un objeto:
    const nuevaBebida = new Bebida(array.length+1, tipo.value, marca.value, sabor.value, parseInt(medida.value), parseInt(precio.value), "bebidaNueva.webp")
    console.log(nuevaBebida)
    array.push(nuevaBebida) 
    //agrego estas lineas para determinar en que array de bebidas
    tipo.value === "Gaseosa" ? tiposDeGaseosas.push(nuevaBebida) : ""
    tipo.value === "Cerveza" ? tiposDeCervezas.push(nuevaBebida) : ""
    tipo.value === "Fernet" ? tiposDeFernet.push(nuevaBebida) : ""

    // formCargarBebida.reset()
    tipo.value =""
    marca.value =""
    sabor.value =""
    medida.value =""
    precio.value =""     
    // Notificacion
    Swal.fire ({
        title: `Excelente has agregado un tipo de Bebida`,
        text: `La Bebida ${nuevaBebida.marca} sabor ${nuevaBebida.sabor} de ${nuevaBebida.medida} L se ha sumado.`,
        imageUrl: `./js/assets/img/${nuevaBebida.imagen}`,
        imageHeight: 350,
        imageAlt: `${nuevaBebida.marca} sabor ${nuevaBebida.sabor} de ${nuevaBebida.medida}`,
        showConfirmButton: false,
        timer: 5500
    })
    //SETEAR STORAGE 
    sessionStorage.setItem("estanteria", JSON.stringify(estanteria))
    //hacer con toastify una notificacion
    

}
let guardarBebidaBtn = document.getElementById("guardarBebidaBtn")
//adjuntar evento:
guardarBebidaBtn.addEventListener("click", () =>{
    // preventDefault()
    agregarBebida(estanteria)
    mostrarCatalogoDOM(estanteria)
} )
// agregarBebida(estanteria)
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||| ESTABLEZCO CONSTANTES Y FORMULAS PARA EL CALCULO  |||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//coeficientes en litros por cada 1 hora de evento por cada persona.
const coefgaseosas = 0.5
const coefcerveza = 0.25
const coeffernet = 0.045
//coeficientes para disminuir o aumentar la cantidad por persona dependiendo del calor o frio
const coeffrio = 0.82
const coefcalor = 1.18
//variables que van a ser acumuladores de cada tipo en litros
/* let acumGaseosa = Number
let acumCerveza = Number
let acumFernet = Number */

// toma los datos del modal que se abre en la calculadora de bebidas.
//let formCalcLitros = document.getElementById("formCalcLitros")

function cantidadAdultos(){
    let cantAdultos = 0
    if(document.getElementById("cantAdultos").value === ""){
        cantAdultos = 0;
    }
    else{
        cantAdultos = document.getElementById("cantAdultos").value;
    }
    console.log(cantAdultos);
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
    console.log(cantNinios);
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
    console.log(cantHoras);
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
        //si el usuario eligio frio convierte a la variable frioCalor al coeficiente de frio y si el usuario eligio calor a su respectivo coeficiente.
    if (frioOCalor == 1) {
        frioOCalor = coeffrio}
    else if (frioOCalor == 2) {
        frioOCalor = coefcalor} 
    console.log (frioOCalor)
    return (frioOCalor.value)
    }
//ejecuto las funciones 
cantidadAdultos()
cantidadNinios()
cantidadHoras()
haceFrioOCalor()

    console.log(cantAdultos.value)
    console.log(cantNinios.value)
    console.log(cantHoras.value)
    console.log(frioOCalor.value)

    

    let arrayDatosIngresados = [cantAdultos.value,cantNinios.value,cantHoras.value,frioOCalor.value]
    console.log(arrayDatosIngresados)
    sessionStorage.setItem ("arrayDatosIngresados",JSON.stringify(arrayDatosIngresados))

    //declaro las variables fuera de la funcion para que no queden atrapadas en el scope
    let acumGaseosa20 = 0
    let acumCerveza20 = 0
    let acumFernet20 = 0
    let frioOCalor20 = ""
    let calorOFrio

    let botonCalcular = document.getElementById("botonCalcular")
//adjuntar evento:
    botonCalcular.addEventListener("click", () =>{
    // preventDefault()
    let acumGaseosa2 = document.getElementById("acumGaseosa2")
    let acumCerveza2 = document.getElementById("acumCerveza2")
    let acumFernet2 = document.getElementById("acumFernet2")
    let frioOCalor2 = document.getElementById("frioOCalor2")
    if (frioOCalor.value == 1) {
        calorOFrio = coeffrio }
        else if (frioOCalor.value == 2){
        calorOFrio = coefcalor } 
    console.log(frioOCalor)
    //calculos de bebida
let acumGaseosa = cantAdultos.value * coefgaseosas * cantHoras.value * calorOFrio + cantNinios.value * coefgaseosas * cantHoras.value * calorOFrio
let acumCerveza = cantAdultos.value * coefcerveza * cantHoras.value * calorOFrio
let acumFernet = cantAdultos.value * coeffernet * cantHoras.value * calorOFrio

    console.log(cantAdultos.value)
    console.log(cantNinios.value)
    console.log(cantHoras.value)
    console.log(calorOFrio.value)
    console.log(coefgaseosas)

    console.log(acumGaseosa)
    console.log(acumCerveza)
    console.log(acumFernet)


//indica si es Frio o Calor en letras para que el usuario lea en la formula final dependiendo de lo que haya elegido
let frioCalorRetorno
if (frioOCalor.value == 1) {
frioCalorRetorno = "Frio"}
else if (frioOCalor.value == 2){
frioCalorRetorno = "Calor" } 

    console.log(frioOCalor.value)
    console.log(frioOCalor2)
    console.log(frioCalorRetorno)

    let arrayLitrosCalculados = [acumGaseosa, acumCerveza, acumFernet, frioCalorRetorno]
    console.log(arrayLitrosCalculados)

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
    // preventDefault()
    limpiarCalc()
})
/* let cargarDatos = (obj,clase)=>{
    let selector = document.querySelector (`.${clase}`)
    for (let i = 0; i < obj.length; i++) {
        let optionGaseosa = document.createElement("option")
        optionGaseosa.value = i+1
        console.log (obj)
        optionGaseosa.innerText = `${obj[i].marca} ${obj[i].sabor} ${obj[i].medida} L`
    
        selector.appendChild(optionGaseosa)
    } 
}
cargarDatos(tiposDeGaseosas,"gaseosaDefault")
cargarDatos(tiposDeCervezas,"cervezaDefault")
cargarDatos(tiposDeFernet,"fernetDefault")
 */
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
//adjuntar evento:
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

        console.log (muestraDeDatosFinal)
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
    
            console.log (muestraDeDatosFinal)
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
        
                console.log (muestraDeDatosFinal)
                }
            
            
        console.log(acumGaseosa20)
    })

///////////////////////////////////////
//////                          ///////
//////  AGREGAR AL CARRITO     ///////
//////                          ///////
///////////////////////////////////////
let modalBodyCarrito = document.getElementById("modal-bodyCarrito")
let botonCarrito = document.getElementById("botonCarrito")
let precioTotal = document.getElementById("precioTotal")
let botonFinalizarCompra = document.getElementById(`botonFinalizarCompra`)



function agregarAlCarrito(elemento){
    //pusheo al array carrito:
    console.log(`funciona Bebida Nro: ${elemento.id} ${elemento.marca} ${elemento.sabor} de ${elemento.medida} L`)
    console.log(productosCarrito)

    //preguntar: existe este libro(elemento) en el array??
    let bebidaAgregada = productosCarrito.find((bebida) => bebida.id == elemento.id)
    //realizado con operador ternario
    bebidaAgregada == undefined ?  
            (//pusheo al array carrito:
            productosCarrito.push(elemento),
            
            //setStorage
            sessionStorage.setItem("carrito", JSON.stringify(productosCarrito)),
            
            Toastify({
                text: `La Bebida ${elemento.tipo} ${elemento.marca} ${elemento.sabor} ${elemento.medida} L ha sido sumado al carrito`,
                duration: 4000,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                }).showToast()) :
                Toastify({
                text: `La Bebida ${elemento.tipo} ${elemento.marca} ${elemento.sabor} ${elemento.medida} L ya existe en el carrito`,
                duration: 2500,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                style: {
                background: "linear-gradient(to right, red, orange)",
                 color: "black",
                  fontWeight: "bold"
                },
              }).showToast()
              console.log(productosCarrito)
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
    //segundo for each quiero adjuntar evento eliminar
    array.forEach(
        (productoCarrito) => {
                        //EVENTO SUMAR UNIDAD:
                        document.getElementById(`botonSumarUnidad${productoCarrito.id}`).addEventListener("click", 
                        ()=>{
                            //en el array el producto ya suma una unidad
                            productoCarrito.sumarUnidad()
                            //cada vez que modificamos la cantidad setear el storage:
                            sessionStorage.setItem("carrito", JSON.stringify(array))
                            cargarProductosCarrito(array)
            
                        })
            
                        //EVENTO RESTAR UNIDAD:
                        document.getElementById(`botonEliminarUnidad${productoCarrito.id}`).addEventListener("click",
                        ()=>{
                            let cantidadActual = productoCarrito.cantidad
                            console.log(cantidadActual)
                            if(cantidadActual <= 1){
                                //borrar del DOM
                                let cardProducto = document.getElementById(`productoCarrito${productoCarrito.id}`)
                                cardProducto.remove()
                                //borrar del array
                                //obtener posición del elemento y lo borro
                                let posicion = array.indexOf(productoCarrito)
                                array.splice(posicion, 1)
                                //borrar del storage
                                sessionStorage.setItem("carrito", JSON.stringify(array))
                                //actualizamos el total
                                calcularTotal(array)
                            }else{
                                productoCarrito.restarUnidad()
                            }
                            //cada vez que modificamos la cantidad setear el storage:
                            sessionStorage.setItem("carrito", JSON.stringify(array))
                            cargarProductosCarrito(array)
                        })
            

            //similar let btnBorrar = document.getElementById(`botonEliminar${productoCarrito.id}`)
            //capturar nodo sin guardarlo en variable:
            document.getElementById(`botonEliminar${productoCarrito.id}`).addEventListener("click", () =>{
                //borrar del DOM
                let cardProducto = document.getElementById(`productoCarrito${productoCarrito.id}`)
                cardProducto.remove()
                //borrar del array
                //obtener posición del elemento y lo borro
                let posicion = array.indexOf(productoCarrito)
                array.splice(posicion, 1)
                //borrar del storage
                sessionStorage.setItem("carrito", JSON.stringify(array))
                //actualizamos el total
                calcularTotal(array) 
            })
        }
    )
    calcularTotal(array)    
}
function calcularTotal(array){
    //function con spread 
    
    const totalReduce = array.reduce(
        //dos parámetros: funcion e inicio de valor del acumulador
        //como el carrito maneja cantidad, debe ser precio *cantidad
        (acumulador, bebida)=>
        {return acumulador + bebida.precio * bebida.cantidad},
        0
    )
    totalReduce > 0 ? precioTotal.innerHTML = `<strong>El total de su compra es: ${totalReduce}</strong>` : precioTotal.innerHTML = `No hay productos en el carrito` 
    return totalReduce
}

function finalizarCompra(array){
    //alguna alerta nos diga que finalizo (con el .then agregamos confirmar compra)
    let total = calcularTotal(array)
    Swal.fire({
        text: `Gracias por su compra, usted ha gastado ${total}`
    })
    //limpiar el carrito
    productosCarrito = []
    //actualizar storage
    sessionStorage.removeItem("carrito")
    document.getElementById("contar-items").innerHTML ="0";
}
    botonCarrito.addEventListener("click", () => {
        cargarProductosCarrito(productosCarrito)
    })
    botonFinalizarCompra.addEventListener("click", () =>{
        finalizarCompra(productosCarrito)
    })

    function ordenarMayorMenor(array){
        //copiar array: 
        let arrayMayorMenor = array.concat()
        
         arrayMayorMenor.sort(
            (par1,par2) => par2.precio - par1.precio
        )
        mostrarCatalogoDOM(arrayMayorMenor)
    }
    function ordenarMenorMayor(ar){
        let arrMenor = ar.concat()
        arrMenor.sort(
            //menor a mayor
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
                //no es ni mayor ni menor
                return 0
            }
        )
        mostrarCatalogoDOM(ordenadoAlf)
    }
    function buscarInfo(buscado,array){
        //me devuelve un array vacio si no encuentra, sino un array elementos con la coincidencias
        let coincidencias = array.filter(
            (bebida) => {
                //includes cualquier coincidencia parcial en el string con includes
                return bebida.marca.toLowerCase().includes(buscado.toLowerCase()) || bebida.marca.toLowerCase().includes(buscado.toLowerCase())
            }
        )
        //ternario para evaluar si coincidencias está vacio
        //ternario, tenemos varias instrucciones encerrar entre parentesis y separar por coma ,
        coincidencias.length > 0 ? (mostrarCatalogoDOM(coincidencias), coincidenciasDiv.innerHTML ="") : (mostrarCatalogoDOM(array), coincidenciasDiv.innerHTML = `<h3>No hay coincidencias con su búsqueda, este es nuestro catálogo completo</h3>`) 
    }

    buscador.addEventListener("input", () => {
        console.log(buscador.value)
        buscarInfo(buscador.value,estanteria)
    })

    selectOrden.addEventListener("change", () => {
        // console.log("Detecto cambio")
        console.log(selectOrden.value)
        switch(selectOrden.value){
            case "1":
                ordenarMayorMenor(estanteria)
            break
            case "2":
                ordenarMenorMayor(estanteria)
            break
            case "3":
                ordenarAlfabeticamenteMarca(estanteria)
            break
            default:
                mostrarCatalogoDOM(estanteria)
            break
        }
    })
//Muestra la Hora y se actualiza cada 1 seg. 
    setTimeout(()=>{
    const DateTime = luxon.DateTime
    
    setInterval(()=>{
        let horaActual = DateTime.now()
        horaDiv.innerHTML = `${horaActual.toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS)}`
    },1000)
    })