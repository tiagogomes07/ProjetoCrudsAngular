import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CadastroUsuarioService } from '../../../services/cadastro-usuario.service'
import {Location} from '@angular/common';

@Component({
  selector: 'app-usuario-delete',
  templateUrl: './usuario-delete.component.html',
})
export class UsuarioDeleteComponent implements OnInit {

  public id: string;
  public nome: string;
  constructor(private route: ActivatedRoute, private usuarioService : CadastroUsuarioService, private location : Location) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.nome = this.route.snapshot.paramMap.get('nome')
    console.log(this.id, this.nome)
  }

  ConfirmDelete(){
    console.log("ConfirmDelete ini",this.id)
    this.usuarioService.DeleteUsuario(this.id)
    .subscribe( 
      resp => { 
        
        alert("Deletado com sucesso")
        
        setTimeout( ()=> {this.location.back(); } , 1500);

        
      } ,
      err =>  { alert(`Houve um erro, ${err} `)}      
    )
  }

}
