alert("Simulador de calculo de gaseosas, cerveza y fernet para un evento")
//coeficientes en litros por cada 1 hora de evento
const coefgaseosas = 0.5
const coefcerveza = 0.25
const coeffernet = 0.045
//coeficientes para disminuir o aumentar la cantidad por persona dependiendo del calor o frio
const coeffrio = 0.82
const coefcalor = 1.18
//variables que van a ser acumuladores de cada tipo en litros
let gaseosas
let cervezas
let fernet
//defino las funciones y variables que tiene que completar el usuario
//Funcion que determina la cantidad de los adultos del evento
function cantidadAdultos() {
let adultos
do {
    adultos = parseInt (prompt("Ingrese la cantidad de adultos que asistiran al evento"))
console.log (adultos)}
while (isNaN(adultos));
return (adultos)
}
//Funcion que determina la cantidad de ninios del evento
function cantidadNinios() {
let ninios
do {
    ninios = parseInt (prompt("Ingrese la cantidad de niños que asistiran al evento"))
console.log (ninios)}
while (isNaN(ninios));
return (ninios)
}
//Funcion que determina la cantidad de horas que va a durar el evento
function duracionEvento() {
let duracionDelEvento
do {
    duracionDelEvento = parseInt (prompt("Ingrese la Cantidad de horas que durara el evento"))
console.log (duracionDelEvento)}
while (isNaN(duracionDelEvento));
return (duracionDelEvento)
}
//Funcion que determina si habra calor o frio el dia del evento y dependiendo de eso, te entrega el valor del coeficiente de frio o calor segun corresponda
function consultafrioocalor() {
let frioCalor
do {
frioCalor = (prompt("Ingrese si es en una epoca de frio el numero 1, si es en una epoca de calor el numero 2"))
}
while (frioCalor != 1 && frioCalor != 2)
//si el usuario eligio frio convierte a la variable frioCalor al coeficiente de frio y si el usuario eligio calor a su respectivo coeficiente.
if (frioCalor == 1) {
    frioCalor = coeffrio}
else if (frioCalor == 2){
    frioCalor = coefcalor}
console.log (frioCalor)
return (frioCalor)
}
//Ejecuto las funciones, declaro y asigno variables para cada retorno.
let a = cantidadAdultos();
let n = cantidadNinios();
let d = duracionEvento();
let fc = consultafrioocalor();

//calculos de bebida
gaseosas = (a + n) * coefgaseosas * d * fc
cervezas = a * coefcerveza * d * fc
fernet = a * coeffernet * d * fc
//indica si es Frio o Calor en letras para que el usuario lea en la formula final dependiendo de lo que haya elegido
if (fc == coeffrio) {
    fc = "Frio"}
    else if (fc == coefcalor){
    fc = "Calor"}
//muestra en pantalla los resultados
alert(`
Cantidad de Adultos:            ${a}
Cantidad de Niños:              ${n}
Duracion del Evento en Horas:   ${d}
Epoca de : ${fc}

La Cantidad de Gaseosas recomendada es ${gaseosas.toFixed(0)} litros.
La Cantidad de Cervezas recomendada es ${cervezas.toFixed(0)} litros.
La Cantidad de Fernet recomendada es ${fernet.toFixed(0)} litros.

Estamos felices que hayas podido utilizar nuestro simulador para el calculo de su evento por favor no se olvide de tomarle una foto con su celular a los resultados
                                    MUCHAS GRACIAS.`)
//Creo una variable que almacene el porcentaje entre adultos y niños
//porcentajeAdultos 

//creo una variable que sera el array de las gaseosas.
const tiposDeGaseosas = []

//creo objetos gaseosas
const gaseosa1 = {
    marca: "Coca Cola",
    sabor: "Cola",
    medida: 3,
    unidadMedida: "Litros",
    botellasPorFardo: 6,
    pesoDelFardo: 18,
    unidadPeso: "Kilos",
    litrosPorFardo: 18,
    precioFardo: 5000,
    moneda: "Pesos Argentinos"

}
console.log (gaseosa1)

