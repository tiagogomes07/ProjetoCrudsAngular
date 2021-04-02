export class UsuarioModel {

  constructor(
    public id: number | null,
    public nome: string | null,
    public sobrenome: string | null,
    public cpf?: number | null,
    public rg?: number | null,
  ) {}

}
