

import { BuscadorCotacao } from "../src/services/BuscadorCotacao"
import { ConversorCambioSA } from "../src/services/ConversorCambioSA"
import { DadosMonetarios } from "../src/models/DadosMonetarios";

jest.mock('../src/services/BuscadorCotacao', ()=>({
    __esModule: true,
    BuscadorCotacao: jest.fn().mockImplementation(() => ({
        buscarCotacao: jest.fn(() => 4)
    }))
}));

describe('Testando sistema da casa de cambio SA', ()=> {

    let buscadorCotacao: BuscadorCotacao
    let conversorCambioSA: ConversorCambioSA

    beforeEach(()=> {
        buscadorCotacao = new BuscadorCotacao()
        conversorCambioSA = new ConversorCambioSA(buscadorCotacao)
    })

    it('Validando a moeda será multiplicada por 4, conforme o mock', ()=> {
        let pagoPeloCliente: DadosMonetarios = {
            valor: 500,
            moeda: 'BRL'
        }
        const valorAPagar = conversorCambioSA.converter(pagoPeloCliente, 'MXN')
        expect(valorAPagar.valor).toBe(2000)
    })
})
