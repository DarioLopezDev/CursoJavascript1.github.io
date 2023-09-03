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
//variables que tiene que completar el usuario
let adultos = parseInt (prompt("Ingrese la cantidad de adultos que asistiran al evento"))
console.log (adultos)
let ninios = parseInt (prompt("Ingrese la cantidad de niños que asistiran al evento"))
console.log (ninios)
let duracionDelEvento = parseInt (prompt("Ingrese la Cantidad de horas que durara el evento"))
console.log (duracionDelEvento)
let frioCalor = parseInt (prompt("Ingrese si es en una epoca de frio el numero 1 si es en una epoca de calor el numero 2"))
console.log (frioCalor)
//muestra en pantalla los resultados
alert(`
Cantidad de Adultos:            ${adultos}/n
Cantidad de Niños:              ${ninios}/n
Duracion del Evento en Horas:   ${duracionDelEvento}/n
Epoca de : ${frioCalor}/n

La Cantidad de Gaseosas recomendada es ${gaseosas} litros.
La Cantidad de Cervezas recomendada es ${cervezas} litros.
La Cantidad de Fernet recomendada es ${fernet} litros.

Estamos felices que hayas podido utilizar nuestro simulador para el calculo de su evento
    por favor no se olvide de tomarle una foto con su celular a los resultados
                                    MUCHAS GRACIAS.
`)
