import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-delete',
  templateUrl: './usuario-delete.component.html',
})
export class UsuarioDeleteComponent implements OnInit {

  public id: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id);
  }

}
