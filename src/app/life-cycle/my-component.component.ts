import { Component, OnInit, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {


  

  constructor() { }


  // # Componente Lifecycle and lifecycle hooks
 // É acionado um pouco antes do componente não existir mais, seria a ultima chamada desse componente
 // No react é possível repetir isso no return do useEffect()
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

 // É acionado logo após a primeira renderização do componente e todos os seus filhos
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  // Seria básicamente uma espécie de useEfect que monitora o momento de mudança de 
  // qualquer input(props do react) dentro do componente
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  // Como o nome já informa, é chamado assim que o componente é instanciado
  ngOnInit(): void {
  }

}
