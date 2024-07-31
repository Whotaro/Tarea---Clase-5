let botonInformacion = document.querySelector(`#boton-informacion`);

function mostrarInfo() {
    let nombre = document.querySelector(`#nombre`).value;
    let apellido = document.querySelector(`#apellido`).value;
    let edad = document.querySelector(`#edad`).value;
    
    let saludo = document.querySelector('#saludo');;

    saludo.textContent = `Bienvenido, ${nombre}!`;

    let info = document.querySelector('#info');

    info.value = `Nombre: ${nombre} ${apellido}, Edad: ${edad}`;

}

botonInformacion.onclick = mostrarInfo;
