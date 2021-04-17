import { Component, OnInit } from '@angular/core';
import { TecnologiaService } from '../../../services/cadastro-tecnologia.service';
import { Tecnologia } from '../model/tecnologia';

@Component({
  selector: 'app-tecnologia-list.component',
  templateUrl: './tecnologia-list.component.html',

})
export class TecnologiaListComponent implements OnInit {

  constructor(private tecnologiaService: TecnologiaService) { }

  tecnologias: Tecnologia[] = [];
  ngOnInit() {

    this.tecnologiaService.GetTecnologias()
    .subscribe(
      res => {
        this.tecnologias = res;
      },
      err => {
        alert('houve um erro');
      }

    );
  }



}
