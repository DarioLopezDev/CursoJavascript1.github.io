import {tiposDeGaseosas} from "./misBebidasDOM.js"; 

const inputGaseosa = (obj) => {
    let gaseosaContainer = document.createElement("div")
    console.log (gaseosaContainer)
    gaseosaContainer.className ="col-8"
    
    let selectorGaseosa = document.createElement("select")
    selectorGaseosa.className = "form-select"
    selectorGaseosa.ariaLabel = "Default select example"

    let br = document.createElement ("br")
    let optionLabel = document.createElement("option")

    gaseosaContainer.appendChild(selectorGaseosa)
    gaseosaContainer.appendChild(br)
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

let botonAgregarTipoGaseosa = document.getElementById("botonAgregarTipoGaseosa")
botonAgregarTipoGaseosa.addEventListener ("click", () => {console.log("estoyaqui")
     let gaseosaContainer = inputGaseosa (tiposDeGaseosas)
    let divpepe = document.getElementById("pepe")
    divpepe.appendChild (gaseosaContainer)
})