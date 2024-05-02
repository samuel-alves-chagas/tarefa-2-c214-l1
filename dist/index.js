"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConversorCambioSA_1 = require("./services/ConversorCambioSA");
const BuscadorCotacao_1 = require("./services/BuscadorCotacao");
let pagoPeloCliente = {
    valor: 500,
    moeda: 'BRL'
};
let moedaDesejada = 'MXN';
const buscadorCotacao = new BuscadorCotacao_1.BuscadorCotacao();
const casaDeCambioSA = new ConversorCambioSA_1.ConversorCambioSA(buscadorCotacao);
const entregueAoCliente = casaDeCambioSA.converter(pagoPeloCliente, moedaDesejada);
console.log(`O valor pago para o cliente será de`, entregueAoCliente.valor, moedaDesejada);
