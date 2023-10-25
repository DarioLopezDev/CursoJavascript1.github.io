import {tiposDeGaseosas} from "./misBebidasDOM.js"; 

export let nroInputsGaseosa =[]

const inputGaseosa = (obj) => {
    let gaseosaContainer = document.createElement("div")
    console.log (gaseosaContainer)
    gaseosaContainer.className ="col-8"

    let br2 = document.createElement ("br")
    
    let selectorGaseosa = document.createElement("select")
    selectorGaseosa.className = "form-select"
    selectorGaseosa.ariaLabel = "Default select example"

    let br = document.createElement ("br")
    let optionLabel = document.createElement("option")

    gaseosaContainer.appendChild(br2)
    gaseosaContainer.appendChild(selectorGaseosa)
    selectorGaseosa.appendChild(optionLabel)
    gaseosaContainer.appendChild(br)

    for (let i = 0; i < obj.length; i++) {
        let optionGaseosa = document.createElement("option")
        optionGaseosa.value = i+1
        console.log (obj)
        optionGaseosa.innerText = `${obj[i].marca} ${obj[i].sabor} ${obj[i].medida} L`

        selectorGaseosa.appendChild(optionGaseosa)
    } 
    console.log (gaseosaContainer)
    return gaseosaContainer
}
const inputPorcentajeGaseosa = () => {

    let porcentajeContainer = document.createElement("div")
    porcentajeContainer.className ="col-4"

    let porcentajeLabel = document.createElement("label")
    porcentajeLabel.htmlFor ="porcentajeGaseosa"
    porcentajeLabel.innerText = "0% al 100%"

    let inputPorcentaje = document.createElement("input")
    inputPorcentaje.type = "number"
    inputPorcentaje.className = "form-control"
    inputPorcentaje.placeholder = "Ej: 11, 22, 50, 100"
    inputPorcentaje.value = ""
    

    porcentajeContainer.appendChild (porcentajeLabel)
    porcentajeContainer.appendChild (inputPorcentaje)
    console.log (porcentajeContainer)
    return porcentajeContainer
}
const contenedorAgregado = () => {
let contenedorAgregado = document.createElement ("div")
contenedorAgregado.className = "container-fluid row"
let input = inputPorcentajeGaseosa () 
let selector = inputGaseosa (tiposDeGaseosas)
contenedorAgregado.appendChild(input)
contenedorAgregado.appendChild(selector)
return contenedorAgregado
}
let contadorId = 0

let botonAgregarTipoGaseosa = document.getElementById("botonAgregarTipoGaseosa")
botonAgregarTipoGaseosa.addEventListener ("click", () => {console.log("estoyaqui")
    let contenedorGeneralGaseosa = document.getElementById("contenedorGeneralGaseosa")
    let contenedorAgregado2 = contenedorAgregado ()
    let contenedorInput = contenedorAgregado2.querySelector("input")
    contenedorInput.id = `inputGaseosa${contadorId}`
    let contenedorSelect = contenedorAgregado2.querySelector("select")
    contenedorSelect.id = `selectGaseosa${contadorId}`
    contenedorGeneralGaseosa.appendChild (contenedorAgregado2)  
    contadorId++ 
    nroInputsGaseosa.push(0)
})

    let cargaPorDefectoGaseosa = () => {
    let contenedorGeneralGaseosa = document.getElementById("contenedorGeneralGaseosa")
    let contenedorAgregado2 = contenedorAgregado ()
    let contenedorInput = contenedorAgregado2.querySelector("input")
    contenedorInput.id = `inputGaseosa${contadorId}`
    let contenedorSelect = contenedorAgregado2.querySelector("select")
    contenedorSelect.id = `selectGaseosa${contadorId}`
    contenedorGeneralGaseosa.appendChild (contenedorAgregado2)  
    contadorId++ 
    nroInputsGaseosa.push(0)
}  

let botonCalculadora = document.getElementById ("botonCalculadoraBebidas")
    botonCalculadora.addEventListener("click", () => {console.log(`contadorGaseosa`,contadorId)
        sectorMuestraDeCalculo.innerHTML = ""
    
        let contenedorGeneralGaseosa = document.getElementById ("contenedorGeneralGaseosa")
        contenedorGeneralGaseosa.innerHTML = ""
        contadorId = 0
        nroInputsGaseosa = []
        console.log(`contadorGaseosa`,contadorId)
        cargaPorDefectoGaseosa()

    })