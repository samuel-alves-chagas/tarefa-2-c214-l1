"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversorCambioSA = void 0;
class ConversorCambioSA {
    constructor(buscadorCotacao) {
        this.buscarCotacao = buscadorCotacao;
    }
    converter(entrada, moedaDesejada) {
        const cotacaoAtual = this.buscarCotacao.buscarCotacao(moedaDesejada);
        const valorAPagar = entrada.valor * cotacaoAtual;
        const retorno = {
            valor: valorAPagar,
            moeda: moedaDesejada
        };
        return retorno;
    }
}
exports.ConversorCambioSA = ConversorCambioSA;
