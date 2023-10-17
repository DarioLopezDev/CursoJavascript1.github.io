import {tiposDeFernet} from "./misBebidasDOM.js"; 

const inputFernet = (obj) => {
    let fernetContainer = document.createElement("div")
    console.log (fernetContainer)
    fernetContainer.className ="col-8"

    let br2 = document.createElement ("br")
    
    let selectorFernet = document.createElement("select")
    selectorFernet.className = "form-select"
    selectorFernet.ariaLabel = "Default select example"

    let br = document.createElement ("br")
    let optionLabel = document.createElement("option")

    fernetContainer.appendChild(br2)
    fernetContainer.appendChild(selectorFernet)
    selectorFernet.appendChild(optionLabel)
    fernetContainer.appendChild(br)

    for (let i = 0; i < obj.length; i++) {
        let optionFernet = document.createElement("option")
        optionFernet.value = i+1
        console.log (obj)
        optionFernet.innerText = `${obj[i].marca} ${obj[i].sabor} ${obj[i].medida} L`

        selectorFernet.appendChild(optionFernet)
    } 
    console.log (fernetContainer)
    return fernetContainer
}
const inputPorcentajeFernet = () => {

    let porcentajeContainer = document.createElement("div")
    porcentajeContainer.className ="col-4"

    let porcentajeLabel = document.createElement("label")
    porcentajeLabel.htmlFor ="porcentajeFernet"
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
let input = inputPorcentajeFernet () 
let selector = inputFernet (tiposDeFernet)
contenedorAgregado.appendChild(input)
contenedorAgregado.appendChild(selector)
return contenedorAgregado
}
let contadorId = 1

let botonAgregarTipoFernet = document.getElementById("botonAgregarTipoFernet")
botonAgregarTipoFernet.addEventListener ("click", () => {console.log("estoyaqui")
    let contenedorGeneralFernet = document.getElementById("contenedorGeneralFernet")
    let contenedorAgregado2 = contenedorAgregado ()
    let contenedorInput = contenedorAgregado2.querySelector("input")
    contenedorInput.id = `inputFernet${contadorId}`
    let contenedorSelect = contenedorAgregado2.querySelector("select")
    contenedorSelect.id = `selectFernet${contadorId}`
    contenedorGeneralFernet.appendChild (contenedorAgregado2)  
    contadorId++
})