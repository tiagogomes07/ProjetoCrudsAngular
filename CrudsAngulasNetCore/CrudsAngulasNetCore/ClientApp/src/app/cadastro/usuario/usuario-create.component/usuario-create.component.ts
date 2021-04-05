import { Component, OnInit  } from '@angular/core';
import { Usuario } from '../model/usuario.modelo'
import { CadastroUsuarioService } from '../../../services/cadastro-usuario.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario-create.component.html'
})
export class UsuarioCreateComponent implements OnInit {

  user: Usuario;
  id: string;
  
  constructor(private usuarioService : CadastroUsuarioService,
    private route: ActivatedRoute
    ) {

      this.id = this.route.snapshot.paramMap.get('id')
      console.log('id',this.id)
     }

  ngOnInit() {   
   this.user = new Usuario(null,null,null,null,null,null,null)
  }

  createUser(): void{
    this.usuarioService.AddOrEditUsuario(this.user)
  }

  editUser(): void {
    this.usuarioService.AddOrEditUsuario(this.user)
  }

}
