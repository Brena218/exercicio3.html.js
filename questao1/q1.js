function calcular() {
    let valor1 = parseFloat(document.getElementById('valor1').value);
    let valor2 = parseFloat(document.getElementById('valor2').value);
    let resultadov = document.getElementById('resultado');

    if (valor2 === 0) {
        resultadov.textContent = "Valor não pode ser aceito";
    } else {
        let resultado = valor1 / valor2;
        resultadov.textContent = "Resultado: " + resultado;
    }
}