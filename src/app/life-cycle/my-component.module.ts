import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyComponentComponent } from './my-component.component';
 // import { MyComponentRoutingModule } from './my-component.component-routing';


@NgModule({

  // caso eu use um componente, necessito de colocar nas 
  // declarations
  declarations: [
    MyComponentComponent
  ],

  // já caso eu crie um module para aquele componente em específico, tenho que coloca-lo 
  // nos imports

  imports: [BrowserModule,/* MyComponentRoutingModule */ ],
  providers: [],

  // Caso eu esteja usando o componente em vários lugares é necessário exportar ele também
  exports:[
    MyComponentComponent
  ]
})
export class MyComponentModule {}
