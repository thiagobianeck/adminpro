import {Label} from 'ng2-charts';
import {ChartType} from 'chart.js';

export class Grafico {
  labels: Label[];
  data: number[];
  type: ChartType;
  leyenda: string;
}
