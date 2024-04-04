import { DadosMonetarios } from "../models/DadosMonetarios";
import { BuscadorCotacao } from "./BuscadorCotacao";

export class ConversorCambioSA {

    private buscarCotacao;
    constructor(buscadorCotacao: BuscadorCotacao) {
        this.buscarCotacao = buscadorCotacao
    }

    public converter(entrada: DadosMonetarios, moedaDesejada: DadosMonetarios['moeda']): DadosMonetarios {
        const cotacaoAtual = this.buscarCotacao.buscarCotacao(moedaDesejada);
        const valorAPagar = entrada.valor * cotacaoAtual
        const retorno: DadosMonetarios = {
            valor: valorAPagar,
            moeda: moedaDesejada
        }
        return retorno;
    }
}