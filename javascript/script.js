//-----------------------------------------------------------------
const display = document.querySelector('#display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    //caso o usuario cometa um erro ao digitar , o try/catch vai capturar
    try {
        //usei a lib math.js já que é mais segura que eval()
        display.value = math.evaluate(display.value);
    }
    catch {
        display.value = "Erro";
        setTimeout(() => clearDisplay(), 1500);
    }
}
