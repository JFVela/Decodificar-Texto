var vocales = ['a', 'e', 'i', 'o', 'u'];
var valores = ['ai', 'enter', 'ines', 'ober', 'ufat'];

function encriptar() {
    let palabra = document.getElementById('textArea').value;
    let resultado = '';

    // Recorrer cada letra de la palabra
    for (let i = 0; i < palabra.length; i++) {
        let char = palabra[i].toLowerCase(); // Convertir a minúsculas
        let encontrada = false;

        // Comparar con cada vocal
        for (let j = 0; j < vocales.length; j++) {
            if (char === vocales[j]) {
                resultado += valores[j]; // Encriptar la vocal
                encontrada = true;
                break;
            }
        }

        // Si no es vocal, se agrega tal cual
        if (!encontrada) {
            resultado += char;
        }
    }

    // Mostrar el resultado en el elemento HTML
    document.getElementById('cifradoTexto').innerText = resultado;
}

function desencriptar() {
    let texto = document.getElementById('textArea').value;
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i].toLowerCase();
        let encontrada = false;

        // Verificar si la cadena encriptada comienza con alguno de los valores
        for (let j = 0; j < valores.length; j++) {
            if (texto.startsWith(valores[j], i)) {
                resultado += vocales[j]; // Desencriptar
                i += valores[j].length - 1; // Avanzar el índice
                encontrada = true;
                break;
            }
        }

        // Si no se encontró una secuencia encriptada, agregar el carácter tal cual
        if (!encontrada) {
            resultado += char;
        }
    }

    // Mostrar el resultado en el elemento HTML
    document.getElementById('cifradoTexto').innerText = resultado;
}


function copiarTexto() {
    let textoCopiado = document.getElementById('cifradoTexto').innerHTML; 
    console.log(textoCopiado);

    const copiarContenido = async () => {
        try {
            await navigator.clipboard.writeText(textoCopiado);
            console.log('Contenido copiado al portapapeles');
        } catch (err) {
            console.error('Error al copiar: ', err);
        }
    }

    copiarContenido(); // Llama a la función para copiar el texto
}
