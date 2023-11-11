let btnToggle = document.getElementById("btnToggle")
if(localStorage.getItem("modoOscuro")){
    //si existe la clave en el storage

}else{
    //no existe la clave en el storage
    console.log("Primera vez DarkMode")
    localStorage.setItem("modoOscuro", false)
}

if(JSON.parse(localStorage.getItem("modoOscuro")) == true){
    document.body.classList.toggle("darkMode")
    btnToggle.innerText = "ModoClaro"
}

//funcionamiento del botón
btnToggle.addEventListener("click", () => {
    document.body.classList.toggle("darkMode")
    if(JSON.parse(localStorage.getItem("modoOscuro")) == false){
        //ACA VOY A MODO OSCURO
        btnToggle.innerText = "ModoClaro"
        localStorage.setItem("modoOscuro", true)
    }
    else if(JSON.parse(localStorage.getItem("modoOscuro")) == true){
        //VOY A MODO CLARO
        btnToggle.innerText = "ModoOscuro"
        localStorage.setItem("modoOscuro", false)
    }
})