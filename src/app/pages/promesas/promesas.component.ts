import { Component, OnInit } from '@angular/core';
import {log} from 'util';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {


    this.contarTres().then(
      (mensaje) => console.log('Termino', mensaje)
    ).catch(error => console.error('Error en la promesa', error));
  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
    return new Promise((resolve, reject) => {

      let contador = 0;

      const intervalo = setInterval(() => {
        contador++;
        console.log('contador: ', contador);

        if (contador === 3) {
          // reject('simplemente un error');
          resolve(true);
          clearInterval(intervalo);
        }

      }, 1000);
    });


  }

}
