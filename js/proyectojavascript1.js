alert("Simulador de calculo de gaseosas, cerveza y fernet para un evento")
//coeficientes en litros por cada 1 hora de evento
let coefgaseosas = 0.5
let coefcerveza = 0.25
let coeffernet = 0.045
//coeficientes para disminuir o aumentar la cantidad por persona dependiendo del calor o frio
let coeffrio = 0.82
let coefcalor = 1.18
//variables que van a ser acumuladores de cada tipo en litros
let gaseosas
let cervezas
let fernet
//defino las funciones y variables que tiene que completar el usuario
let adultos
let ninios
let duracionDelEvento
let frioCalor

function cantidadAdultos() {
let adultos
do {
    adultos = parseInt (prompt("Ingrese la cantidad de adultos que asistiran al evento"))
console.log (adultos)}
while (isNaN(adultos));
return (adultos)
}
function cantidadNinios() {
let ninios
do {
    ninios = parseInt (prompt("Ingrese la cantidad de niños que asistiran al evento"))
console.log (ninios)}
while (isNaN(ninios));
return (ninios)
}
function duracionEvento () {
let duracionDelEvento
do {
    duracionDelEvento = parseInt (prompt("Ingrese la Cantidad de horas que durara el evento"))
console.log (duracionDelEvento)}
while (isNaN(duracionDelEvento));
return (duracionDelEvento)
}

function consultafrioocalor () {
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
return(frioCalor)
}
//ejecuto las funciones
cantidadAdultos ()
cantidadNinios ()
duracionEvento ()
consultafrioocalor ()
//calculos de bebida
gaseosas = [cantidadAdultos () + cantidadNinios ()] * coefgaseosas * duracionEvento () * consultafrioocalor ()
cervezas = adultos * coefcerveza * duracionDelEvento * frioCalor
fernet = adultos * coeffernet * duracionDelEvento * frioCalor
//indica si es Frio o Calor en letras para que el usuario lea en la formula final dependiendo de lo que haya elegido
if (frioCalor == coeffrio) {
    frioCalor = "Frio"}
    else if (frioCalor == coefcalor){
    frioCalor = "Calor"}
//muestra en pantalla los resultados
alert(`
Cantidad de Adultos:            ${adultos}
Cantidad de Niños:              ${ninios}
Duracion del Evento en Horas:   ${duracionDelEvento}
Epoca de : ${frioCalor}

La Cantidad de Gaseosas recomendada es ${gaseosas} litros.
La Cantidad de Cervezas recomendada es ${cervezas} litros.
La Cantidad de Fernet recomendada es ${fernet} litros.

Estamos felices que hayas podido utilizar nuestro simulador para el calculo de su evento por favor no se olvide de tomarle una foto con su celular a los resultados
                                    MUCHAS GRACIAS.
`)