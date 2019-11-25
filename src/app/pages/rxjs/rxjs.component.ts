import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscriber, Subscription} from 'rxjs';
import {retry, map, flatMap, filter} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription = this.regresaObservable().subscribe(
      numero => console.log('Subs ', numero),
      error => console.error('Error en el obs ', error),
      () => console.log('El observador termino!')
    );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('La pagina se va a cerrar');
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {

      let contador: number = 0;

      const intervalo = setInterval(() => {
        contador++;


        const salida = {
          valor: contador
        };

        observer.next(salida);

        /*if (contador === 3) {
          observer.complete();
        }*/

        /*if (contador === 2) {
          clearInterval(intervalo);
          observer.error('Auxilio');
        }*/
      }, 1000);
    }).pipe(
      map(resp => resp.valor),
      filter((valor, index: number ) => {
        console.log('Filter : ', valor, index);
        return valor % 2 !== 0;
      })

    );
  }

}
