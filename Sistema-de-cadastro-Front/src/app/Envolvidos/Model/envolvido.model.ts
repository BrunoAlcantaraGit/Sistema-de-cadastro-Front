export interface Envolvido {
    id?: number,
  nome:string,
  documento:string,
  contato: Contato,
  endereco: Endereco 
}

export interface Contato {
    ddd:string,
    numeroTelefone:string,
}

export interface Endereco {
    logradouro: string,
    numero: string,
    cep:string,
    bairro:string,
    localidade: string,
    uf:string,
    ibge: string
}