import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TecnologiaService } from '../../../services/cadastro-tecnologia.service';

@Component({
  selector: 'app-tecnologia-delete.component',
  templateUrl: './tecnologia-delete.component.html',

})
export class TecnologiaDeleteComponent implements OnInit {
  nome = '';
  id = '';

  constructor(private route: ActivatedRoute, private tecnologia: TecnologiaService) { }

  ngOnInit() {

    this.nome = this.route.snapshot.paramMap.get('nome');
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ConfirmDelete() {
    this.tecnologia.DeleteTecnologia(this.id)
    .subscribe( resp => console.log('resp', resp));
  }
}
