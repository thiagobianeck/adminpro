import {Component, Input, OnInit} from '@angular/core';
import {Grafico} from './grafico';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html'
})
export class GraficoDonaComponent implements OnInit {

  // Doughnut
  @Input() grafico: Grafico;

  constructor() {
  }

  ngOnInit() {
  }

}
