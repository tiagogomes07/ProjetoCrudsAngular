export class UsuarioModel {

  constructor(
    public id: number ,
    public nome: string | null,
    public sobrenome: string | null,
    public cpf?: number | null,
    public rg?: number | null,
    //public senha: string | null,
    //public telefoneCelular: string,
    //public telefoneResidencial: string,
    //public telefoneComercial: string,
    //public enderecoLogradouro: string,
    //public enderecoNumero: number,
    //public enderecoCep: string,
    //public enderecoCidade: string,
    //public enderecoUF: string,
    //public estadoCivil: string,

  ) {}

}
