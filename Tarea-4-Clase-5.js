let listaNumeros = document.querySelectorAll('li');
let arrayNumeros = [];
let suma = 0;
let conteo = {};
let numeroMasFrecuente = null;
let maxFrecuencia = 0;

for (let i = 0; i < listaNumeros.length; i++) {
    arrayNumeros.push(parseInt(listaNumeros[i].textContent));
}

document.querySelector(`#boton-enviar-numeros`).onclick = function() {
    // promedio
    for (let i = 0; i < arrayNumeros.length; i++) {
            suma += arrayNumeros[i];
    }
    let promedio = suma / arrayNumeros.length;

    // minimo
    let numeroMinimo = Math.min(...arrayNumeros);

    // maximo
    let numeroMaximo = Math.max(...arrayNumeros);

    // frecuente
    for (let i = 0; i < arrayNumeros.length; i++) {
        let num = arrayNumeros[i];
        if (conteo[num]) {
            conteo[num]++;
        } else {
            conteo[num] = 1;
        }
    }

    for (let num in conteo) {
        if (conteo[num] > maxFrecuencia) {
            maxFrecuencia = conteo[num];
            numeroMasFrecuente = num;
        }
    }

    // resultados
    document.querySelector('#promedio').textContent = `El promedio es ${promedio}`;
    document.querySelector('#pequenio').textContent = `El número más pequeño es ${numeroMinimo}`;
    document.querySelector('#grande').textContent = `El número más grande es ${numeroMaximo}`;
    document.querySelector('#frecuente').textContent = `El número más frecuente es ${numeroMasFrecuente}`;

    return false;
}
