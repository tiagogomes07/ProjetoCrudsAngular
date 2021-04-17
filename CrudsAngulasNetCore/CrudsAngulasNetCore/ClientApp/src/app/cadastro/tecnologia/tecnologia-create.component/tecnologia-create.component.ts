import { Component, OnInit } from '@angular/core';
import { Tecnologia } from '../model/tecnologia';
import { TecnologiaService } from '../../../services/cadastro-tecnologia.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tecnologia-create.component',
  templateUrl: './tecnologia-create.component.html',
})
export class TecnologiaCreateComponent implements OnInit {

  tecnologia: Tecnologia;

  constructor(private tecnologiaService: TecnologiaService, private location: Location) { }

  ngOnInit() {
    console.log('history.state', history.state.data);
    if (history.state.data) {
      this.tecnologia =
        new Tecnologia(
        history.state.data.id,
        history.state.data.nome,
        history.state.data.apelido,
        history.state.data.utilidade);
    } else {
      this.tecnologia = new Tecnologia(null, null, null, null);
    }
  }

  createTecnologia(): void {
    this.tecnologiaService.AddOrEditTecnologia(this.tecnologia)
    .subscribe( resp => { console.log('resp', resp); }, err => {
      alert('Cadastrado com sucesso!');
      setTimeout( () => {this.location.back(); } , 1500);
     } );
  }

  editTecnologia(): void {
    this.tecnologiaService.AddOrEditTecnologia(this.tecnologia)
    .subscribe( resp => { console.log('resp', resp); }, err => {
      alert('Alterado com sucesso!');
      setTimeout( () => {this.location.back(); } , 1500);
     } );

  }


}
