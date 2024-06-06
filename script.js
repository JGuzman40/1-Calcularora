document.addEventListener('DOMContentLoaded', function() {
    console.log('Script cargado correctamente'); // Para verificar que el script se carga

    const display = document.getElementById('display');
    if (!display) {
        console.error('No se pudo encontrar el elemento display');
        return;
    }

    const buttons = Array.from(document.getElementsByClassName('button'));

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log('Botón clickeado'); // Para verificar que los botones están capturando clics
            const value = e.target.dataset.value;
            console.log('Valor del botón:', value); // Para ver el valor del botón clickeado

            switch(value) {
                case 'C':
                    display.innerText = '0';
                    break;
                case '=':
                    try {
                        display.innerText = eval(display.innerText);
                    } catch {
                        display.innerText = 'Error';
                    }
                    break;
                default:
                    if (display.innerText === '0') {
                        display.innerText = value;
                    } else {
                        display.innerText += value;
                    }
            }
        });
    });
});
