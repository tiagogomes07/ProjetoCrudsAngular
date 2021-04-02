import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EnderecoModel } from './endereco.modelo'

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  endereco: EnderecoModel;

  constructor() { }

  ngOnInit() {

    this.endereco = new EnderecoModel("Paulista",1400,"05400-100","São Paulo","UF")
  }

}
