import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.page.html',
  styleUrls: ['./receita.page.scss'],
})
export class ReceitaPage implements OnInit {
  receita=[];
  constructor() { }

  ngOnInit() {
  }
  // listarReceitas(){
  //   this._crudService.fetchAll('receita')
  //   .then( receita => {
  //     this.receita = receita;
  //   })
  // }
}