const gaseosa2 = {
    marca: "Sprite",
    sabor: "Lima Limon",
    medida: 3,
    unidadMedida: "Litros",
    botellasPorFardo: 6,
    pesoDelFardo: 18,
    unidadPeso: "Kilos",
    litrosPorFardo: 18,
    precioFardo: 5000,
    moneda: "Pesos Argentinos"
}
console.log (gaseosa2)

const gaseosa3 = {
    marca: "Fanta",
    sabor: "Naranja",
    medida: 3,
    unidadMedida: "Litros",
    botellasPorFardo: 6,
    pesoDelFardo: 18,
    unidadPeso: "Kilos",
    litrosPorFardo: 18,
    precioFardo: 5000,
    moneda: "Pesos Argentinos"
}
console.log (gaseosa3)

const gaseosa4 = {
    marca: "Pepsi",
    sabor: "Cola",
    medida: 3 ,
    unidadMedida: "Litros",
    botellasPorFardo: 6 ,
    pesoDelFardo: 18,
    unidadPeso: "Kilos",
    litrosPorFardo: 18,
    precioFardo: 4200,
    moneda: "Pesos Argentinos"
}
console.log (gaseosa4)

const gaseosa5 = {
    marca: "Pepsi",
    sabor: "Cola",
    medida: 2.25,
    unidadMedida: "Litros",
    botellasPorFardo: 8,
    pesoDelFardo: 18,
    unidadPeso: "Kilos",
    litrosPorFardo: 18,
    precioFardo: 4200,
    moneda: "Pesos Argentinos"
}
console.log (gaseosa5)

const gaseosa6 = {
    marca: "Mirinda",
    sabor: "Manzana",
    medida: 2.25,
    unidadMedida: "Litros",
    botellasPorFardo: 8,
    pesoDelFardo: 18,
    unidadPeso: "Kilos",
    litrosPorFardo: 18,
    precioFardo: 4200,
    moneda: "Pesos Argentinos"
}
console.log (gaseosa6)

const gaseosa7 = {
    marca: "Paso De Los Toros",
    sabor: "Pomelo",
    medida: 2.25,
    unidadMedida: "Litros",
    botellasPorFardo: 8,
    pesoDelFardo: 18,
    unidadPeso: "Kilos",
    litrosPorFardo: 18,
    precioFardo: 4200,
    moneda: "Pesos Argentinos"
}
console.log (gaseosa7)

const gaseosa8 = {
    marca: "Coca Cola",
    sabor: "Cola",
    medida: 0.375,
    unidadMedida: "Litros",
    botellasPorFardo: 6,
    pesoDelFardo: 2.5,
    unidadPeso: "Kilos",
    litrosPorFardo: 18,
    precioFardo: 2200,
    moneda: "Pesos Argentinos"
}
console.log (gaseosa8)

//hago push dentro del array con todos los objetos gaseosas
tiposDeGaseosas.push (gaseosa1,gaseosa2,gaseosa3,gaseosa4,gaseosa5,gaseosa6,gaseosa7,gaseosa8
)
console.log(tiposDeGaseosas.length)
//creo una variable que sera el array de las cervezas
const tiposDeCervezas = []
//defino objetos cervezas
const cerveza1 = {
    marca: "Imperial",
    sabor: "Lager",
    medida: 0.473,
    unidadMedida: "Litros",
    latasPorFardo: 24,
    pesoFardo: 12,
    unidadPeso: "Kilos",
    litrosPorFardo: 11.352,
    precioFardo: 9200,
    moneda: "Pesos Argentinos"
}
console.log (cerveza1)
const cerveza2 = {
    marca: "Imperial Golden",
    sabor: "Lager",
    medida: 0.473,
    unidadMedida: "Litros",
    latasPorFardo: 24,
    pesoFardo: 12,
    unidadPeso: "Kilos",
    litrosPorFardo: 11.352,
    precioFardo: 9300,
    moneda: "Pesos Argentinos"
}
console.log (cerveza2)
const cerveza3 = {
    marca: "Quilmes",
    sabor: "Clasica",
    medida: 0.473,
    unidadMedida: "Litros",
    latasPorFardo: 24,
    pesoFardo: 12,
    unidadPeso: "Kilos",
    litrosPorFardo: 11.352,
    precioCaja: 9000,
    moneda: "Pesos Argentinos"
}
console.log (cerveza3)
//hago push en el array de las Cervezas
tiposDeCervezas.push (cerveza1,cerveza2,cerveza3)
console.log(tiposDeCervezas.length)

