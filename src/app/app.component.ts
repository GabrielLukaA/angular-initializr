import { Component } from '@angular/core';

@Component({

  // nome da tag
  selector: 'app-root',
//forma de não precisar criar um arquivo, em caso de pequenos componentes
  // template:`
  // <h2>Salve salve minha rapeize</h2>
  // `,
  //caminho do HTML e do CSS
 templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-initial';
}
