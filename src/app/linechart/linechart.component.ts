import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css'],
})
export class LinechartComponent implements OnInit {
  highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    title: {
      text: '',
    },
    yAxis: {
      title: {
        text: '',
      },
    },
legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2010,
      },
    },

    series: [
      {
        name: '',
        showInLegend: false,
        type: 'line',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
