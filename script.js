function calcular() {
    const tensaoInput = document.getElementById('tensao');
    const correnteInput = document.getElementById('corrente');
    const resistenciaInput = document.getElementById('resistencia');
    
    const v = parseFloat(tensaoInput.value);
    const i = parseFloat(correnteInput.value);
    const r = parseFloat(resistenciaInput.value);
    
    const valoresPreenchidos = [v, i, r].filter(val => !isNaN(val)).length;
    
    if (valoresPreenchidos !== 2) {
        alert("Por favor, preencha exatamente DOIS valores para calcular o terceiro.");
        return;
    }
    
    if (isNaN(v)) {
        tensaoInput.value = (i * r).toFixed(2);
    } else if (isNaN(i)) {
        correnteInput.value = (v / r).toFixed(2);
    } else if (isNaN(r)) {
        resistenciaInput.value = (v / i).toFixed(2);
    }
}

function limpar() {
    document.getElementById('tensao').value = '';
    document.getElementById('corrente').value = '';
    document.getElementById('resistencia').value = '';
}