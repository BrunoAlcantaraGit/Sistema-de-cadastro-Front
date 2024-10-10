export interface Cliente{
  id?: number,
  nome:string,
  email:string,
  documento:string,
  dataNascimento:string,
  contato: Contato,
  endereco: Endereco  
}

export interface Contato{
    ddd:string,
    telefone:string,
}

export interface Endereco{
    rua: string,
    numero: string,
    cep:string,
    bairro:string,
    cidade: string,
    uf:string
}