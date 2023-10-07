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
        else if (this.medida == 0.5) {return 12}
        else if (this.medida == 0.375) {return 12}
        else return "la medida no esta cargada en la base de datos comuniquese con su programador de confianza"
    }
    mostrarInfoBebida(){
        console.log(`La bebida tiene como id el numero ${this.id}, es del tipo ${this.tipo}, es marca ${this.marca}, su sabor es ${this.sabor}, su medida es ${this.medida} Litros, el bulto trae ${this.unidadesPorBulto()} unidades y su precio es ${this.precio}`)

        /* return `La bebida tiene como id el numero ${this.id}, es del tipo ${this.tipo}, es marca ${this.marca}, su sabor es ${this.sabor}, su medida es ${this.medida} Litros, el bulto trae ${this.unidadesPorBulto()} unidades y su precio es ${this.precio}` */
    }
    exponerEnCatalogo()
    {console.log(this.id, this.tipo, this.marca, this.sabor, this.medida, this.precio, this.imagen)}
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
const tiposDeGaseosas = []
//hago push dentro del array con todos los objetos gaseosas
//aqui tengo que mejorar con un for o algo asi para que se carguen todas las gaseosas incluso las que agreguen despues
tiposDeGaseosas.push (gaseosa1,gaseosa2,gaseosa3,gaseosa4,gaseosa5,gaseosa6,gaseosa7,gaseosa8)
// console log para comprobar que esten cargadas las gaseosas en el array y no continue vacio.
console.log(tiposDeGaseosas.length)

//creo una variable que sera el array de las cervezas.
const tiposDeCervezas = []
//hago push dentro del array con todos los objetos cervezas
//aqui tengo que mejorar con un for o algo asi para que se carguen todas las cervezas incluso las que agreguen despues
tiposDeCervezas.push (cerveza1, cerveza2, cerveza3)
// console log para comprobar que esten cargadas las cervezas en el array y no continue vacio.
console.log(tiposDeCervezas.length)

//creo una variable que sera el array del fernet.
const tiposDeFernet = []
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
                        <p class="">Precio: ${bebida.precio}</p>
                    <button id="" class="btn btn-outline-secondary">Agregar al carrito</button>
                    </div>
        </div> `
        containerBebidas.append(bebidaNuevaDiv)
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
    tipo.value =""
    marca.value =""
    sabor.value =""
    medida.value =""
    precio.value =""     
    // formCargarBebida.reset() 
    //SETEAR STORAGE 
    sessionStorage.setItem("estanteria", JSON.stringify(estanteria))
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
let acumgaseosa = Number
let acumcerveza = Number
let acumfernet = Number

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
    else if (frioOCalor == 2){
        frioOCalor = coefcalor}
    console.log (frioOCalor)
    return (frioOCalor.value)
    }
//ejecuto las funciones 
cantidadAdultos(15)
cantidadNinios(20)
cantidadHoras(5)
haceFrioOCalor(2)

    console.log(cantAdultos.value)
    console.log(cantNinios.value)
    console.log(cantHoras.value)
    console.log(frioOCalor.value)

    //indica si es Frio o Calor en letras para que el usuario lea en la formula final dependiendo de lo que haya elegido
    let frioCalorRetorno = 0
if (frioCalorRetorno == coeffrio) {
    frioCalorRetorno = "Frio"}
    else if (frioCalorRetorno == coefcalor){
    frioCalorRetorno = "Calor"}

    let arrayLitrosCalculados = [cantAdultos.value,cantNinios.value,cantHoras.value,frioOCalor.value]
    console.log(arrayLitrosCalculados)

//calculos de bebida
acumgaseosa = (cantAdultos.value + cantNinios.value) * coefgaseosas * cantHoras.value * frioOCalor.value
acumcerveza = cantAdultos.value * coefcerveza * cantHoras.value * frioOCalor.value
acumfernet = cantAdultos.value * coeffernet * cantHoras.value * frioOCalor.value

    console.log(acumgaseosa)
    console.log(acumcerveza)
    console.log(acumfernet)

