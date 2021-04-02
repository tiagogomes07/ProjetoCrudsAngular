import { Component, OnInit } from '@angular/core';
import { EnderecoModel } from '../model/endereco.modelo'

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco-list.component.html',
 
})
export class EnderecoListComponent implements OnInit {

  endereco: EnderecoModel;

  constructor() { }

  ngOnInit() {
    this.endereco = new EnderecoModel("Paulista",1400,"05400-100","São Paulo","UF")
  }

}
