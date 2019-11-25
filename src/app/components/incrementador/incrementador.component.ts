import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', {static: true}) txtProgress: ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Leyenda', this.leyenda);
    // console.log('Progreso', this.progreso);
  }

  ngOnInit() {
    // console.log('Leyenda', this.leyenda);
    // console.log('Progreso', this.progreso);
  }

  onChanges(newValue: number) {

    // const elemHTML: any = document.getElementsByName('progreso')[0];

    // console.log(this.txtProgress);

    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0 || !newValue) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    // elemHTML.value = Number(this.progreso);

    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);


  }

  cambiarValor(valor: number): void {

    if ((this.progreso <= 0 && valor < 0) || (this.progreso >= 100 && valor > 0)) {
      return;
    }

    this.progreso += valor;

    this.cambioValor.emit(this.progreso);

    this.txtProgress.nativeElement.focus();
  }

}
