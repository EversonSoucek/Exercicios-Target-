function inverter(texto) {
    let palavraInvertida = '';
    for (let i = texto.length - 1; i >= 0; i--) {
        palavraInvertida += texto[i];
    }
    return palavraInvertida;
}

const stringInvertida = inverter('Teste');
console.log(stringInvertida);
