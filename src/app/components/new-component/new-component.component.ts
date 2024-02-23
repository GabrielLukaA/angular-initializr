import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent implements OnInit {

// Observables são objetos que podem ser observados, e toda vez 
// que eles mudam de valor, todos que estão observando o objeto
// são "Notificados"
  productList: Observable<string[]> = new Observable<string[]>();
  constructor() { }

  ngOnInit(): void {
    this.productList = this.apiService.getData("products").pipe(
      // esse map tá sendo utilizado só para extrair somente o que queremos da response
      map(response => {
        return response.productList
      })
    )
  }

  //Aqui é realizada uma nova request baseada no filtro
  onClick(){
    this.productList = this.apiService.getDataFiltered("products").pipe(
      // esse map tá sendo utilizado só para extrair somente o que queremos da response
      map(response => {
        return response.productList
      })
    )
  }

}
