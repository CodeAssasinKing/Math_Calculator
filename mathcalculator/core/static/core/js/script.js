function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate(operation = null) {
    const display = document.getElementById('display');
    let expression = display.value;

    try {
        if (operation === 'sqrt') {
            display.value = Math.sqrt(eval(expression));
        } else if (operation === 'pow') {
            display.value = Math.pow(eval(expression), 2);
        } else if (operation === 'log') {
            display.value = Math.log10(eval(expression));
        } else if (operation === 'sin') {
            display.value = Math.sin(eval(expression) * Math.PI / 180); // Convert to radians
        } else if (operation === 'cos') {
            display.value = Math.cos(eval(expression) * Math.PI / 180);
        } else if (operation === 'tan') {
            display.value = Math.tan(eval(expression) * Math.PI / 180);
        } else {
            display.value = eval(expression); // Regular calculation
        }
    } catch (error) {
        display.value = 'Error';
    }
}
