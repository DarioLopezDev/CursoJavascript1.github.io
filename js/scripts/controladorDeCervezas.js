import {tiposDeCervezas} from "./misBebidasDOM.js"; 

export let nroInputsCerveza =[]

const inputCerveza = (obj) => {
    let cervezaContainer = document.createElement("div")
    console.log (cervezaContainer)
    cervezaContainer.className ="col-8"

    let br2 = document.createElement ("br")
    
    let selectorCerveza = document.createElement("select")
    selectorCerveza.className = "form-select"
    selectorCerveza.ariaLabel = "Default select example"

    let br = document.createElement ("br")
    let optionLabel = document.createElement("option")

    cervezaContainer.appendChild(br2)
    cervezaContainer.appendChild(selectorCerveza)
    selectorCerveza.appendChild(optionLabel)
    cervezaContainer.appendChild(br)

    for (let i = 0; i < obj.length; i++) {
        let optionCerveza = document.createElement("option")
        optionCerveza.value = i+1
        console.log (obj)
        optionCerveza.innerText = `${obj[i].marca} ${obj[i].sabor} ${obj[i].medida} L`

        selectorCerveza.appendChild(optionCerveza)
    } 
    console.log (cervezaContainer)
    return cervezaContainer
}
const inputPorcentajeCerveza = () => {

    let porcentajeContainer = document.createElement("div")
    porcentajeContainer.className ="col-4"

    let porcentajeLabel = document.createElement("label")
    porcentajeLabel.htmlFor ="porcentajeCerveza"
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
let input = inputPorcentajeCerveza () 
let selector = inputCerveza (tiposDeCervezas)
contenedorAgregado.appendChild(input)
contenedorAgregado.appendChild(selector)
return contenedorAgregado
}
let contadorId = 0

let botonAgregarTipoCerveza = document.getElementById("botonAgregarTipoCerveza")
botonAgregarTipoCerveza.addEventListener ("click", () => {console.log("estoyaqui")
    let contenedorGeneralCerveza = document.getElementById("contenedorGeneralCerveza")
    let contenedorAgregado2 = contenedorAgregado ()
    let contenedorInput = contenedorAgregado2.querySelector("input")
    contenedorInput.id = `inputCerveza${contadorId}`
    let contenedorSelect = contenedorAgregado2.querySelector("select")
    contenedorSelect.id = `selectCerveza${contadorId}`
    contenedorGeneralCerveza.appendChild (contenedorAgregado2)  
    contadorId++
    nroInputsCerveza.push(0)
})

    let cargaPorDefectoCerveza = () => {
    let contenedorGeneralCerveza = document.getElementById("contenedorGeneralCerveza")
    let contenedorAgregado2 = contenedorAgregado ()
    let contenedorInput = contenedorAgregado2.querySelector("input")
    contenedorInput.id = `inputCerveza${contadorId}`
    let contenedorSelect = contenedorAgregado2.querySelector("select")
    contenedorSelect.id = `selectCerveza${contadorId}`
    contenedorGeneralCerveza.appendChild (contenedorAgregado2)  
    contadorId++
    nroInputsCerveza.push(0)
    }

    let botonCalculadora = document.getElementById ("botonCalculadoraBebidas")
    botonCalculadora.addEventListener("click", () => {console.log(`contadorCerveza`,contadorId)
        
    
        let contenedorGeneralCerveza = document.getElementById ("contenedorGeneralCerveza")
        contenedorGeneralCerveza.innerHTML = ""
        contadorId = 0
        nroInputsCerveza = []
        console.log(`contadorCerveza`,contadorId)
        cargaPorDefectoCerveza()

    })