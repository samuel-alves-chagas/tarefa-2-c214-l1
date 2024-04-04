import { DadosMonetarios } from './models/DadosMonetarios'
import { ConversorCambioSA } from './services/ConversorCambioSA'
import { BuscadorCotacao } from './services/BuscadorCotacao'

let pagoPeloCliente: DadosMonetarios = {
    valor: 500,
    moeda: 'BRL'
}

let moedaDesejada = 'MXN'
const buscadorCotacao = new BuscadorCotacao()

const casaDeCambioSA = new ConversorCambioSA(buscadorCotacao)
const entregueAoCliente = casaDeCambioSA.converter(pagoPeloCliente, moedaDesejada)
console.log(`O valor pago para o cliente será de`, entregueAoCliente.valor, moedaDesejada)