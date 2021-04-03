import { Injectable } from '@angular/core';
import { UsuarioModel } from '../cadastro/usuario/model/usuario.modelo'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CadastroUsuarioService {

  constructor(private http: HttpClient) { }

  GetUsuarios() : Observable<UsuarioModel[]>{
    let baseUrl = "./"
    return this.http.get<UsuarioModel[]>(baseUrl + 'api/Usuario/ListaUsuarios')
  }

  AddOrEditUsuario(usuario: UsuarioModel) : void{
    let baseUrl = "./" 
    this.http.post(baseUrl + 'api/Usuario/AddUsuario',usuario)
  }

  DeleteUsuario(usuario: UsuarioModel) : void{
    let baseUrl = "./" 
    this.http.delete(baseUrl + 'api/Usuario/DeleteUsuario/:id')
  }

}
