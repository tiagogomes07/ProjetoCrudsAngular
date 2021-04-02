import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common'
import { FormsModule }   from '@angular/forms';
import { EnderecoListComponent } from './endereco-list.component/endereco-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{
        path:'endereco',
        component: EnderecoListComponent
      }
    ])
  ],
  declarations: [EnderecoListComponent]
})
export class EnderecoRoutingModule { }
