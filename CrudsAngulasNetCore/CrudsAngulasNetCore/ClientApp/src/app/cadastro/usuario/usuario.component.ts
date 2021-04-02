import { Component, OnInit,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

import { UsuarioModel } from './usuario.modelo'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.list.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  user: UsuarioModel;
  users: UsuarioModel[];
  constructor() { }

  ngOnInit() {
    this.user = new UsuarioModel(1, "tiago ", "gomes", 1234, 300)


    //let x :[]  
    //  { "id": 0, "name": "Available" },
    //}

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
