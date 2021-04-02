import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common'
import { FormsModule }   from '@angular/forms';

//minhas cosias
import { UsuarioListComponent } from './usuario-list.component/usuario-list.component';
import { UsuarioCreateComponent } from './usuario-create.component/usuario-create.component';
import { UsuarioDeleteComponent } from './usuario-delete.component/usuario-delete.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{
        path:'usuario',
        component: UsuarioListComponent
      },
      {
        path:'usuario/create',
        component: UsuarioCreateComponent
      },
      {
        path:'usuario/delete',
        component: UsuarioDeleteComponent
      }
    ])
  ],
  declarations: [
    UsuarioListComponent, 
    UsuarioCreateComponent, 
    UsuarioDeleteComponent]
})
export class UsuarioRoutingModule { }
