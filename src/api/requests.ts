import { IAddress } from "../interfaces/IAddress";
import { IViaCepResponse } from "../interfaces/IResponse";
import { viacepApi } from "./baseUrl";

export async function fetchAddressByCep(cep: string): Promise<IAddress> {
    try {
        const response = await viacepApi.get<IViaCepResponse>(`${cep}/json/`);
        const data = response.data;

        if (data.erro) {
            throw new Error('CEP não encontrado');
        };

        return {
            cep: data.cep,
            street: data.logradouro,
            neighborhood: data.bairro,
            city: data.localidade,
            state: data.uf,
        };
    } catch (error) {
        throw new Error('Falha ao buscar o endereço pelo CEP');
    }
};