//aunque solo haya un fernet en este calculo creo igual un array para futuros fernet y medidas de fernet
const tiposDeFernet = []
//defino objeto fernet
const fernet750 = {
    marca: "Branca",
    sabor: "Clasico",
    medida: 0.750 ,
    unidadMedida: "Litros",
    botellasPorCaja: 12 ,
    pesoCaja: 12,
    unidadPeso: "Kilos",
    litrosPorCaja: 9,
    precioCaja: 42000,
    moneda: "Pesos Argentinos"
}
console.log (fernet750)
//hago push sobre el array de fernet.
tiposDeFernet.push (fernet750)

//genero un array que me brinda la totalidad de las bebidas disponibles.

const listadoDeBebidas = tiposDeGaseosas.concat(tiposDeCervezas.concat(tiposDeFernet))
console.log (listadoDeBebidas)
//------------------------------------------------------------------------------------------------------------

//Menu que pregunte que gaseosas usar
let salinrMenu = false
//genero las variables acumuladoras para cada gaseosa.
let fardosGaseosaCola
let fardosGaseosaSprite
let fardosGaseosaFanta
let fardosGaseosaMirindaM
let fardosGaseosaPomelo
do{
let opcionIngresada = parseInt(prompt(`lo recomendado para su evento en gaseosas es:

    60% Gaseosa Cola, 20 % sprite, 10% fanta, 5% Mirinda Manzana, 5% Paso de los toros Pomelo
    Elija por favor ingresando la opcion numerica que desea (1 o 2)
    1 - ok, me parece perfecto.(Calculo Rapido De Fardos)
    2 - Conozco del tema y quisiera calcular y elegir de forma personalizada los fardos de gaseosa`))
3
    switch(opcionIngresada){
        case 1:
        fardosGaseosaCola = (gaseosas/gaseosa1.litrosPorFardo)*0.6
        fardosGaseosaSprite = (gaseosas/gaseosa1.litrosPorFardo)*0.2
        fardosGaseosaFanta = (gaseosas/gaseosa1.litrosPorFardo)*0.1
        fardosGaseosaMirindaM = (gaseosas/gaseosa1.litrosPorFardo)*0.05
        fardosGaseosaPomelo = (gaseosas/gaseosa1.litrosPorFardo)*0.05
        pesoTotalGaseosa = (fardosGaseosaCola * (gaseosa1.pesoDelFardo) + fardosGaseosaSprite * (gaseosa2.pesoDelFardo) + fardosGaseosaFanta * (gaseosa3.pesoDelFardo) + fardosGaseosaMirindaM * (gaseosa6.pesoDelFardo) + fardosGaseosaPomelo * (gaseosa7.pesoDelFardo))
        alert(`Se recomienda:
        |||  ${fardosGaseosaCola.toFixed(0)}      Fardos de Coca Cola 3L o Pepsi de 3L o Pepsi de 2.25
        |||  ${fardosGaseosaSprite.toFixed(0)}    Fardos de Sprite
        |||  ${fardosGaseosaFanta.toFixed(0)}     Fardos de Fanta naranja
        |||  ${fardosGaseosaMirindaM.toFixed(0)}  Fardos de Mirinda manzana
        |||  ${fardosGaseosaPomelo.toFixed(0)}    Fardos de Paso de los toros pomelo
        |||  ${pesoTotalGaseosa.toFixed(0)} Kilos pesan en total las gaseosas.
        `)
        
        console.log(`Se recomienda ${fardosGaseosaCola.toFixed(0)} fardos de Coca Cola 3L o pepsi de 3L o pepsi de 2.25, los fardos de sprite son ${fardosGaseosaSprite.toFixed(0)}, los fardos de fanta son ${fardosGaseosaFanta.toFixed(0)}, los fardos de mirinda son ${fardosGaseosaMirindaM.toFixed(0)} y por ultimo los fardos de Paso de los toros pomelo son ${fardosGaseosaPomelo.toFixed(0)}`)
        salirMenu = true
        break
         case 2:
        gaseosaCola = 0
        alert(`Estamos en mantenimiento, por favor ingrese en la tercera preentrega, sera un acceso a la pagina web donde deberia elegir los fardos por su propia cuenta`)
        console.log(gaseosaCola)
         salirMenu = true
        break
      default:
         console.log("Opción no válida, ingrese alguna presente en el menu")
      break
   }
} while(!salirMenu)


