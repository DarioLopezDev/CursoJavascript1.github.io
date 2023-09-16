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
//creo una variable que sera el array de las gaseosas.
const tiposDeGaseosas = []

//creo objetos gaseosas
const gaseosa1 = {
    marca: cocaCola,
    sabor: cola,
    medida: 3,
    unidadMedida: litros,
    botellasPorFardo: 6,
    pesoDelFardo: 18,
    unidadPeso: kilos,
    litrosPorFardo: function () {
        return this.botellasPorFardo * this.medida
    },
    precioFardo: 5000,
    moneda: pesosArgentinos

}
const gaseosa2 = {
    marca: sprite,
    sabor: limaLimon,
    medida: 3,
    unidadMedida: litros,
    botellasPorFardo: 6,
    pesoDelFardo: 18,
    unidadPeso: kilos,
    litrosPorFardo: function () {
        return this.botellasPorFardo * this.medida
    },
    precioFardo: 5000,
    moneda: pesosArgentinos
}
const gaseosa3 = {
    marca: fanta,
    sabor: naranja,
    medida: 3,
    unidadMedida: litros,
    botellasPorFardo: 6,
    pesoDelFardo: 18,
    unidadPeso: kilos,
    litrosPorFardo: function () {
        return this.botellasPorFardo * this.medida
    },
    precioFardo: 5000,
    moneda: pesosArgentinos
}
const gaseosa4 = {
    marca: pepsi,
    sabor: cola,
    medida: 3,
    unidadMedida: litros,
    botellasPorFardo: 6,
    pesoDelFardo: 18,
    unidadPeso: kilos,
    litrosPorFardo: function () {
        return this.botellasPorFardo * this.medida
    },
    precioFardo: 4200,
    moneda: pesosArgentinos
}
const gaseosa5 = {
    marca: pepsi,
    sabor: cola,
    medida: 2.25,
    unidadMedida: litros,
    botellasPorFardo: 8,
    pesoDelFardo: 18,
    unidadPeso: kilos,
    litrosPorFardo: function () {
        return this.botellasPorFardo * this.medida
    },
    precioFardo: 4200,
    moneda: pesosArgentinos
}
const gaseosa6 = {
    marca: mirinda,
    sabor: manzana,
    medida: 2.25,
    unidadMedida: litros,
    botellasPorFardo: 8,
    pesoDelFardo: 18,
    unidadPeso: kilos,
    litrosPorFardo: function () {
        return this.botellasPorFardo * this.medida
    },
    precioFardo: 4200,
    moneda: pesosArgentinos
}
const gaseosa7 = {
    marca: pasoDeLosToros,
    sabor: pomelo,
    medida: 2.25,
    unidadMedida: litros,
    botellasPorFardo: 8,
    pesoDelFardo: 18,
    unidadPeso: kilos,
    litrosPorFardo: function () {
        return this.botellasPorFardo * this.medida
    },
    precioFardo: 4200,
    moneda: pesosArgentinos
}
const gaseosa8 = {
    marca: cocaCola,
    sabor: cola,
    medida: 0.375,
    unidadMedida: litros,
    botellasPorFardo: 6,
    pesoDelFardo: 2.5,
    unidadPeso: kilos,
    litrosPorFardo: function () {
        return this.botellasPorFardo * this.medida
    },
    precioFardo: 2200,
    moneda: pesosArgentinos
}
//hago push dentro del array con todos los objetos gaseosas
tiposDeGaseosas.push (gaseosa1,gaseosa2,gaseosa3,gaseosa4,gaseosa5,gaseosa6,gaseosa7,gaseosa8
)
console.log(tiposDeGaseosas.length)
//creo una variable que sera el array de los vinos
const tiposDeVinos = []
//defino objetos vinos
const vinos1 = {
    marca: almaMora,
    sabor: malbec,
    medida: 0.750,
    unidadMedida: litros,
    botellasPorCaja: 6,
    pesoCaja: 5.5,
    unidadPeso: kilos,
    litrosPorCaja: function () {
        return this.botellasPorCaja * this.medida
    },
    precioCaja: 8400,
    moneda: pesosArgentinos
}
const vinos2 = {
    marca: estanciaMendoza,
    sabor: bivarietal1,
    medida: 0.750,
    unidadMedida: litros,
    botellasPorCaja: 6,
    pesoCaja: 5.5,
    unidadPeso: kilos,
    litrosPorCaja: function () {
        return this.botellasPorCaja * this.medida
    },
    precioCaja: 6000,
    moneda: pesosArgentinos
}
const vinos3 = {
    marca: nortonCosechaTardia,
    sabor: blancoDulce,
    medida: 0.750,
    unidadMedida: litros,
    botellasPorCaja: 6,
    pesoCaja: 5.5,
    unidadPeso: kilos,
    litrosPorCaja: function () {
        return this.botellasPorCaja * this.medida
    },
    precioCaja: 8400,
    moneda: pesosArgentinos
}
//hago push en el array de los vinos
tiposDeVinos.push (vinos1,vinos2,vinos3)
console.log(tiposDeVinos.length)
//aunque solo haya un fernet en este calculo creo igual un array para futuros fernet y medidas de fernet
const tiposDeFernet = []
//defino objeto fernet
const fernet750 = {
    marca: branca,
    sabor: clasico,
    medida: 0.750,
    unidadMedida: litros,
    botellasPorCaja: 12,
    pesoCaja: 12,
    unidadPeso: kilos,
    litrosPorCaja: function () {
        return this.botellasPorCaja * this.medida
    },
    precioCaja: 42000,
    moneda: pesosArgentinos
}
//hago push sobre el array de fernet.
tiposDeFernet.push (fernet750)
