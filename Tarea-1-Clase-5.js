function calcularSalarioMensual(salarioAnual){
    return salarioAnual / 12;
}

let $botonCalculoSalarioMensual = document.querySelector(`#boton-calcular-salario-mensual`);

$botonCalculoSalarioMensual.onclick = function(){
    let salarioAnual = Number(document.querySelector(`#salarioAnual`).value);
    let salarioMensual = calcularSalarioMensual(salarioAnual);

    document.querySelector(`#salario-mensual`).value = salarioMensual;
    
    return false;
}