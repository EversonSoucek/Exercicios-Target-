import dados from './vetor.json' assert{type: "json"}

let menor = 0;
let maior = 0;
let media = 0;
let soma = 0
let diasUteis = 0

for (let i = 0; i < dados.length; i++) {
    soma += dados[i].valor
    if (i === 0) { menor = parseFloat(dados[i].valor) }
    if (dados[i].valor > 0) {
        if (menor > dados[i].valor) { menor = dados[i].valor }
        else if (maior < dados[i].valor) { maior = dados[i].valor }
    }
    else {
        diasUteis += 1
        console.log(diasUteis);
    }
}
media = soma / diasUteis
console.log(`O menor valor é ${menor}`)
console.log(`O maior valor é ${maior}`);
console.log(`A média dos dias úteis ${media}`);