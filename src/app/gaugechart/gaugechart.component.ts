import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-gaugechart',
  templateUrl: './gaugechart.component.html',
  styleUrls: ['./gaugechart.component.css'],
})
export class GaugechartComponent implements OnInit {
  highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: '',
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: 'Brands',
        colorByPoint: true,
        type: 'pie',
        data: [
          {
            name: 'Chrome',
            y: 61.41,
            sliced: true,
            selected: true,
          },
          {
            name: 'Internet Explorer',
            y: 11.84,
          },
          {
            name: 'Firefox',
            y: 10.85,
          },
        ],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
