import { Component, OnInit  } from '@angular/core';
import { Usuario } from '../model/usuario.modelo';
import { CadastroUsuarioService } from '../../../services/cadastro-usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario-create.component.html'
})
export class UsuarioCreateComponent implements OnInit {

  user: Usuario;
  id: string;

  constructor(
    private usuarioService: CadastroUsuarioService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('history.state', history.state.data);
    if (history.state.data) {
      this.user =
        new Usuario(
        history.state.data.id,
        history.state.data.nome,
        history.state.data.sobreNome,
        history.state.data.email,
        history.state.data.telefone,
        history.state.data.cpf,
        history.state.data.rg);
    } else {
      this.user = new Usuario(null, null, null, null, null, null, null);
    }

  }
  createUser(): void {
    this.usuarioService.AddOrEditUsuario(this.user);
  }

  editUser(): void {
    this.usuarioService.AddOrEditUsuario(this.user);
  }

}
