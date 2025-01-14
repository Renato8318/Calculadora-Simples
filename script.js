function appendValue(value) {
    const result = document.getElementById("result");
    result.value += value;
  }
  
  function clearResult() {
    document.getElementById("result").value = "";
  }
  
  function calculateResult() {
    const result = document.getElementById("result");
    try {
      result.value = eval(result.value);
    } catch (error) {
      result.value = "Erro";
    }
  }
  
  function calculateSquareRoot() {
    const result = document.getElementById("result");
    result.value = Math.sqrt(parseFloat(result.value)).toFixed(2);
  }
  
  function calculatePercentage() {
    const result = document.getElementById("result");
    result.value = (parseFloat(result.value) / 100).toFixed(2);
  }
  