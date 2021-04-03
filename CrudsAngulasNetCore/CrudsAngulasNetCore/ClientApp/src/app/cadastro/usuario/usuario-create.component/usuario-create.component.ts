import { Component, OnInit  } from '@angular/core';
import { UsuarioModel } from '../model/usuario.modelo'
import { CadastroUsuarioService } from '../../../services/cadastro-usuario.service'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario-create.component.html'
})
export class UsuarioCreateComponent implements OnInit {

  user: UsuarioModel;
  
  constructor(private usuarioService : CadastroUsuarioService) { }

  ngOnInit() {   
   this.user = new UsuarioModel(null,null,null,null,null)
  }

  createUser(): void{
    this.usuarioService.AddOrEditUsuario(this.user)
  }

}
