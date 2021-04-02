import { Component, OnInit  } from '@angular/core';
import { UsuarioModel } from '../model/usuario.modelo'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario-create.component.html'
})
export class UsuarioCreateComponent implements OnInit {

  user: UsuarioModel;
  
  constructor() { }

  ngOnInit() {
   
   this.user = new UsuarioModel(null,null,null,null,null)
  }
}
