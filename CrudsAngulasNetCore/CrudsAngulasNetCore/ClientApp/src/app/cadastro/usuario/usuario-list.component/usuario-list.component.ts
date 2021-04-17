import { Component, OnInit,  } from '@angular/core';
import { Usuario } from '../model/usuario.modelo';
import { CadastroUsuarioService } from '../../../services/cadastro-usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario-list.component.html'
})
export class UsuarioListComponent implements OnInit {

  user: Usuario;
  users: Usuario[];

  constructor(private usuarioService: CadastroUsuarioService) { }

  ngOnInit() {
    this.usuarioService.GetUsuarios()
    .subscribe(result => {
        this.users = result;
      },
    );
  }

}
