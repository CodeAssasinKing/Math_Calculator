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
        } else if (operation === 'exp') {
            display.value = Math.exp(eval(expression)); // e^x
        } else if (operation === 'factorial') {
            display.value = factorial(eval(expression));
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

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Function to plot a graph
function plotGraph() {
    const functionInput = document.getElementById('function-input').value;
    const xValues = [];
    const yValues = [];
    
    // Generate values for x and y based on the function entered
    for (let x = -10; x <= 10; x += 0.1) {
        xValues.push(x);
        try {
            const y = eval(functionInput.replace('x', x)); // Replace 'x' in the input with actual x values
            yValues.push(y);
        } catch (error) {
            alert('Invalid function. Please enter a valid function.');
            return;
        }
    }

    // Plot the graph using Plotly.js
    const trace = {
        x: xValues,
        y: yValues,
        mode: 'lines',
        type: 'scatter'
    };
    
    const layout = {
        title: `Graph of ${functionInput}`,
        xaxis: { title: 'x' },
        yaxis: { title: 'y' }
    };
    
    Plotly.newPlot('plot', [trace], layout);
}
