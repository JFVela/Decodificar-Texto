// Variables globales para vocales y valores
const vocales = ['a', 'e', 'i', 'o', 'u'];
const valores = ['ai', 'enter', 'ines', 'ober', 'ufat'];

const letrasMayusculas = new Set("ABCDEFGHYJKLMNÑOPQRSTUVWXYZ");
const letrasConTilde = new Set("áéíóúÁÉÍÓÚ");

// Función para obtener el valor del textarea
function obtenerTexto() {
    return document.getElementById('textArea').value;
}

// Función para mostrar el resultado en el elemento HTML
function mostrarResultado(resultado) {
    document.getElementById('cifradoTexto').innerHTML = resultado;
}

// Función para validar mayúsculas y tildes
function validarTexto(texto) {
    for (let i = 0; i < texto.length; i++) {
        if (letrasMayusculas.has(texto[i]) || letrasConTilde.has(texto[i])) {
            return true;
        }
    }
    return false;
}

// Función para encriptar el texto
function encriptar() {
    let resultado = '';
    let palabra = obtenerTexto();

    if (validarTexto(palabra)) {
        resultado = 'Por favor ingrese datos que no contengan tildes o mayúsculas';
    } else {
        for (let i = 0; i < palabra.length; i++) {
            let char = palabra[i];
            let encontrada = false;

            for (let j = 0; j < vocales.length; j++) {
                if (char === vocales[j]) {
                    resultado += valores[j];
                    encontrada = true;
                    break;
                }
            }

            if (!encontrada) {
                resultado += char;
            }
        }
    }
    mostrarResultado(resultado);
}

// Función para desencriptar el texto
function desencriptar() {
    let resultado = '';
    let palabra = obtenerTexto();

    for (let i = 0; i < palabra.length; i++) {
        let char = palabra[i].toLowerCase();
        let encontrada = false;

        for (let j = 0; j < valores.length; j++) {
            if (palabra.startsWith(valores[j], i)) {
                resultado += vocales[j];
                i += valores[j].length - 1;
                encontrada = true;
                break;
            }
        }

        if (!encontrada) {
            resultado += char;
        }
    }

    mostrarResultado(resultado);
}

// Función para copiar texto
function copiarTexto() {
    let textoCopiado = document.getElementById('cifradoTexto').innerHTML;
    navigator.clipboard.writeText(textoCopiado)
        .then(() => console.log('Contenido copiado al portapapeles'))
        .catch(err => console.error('Error al copiar: ', err));
}

