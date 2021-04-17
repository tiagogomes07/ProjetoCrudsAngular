import { Injectable } from '@angular/core';
import { Tecnologia } from '../cadastro/tecnologia/model/tecnologia';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class TecnologiaService {

  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  GetTecnologias(): Observable<Tecnologia[]> {
    const baseUrl = './';
    return this.http.get<Tecnologia[]>(baseUrl + 'api/tecnologias/Listar');
  }

  AddOrEditTecnologia(tecnologia: Tecnologia): Observable<any> {
    const baseUrl = './';
    console.log(tecnologia);
    if (tecnologia.Id === null) {
      return this.http.post(baseUrl + 'api/tecnologias/Add', tecnologia , {
        headers: this.headers,
        responseType: 'text'
      });
    } else {
      console.log('put', tecnologia);
      return this.http.put(baseUrl + 'api/tecnologias/Edit', tecnologia, {
        headers: this.headers,
        responseType: 'text'
      });
    }
  }

  DeleteTecnologia(id: string):  Observable<any> {
    console.log('delete v1 ', id);
    const baseUrl = './';
    return this.http.delete(baseUrl + `api/Tecnologias/Delete/id?=${id}`, {
      headers: this.headers,
      responseType: 'text',
    });
  }

}
