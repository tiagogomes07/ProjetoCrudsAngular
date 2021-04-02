import { Component, OnInit,  } from '@angular/core';
import { UsuarioModel } from '../model/usuario.modelo'


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario-list.component.html'
})
export class UsuarioListComponent implements OnInit {

  user: UsuarioModel;
  users: UsuarioModel[];
  constructor() { }

  ngOnInit() {
    this.user = new UsuarioModel(1, "tiago ", "gomes", 1234, 300)
    this.users = [
      { "id": 0, "nome": "H.Cavil",    "sobrenome": "S",  },
      { "id": 1, "nome": "ZySnyder",   "sobrenome": "D"    },
      { "id": 2, "nome": "DaviJones",  "sobrenome": "P"   }
  ]
}

  teste(): void {
    console.log(this.user)

  }

}
