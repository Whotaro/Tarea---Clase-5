document.querySelector('#boton-cant-clases').onclick = function() {
    const cantClases = document.querySelector(`#clases`).value;
    console.log('Cantidad de clases:', cantClases);

    sumarClases(cantClases);

    return false;
};

document.querySelector('#boton-sumar').onclick = function() {
    let totalSegundos = 0;
    const cantClases = document.querySelector('#clases').value;

    for (let i = 0; i < cantClases; i++) {
        const horas = parseInt(document.querySelector(`#horas${i}`).value) || 0;
        const minutos = parseInt(document.querySelector(`#minutos${i}`).value) || 0;
        const segundos = parseInt(document.querySelector(`#segundos${i}`).value) || 0;

        totalSegundos += (horas * 3600) + (minutos * 60) + segundos;
    }

    const totalHoras = parseInt(totalSegundos / 3600);
    const restanteSegundos = totalSegundos % 3600;
    const totalMinutos = parseInt(restanteSegundos / 60);
    const totalSegundosFinal = restanteSegundos % 60;

    document.querySelector('#resultado').textContent = 
        `El tiempo total del curso de r/ArgentinaPrograma es de: ${totalHoras} horas, ${totalMinutos} minutos, ${totalSegundosFinal} segundos`;

    return false;
};

function sumarClases(cantClases) {
    const tiempoDiv = document.querySelector('#tiempo');
    tiempoDiv.innerHTML = '';

    for (let i = 0; i < cantClases; i++) {
        const claseDiv = document.createElement('div');
        claseDiv.className = 'clase';

        claseDiv.innerHTML = `
            <label for="horas${i}">Horas Clase ${i + 1}: </label>
            <input type="text" id="horas${i}" name="horas${i}">
            <label for="minutos${i}">Minutos Clase ${i + 1}: </label>
            <input type="text" id="minutos${i}" name="minutos${i}">
            <label for="segundos${i}">Segundos Clase ${i + 1}: </label>
            <input type="text" id="segundos${i}" name="segundos${i}">
        `;

        tiempoDiv.appendChild(claseDiv);
    }

    document.querySelector('#boton-sumar').style.display = 'block';
    document.querySelector('#resultado').style.display = 'block';

    return false;
}
