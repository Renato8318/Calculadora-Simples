function appendValue(value) {
    const result = document.getElementById("result");
    const lastChar = result.value.slice(-1);

    // Evita múltiplos operadores seguidos
    const operators = ['+', '-', '*', '/'];
    if (operators.includes(value) && operators.includes(lastChar)) {
        // Substitui o último operador pelo novo
        result.value = result.value.slice(0, -1) + value;
        return;
    }

    result.value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculateResult() {
    const result = document.getElementById("result");
    try {
        // Usa eval, mas corrige a precisão para evitar erros de ponto flutuante
        const calculatedValue = eval(result.value);
        result.value = parseFloat(calculatedValue.toPrecision(10)); 
    } catch (error) {
        result.value = "Erro";
    }
}

function calculateSquareRoot() {
    const result = document.getElementById("result");
    const value = parseFloat(result.value);
    if (value >= 0) {
        // Limita a 4 casas decimais para o resultado
        result.value = Math.sqrt(value).toFixed(4); 
    } else {
        result.value = "Erro: Valor Negativo";
    }
}

function calculatePercentage() {
    const result = document.getElementById("result");
    // Simplesmente retorna o valor dividido por 100
    result.value = parseFloat(result.value) / 100; 
}