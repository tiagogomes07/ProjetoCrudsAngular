import { Injectable } from '@angular/core';
import { Usuario } from '../cadastro/usuario/model/usuario.modelo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class CadastroUsuarioService {

  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  GetUsuarios(): Observable<Usuario[]> {
    const baseUrl = './';
    return this.http.get<Usuario[]>(baseUrl + 'api/Usuario/ListaUsuarios');
  }

  AddOrEditUsuario(usuario: Usuario): void {
    const baseUrl = './';

    if (usuario.Id === null) {
      this.http.post(baseUrl + 'api/Usuario/AddUsuario', usuario , {
        headers: this.headers,
        responseType: 'text'
      })
      .subscribe( resp => console.log('resp', resp));
    } else {
      console.log('put', usuario);
      this.http.put(baseUrl + 'api/Usuario/EditUsuario', usuario, {
        headers: this.headers,
        responseType: 'text'
      })
      .subscribe( resp => console.log('resp', resp));
    }
  }

  DeleteUsuario(id: string):  Observable<any> {
    console.log('delete v1 ', id);
    const baseUrl = './';
    return this.http.delete(baseUrl + `api/Usuario/DeleteUsuario/id?=${id}`, {
      headers: this.headers,
      responseType: 'text',
    });
  }

}
