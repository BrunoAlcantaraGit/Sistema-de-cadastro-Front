export interface Cliente{
  id?: number,
  nome:string,
  documento:string,
  contato: Contato,
  endereco: Endereco  
}

export interface Contato{
    ddd:string,
    telefone:string,
}

export interface Endereco{
  logradouro: string,
    numero: string,
    cep:string,
    bairro:string,
    cidade: string,
    uf:string,
    ibge: string
}