import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  //i18nSelect
  nombre: string= "Adrián";
  genero: string= "masculino";

  invitacionMapa= {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['María', 'Pedro', 'Álvaro', 'Andrea', 'Alfonso'];
  clientesMapa= {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente() {
    this.nombre = "Melissa";
    this.genero = "femenino"
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Adrián',
    edad: 35,
    direccion: 'Porriño (Pontevedra)'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]

  //Async Pipe
  miObservable = interval(5000); //0,1,2,3,4,5,6

  valorPromesa = new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve('Tenemos data de promesa');
      }, 3500);
   });
}
