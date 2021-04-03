import { Component, OnInit,  } from '@angular/core';
import { UsuarioModel } from '../model/usuario.modelo'
import { CadastroUsuarioService } from '../../../services/cadastro-usuario.service'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario-list.component.html'
})
export class UsuarioListComponent implements OnInit {

  user: UsuarioModel;
  users: UsuarioModel[];

  constructor(private usuarioService : CadastroUsuarioService) { }

  ngOnInit() {     
    this.usuarioService.GetUsuarios()
    .subscribe(result =>
      {
        this.users = result;
      },
    )
  }
}
