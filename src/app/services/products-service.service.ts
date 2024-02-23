import { Injectable } from '@angular/core';


// Todas as services devem possuir um @injectable
// porque assim nós indicamos essa classe como disponível para ser fornecida e injetada como dependencia
// assim podemos só colocar a classe como parametro do construtor do componente e ela será 
// injetada automáticamente
@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor() { }
}
