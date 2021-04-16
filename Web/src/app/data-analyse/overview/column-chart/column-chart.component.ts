import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})
export class ColumnChartComponent implements OnInit {

  stations = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
  inFlowData = [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3];
  outFlowData = [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3];

  inFlow = {
    name: '入站流量',
    type: 'bar',
    data: this.inFlowData,
  };

  outFlow = {
    name: '出站流量',
    type: 'bar',
    data: this.outFlowData,
  };

  constructor() { }

  ngOnInit(): void {
  }

  option = {
    title: {
      text: '地铁流量统计',
      subtext: '本统计图只取流量前10的地忒站'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['入站人数', '出站人数']
    },
    toolbox: {
      show: true,
      feature: {
        dataView: {show: true, readOnly: false},
        magicType: {show: true, type: ['line', 'bar']},
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        data: this.stations
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [ //展示的柱图
      this.inFlow,
      this.outFlow
    ]
  };
}
