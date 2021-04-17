import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './cadastro/usuario/usuario-routing.module';
import { EnderecoRoutingModule} from './cadastro/endereco/endereco-routing.module';
import { TecnologiaRoutingModule } from './cadastro/tecnologia/tecnologia-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    CommonModule,
    UsuarioRoutingModule,
    EnderecoRoutingModule,
    TecnologiaRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'usuario', redirectTo: '/usuario', pathMatch: 'full', data: { } },
      { path: 'endereco', redirectTo: '/endereco',  pathMatch: 'full'},
      { path: 'tecnologia', redirectTo: '/tecnologia',  pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