/*
        21 - Quiero que todos tomen Coca de 3L
        22 - Quiero que los Adultos tomen Coca de 3L y los niños Coca de 375ml
        23 - Quiero que todos tomen Pepsi de 3L o de 2.25L (fernet con Pepsi)
        24 - Quiero que los Adultos tomen Pepsi de 3L o de 2.25L y los niños Coca de 375ml
        25 - Quiero que todos tomen Pepsi de 3L o de 2.25L (En los adultos el fernet si o si con Coca 3L)
        26 - Quiero que los Adultos tomen Pepsi de 3L o de 2.25L y los niños Coca de 375ml (En losj adultos el fernet si o si con Coca 3L)

        31 - sacar la sprite
        311 - sacar la sprite y la fanta
        312 - sacar la sprite y la Mirinda Manzana
        313 - sacar la sprite y la paso de los toros Pomelo
    32 - sacar la fanta
    33 - sacar la Mirinda Manzana
    34 - sacar la Paso de los toros Pomelo */

/*
   2 - ${gaseosa4.marca+" "+gaseosa4.medida+" "+gaseosa4.unidadMedida}
   3 - ${gaseosa5.marca+" "+gaseosa5.medida+" "+gaseosa5.unidadCMedida}

   switch(opcionIngresada){
        case 1:
        gaseosaColaAdultos = gaseosa1
        console.log(gaseosaColaAdultos)
        salirMenu = true
        break
         case 2:
        gaseosaColaAdultos = gaseosa4
        console.log(gaseosaColaAdultos)
         salirMenu = true
      break
      case 3:
        gaseosaColaAdultos = gaseosa5
      console.log(gaseosaColaAdultos)
      salirMenu = true
      break         
      case 0:
        gaseosaColaAdultos = 0
        alert ("Usted decidio no utilizar bebidas sabor cola en su evento")
         console.log(`no utiliza sabor cola en el evento`)
         salirMenu = true
      break   
      default:
         console.log("Opción no válida, ingrese alguna presente en el menu")
      break
   }
}while(!salirMenu) */










