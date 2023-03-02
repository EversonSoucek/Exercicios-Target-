
const SP = 67836.43
let SPPorcentagem = 0
const RJ = 36678.66
let RJPorcentagem = 0
const MG = 29229.88
let MGPorcentagem = 0
const ES = 27165.48
let ESPorcentagem = 0
const Outros = 19849.53
let OutrosPorcentagem = 0
let soma = SP + RJ + MG + ES + Outros
SPPorcentagem = (SP * 100) / soma
RJPorcentagem = (RJ * 100) / soma
MGPorcentagem = (MG * 100) / soma
ESPorcentagem = (ES * 100) / soma
OutrosPorcentagem = (Outros * 100) / soma
console.log(`percentual do SP foi ${SPPorcentagem}`)
console.log(`percentual do RJ foi ${RJPorcentagem}`)
console.log(`percentual do MG foi ${MGPorcentagem}`)
console.log(`percentual do ES foi ${ESPorcentagem}`)
console.log(`percentual do Outros foi ${OutrosPorcentagem}`)



