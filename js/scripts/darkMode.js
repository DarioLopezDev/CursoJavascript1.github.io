let btnToggle = document.getElementById("btnToggle")
console.log(btnToggle)
if(sessionStorage.getItem("modoOscuro")){
    //si existe la calve en el storage

}else{
    //no existe la clave en el storage
    console.log("SETEAMOS POR PRIMERA VEZ")
    sessionStorage.setItem("modoOscuro", false)
}

if(JSON.parse(sessionStorage.getItem("modoOscuro")) == true){
    document.body.classList.toggle("darkMode")
    btnToggle.innerText = "Light"
}

//funcionamiento del botón
btnToggle.addEventListener("click", () => {
    document.body.classList.toggle("darkMode")
    if(JSON.parse(sessionStorage.getItem("modoOscuro")) == false){
        //ACA VOY A MODO OSCURO
        btnToggle.innerText = "Modo Claro"
        sessionStorage.setItem("modoOscuro", true)
    }
    else if(JSON.parse(sessionStorage.getItem("modoOscuro")) == true){
        //VOY A MODO CLARO
        btnToggle.innerText = "Modo Oscuro"
        sessionStorage.setItem("modoOscuro", false)
    }
})