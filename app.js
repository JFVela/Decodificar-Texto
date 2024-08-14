// Variables globales para vocales y valores
const vocales = ['a', 'e', 'i', 'o', 'u'];
const valores = ['ai', 'enter', 'ines', 'ober', 'ufat'];

// Función para obtener el valor del textarea
function obtenerTexto() {
    return document.getElementById('textArea').value;
}

// Función para mostrar el resultado en el elemento HTML
function mostrarResultado(resultado) {
    document.getElementById('cifradoTexto').innerHTML = resultado;
}

// Función para encriptar el texto
function encriptar() {
    let resultado = '';
    let palabra = obtenerTexto();
    validarMayuscula(palabra);
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

function copiarTexto() {
    let textoCopiado = document.getElementById('cifradoTexto').innerHTML;
    const copiarContenido = async () => {
        try {
            await navigator.clipboard.writeText(textoCopiado);
            console.log('Contenido copiado al portapapeles');
        } catch (err) {
            console.error('Error al copiar: ', err);
        }
    }
    copiarContenido();
}


function validarMayuscula(texto) {
    let letras  = obtenerTexto();
    for (let i = 0; i < texto.length; i++) {
        if (letras .indexOf(texto.charAt(i), 0) != -1) {
            return alert("Tiene mayuscula");
        }
    }
    return alert("No tiene mayuscula");
}