/*//Menu que pregunte si desea usar Gaseosas sabor cola en su evento para los adultos
let salirMenu = false
//genero la variable acumulador para gaseosas sabor cola en adultos
let gaseosaColaAdultos
do{
let opcionIngresada = parseInt(prompt(`Ingrese la Preferencia de su bebida sabor Cola para los Adultos
   1 - ${gaseosa1.marca+" "+gaseosa1.medida+" "+gaseosa1.unidadMedida}
   2 - ${gaseosa4.marca+" "+gaseosa4.medida+" "+gaseosa4.unidadMedida}
   3 - ${gaseosa5.marca+" "+gaseosa5.medida+" "+gaseosa5.unidadMedida}
   0 - Salir del menu, los adultos no consumiran gaseosas sabor Cola en el evento`))
   switch(opcionIngresada){
        case 1:
        gaseosaColaAdultos = gaseosa1
        console.log(gaseosaColaAdultos)
        salirMenu = true
        break
         case 2:
        gaseosaColaAdultos = gaseosa4
        console.log(gaseosaColaAdultos)
         salirMenu = true
      break
      case 3:
        gaseosaColaAdultos = gaseosa5
      console.log(gaseosaColaAdultos)
      salirMenu = true
      break         
      case 0:
        gaseosaColaAdultos = 0
        alert ("Usted decidio no utilizar bebidas sabor cola en su evento")
         console.log(`no utiliza sabor cola en el evento`)
         salirMenu = true
      break   
      default:
         console.log("Opción no válida, ingrese alguna presente en el menu")
      break
   }
}while(!salirMenu)

//Menu que pregunte si desea usar Gaseosas sabor cola en su evento para los niños
//genero la variable acumulador para gaseosas sabor cola en niños
let gaseosaColaNinios
do{
let opcionIngresada = parseInt(prompt(`Ingrese la Preferencia de su bebida sabor Cola para los Ninios
   1 - ${gaseosa1.marca+" "+gaseosa1.medida+" "+gaseosa1.unidadMedida}
   2 - ${gaseosa4.marca+" "+gaseosa4.medida+" "+gaseosa4.unidadMedida}
   3 - ${gaseosa5.marca+" "+gaseosa5.medida+" "+gaseosa5.unidadMedida}
   4 - ${gaseosa8.marca+" "+gaseosa8.medida+" "+gaseosa8.unidadMedida}
   0 - Salir del menu, los ninios no consumiran gaseosas sabor Cola en el evento`))
   switch(opcionIngresada){
      case 1:
        gaseosaColaNinios = gaseosa1
      console.log(gaseosaColaNinios)
      salirMenu = true
      break
      case 2:
        gaseosaColaNinios = gaseosa4
      console.log(gaseosaColaNinios)
      salirMenu = true
      break
      case 3:
        gaseosaColaNinios = gaseosa5
      console.log(gaseosaColaNinios)
      salirMenu = true
      break         
      case 4:
        gaseosaColaNinios = gaseosa8
      console.log(gaseosaColaNinios)
      salirMenu = true
      break
      case 0:
        alert ("Usted no desea utilizar bebidas sabor cola para los niños en su evento")
         console.log(`no utiliza sabor cola en el evento`)
         salirMenu = true
      break   
      default:
         console.log("Opción no válida, ingrese alguna presente en el menu")
      break
   }
}while(!salirMenu)

//Menu que pregunte si desea usar Gaseosas de sabores en su evento
//genero la variable acumulador para gaseosas de sabores
let gaseosaSabores
do{
let opcionIngresada = parseInt(prompt(`Ingrese la Preferencia de su bebida de sabores
    1 - ${gaseosa2.marca+" "+gaseosa2.medida+" "+gaseosa2.unidadMedida}
    2 - ${gaseosa3.marca+" "+gaseosa3.medida+" "+gaseosa3.unidadMedida}
    3 - ${gaseosa6.marca+" "+gaseosa6.medida+" "+gaseosa6.unidadMedida}
    4 - ${gaseosa7.marca+" "+gaseosa7.medida+" "+gaseosa7.unidadMedida}
    0 - Salir del menu, no consumiran gaseosas de sabores en el evento`))
    switch(opcionIngresada) {
    case 1:
    gaseosaSabores = gaseosa2
    console.log(gaseosaSabores)
    salirMenu = true
    break
    case 2:
        gaseosaSabores = gaseosa3
      console.log(gaseosaSabores)
      salirMenu = true
      break
      case 3:
        gaseosaSabores = gaseosa6
      console.log(gaseosaSabores)
      salirMenu = true
      break         
      case 4:
        gaseosaSabores = gaseosa7
      console.log(gaseosaSabores)
      salirMenu = true
      break
      case 0:
        alert ("Usted no desea utilizar bebidas de sabores en su evento")
         console.log(`no utiliza sabores en el evento`)
         salirMenu = true
      break   
      default:
         console.log("Opción no válida, ingrese alguna presente en el menu")
      break
   }
} while(!salirMenu);*/
