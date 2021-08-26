import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'Adrián';
  nombreUpper: string = 'ADRIÁN';
  nombreCompleto: string = 'aDrián fRaga cOrtés';

  fecha: Date = new Date(); //El día actual

}
