import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { TecnologiaListComponent } from './tecnologia-list.component/tecnologia-list.component';
import { TecnologiaCreateComponent } from './tecnologia-create.component/tecnologia-create.component';
import { TecnologiaDeleteComponent} from './tecnologia-delete.component/tecnologia-delete.component';
import { TecnologiaService } from '../../services/cadastro-tecnologia.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{
        path: 'tecnologia',
        component: TecnologiaListComponent
      },
      {
        path: 'tecnologia/create',
        component: TecnologiaCreateComponent
      },
      {
        path: 'tecnologia/delete/:id/:nome',
        component: TecnologiaDeleteComponent
      }
    ])
  ],
  declarations: [
    TecnologiaListComponent,
    TecnologiaCreateComponent,
    TecnologiaDeleteComponent],
    providers: [TecnologiaService]
})
export class TecnologiaRoutingModule { }
