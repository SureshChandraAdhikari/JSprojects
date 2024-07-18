 function appendToDisplay(value) {
            const display = document.getElementById('display');
            if (display.innerHTML === '0') {
                display.innerHTML = value;
            } else {
                display.innerHTML += value;
            }
        }

        function clearDisplay() {
            document.getElementById('display').innerHTML = '0';
        }

        function calculate() {
            const display = document.getElementById('display');
            try {
                display.innerHTML = eval(display.innerHTML);
            } catch {
                display.innerHTML = 'Error';
            }
        }