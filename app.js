var vocales = ['a', 'e', 'i', 'o', 'u'];
var valores = ['asienda', 'enter', 'iguana', 'onduras', 'uruguay'];

function encriptar() {
    let palabra = document.getElementById('inputWord').value;
    let resultado = '';
    for (let i = 0; i < palabra.length; i++) {
        let char = palabra[i].toLowerCase(); // Convertir a minúsculas para comparación
        let index = vocales.indexOf(char);
        if (index !== -1) {
            resultado += valores[index];
        } else {
            resultado += char;
        }
    }
    document.getElementById('result').innerText = resultado;
}

function desencriptar() {
    let texto = document.getElementById('inputWord').value;
    let resultado = '';
    let temp = ''; // Variable para almacenar caracteres temporales
    for (let i = 0; i < texto.length; i++) {
        temp += texto[i];
        if (valores.includes(temp)) {
            let index = valores.indexOf(temp);
            resultado += vocales[index];
            temp = ''; // Limpiar el buffer temporal
        } else if (texto[i] !== ' ' && !valores.some(val => val.startsWith(temp))) {
            resultado += temp;
            temp = ''; // Limpiar el buffer temporal
        }
    }
    // Agregar cualquier carácter restante en temp al resultado
    if (temp) {
        resultado += temp;
    }
    document.getElementById('result').innerText = resultado;
}