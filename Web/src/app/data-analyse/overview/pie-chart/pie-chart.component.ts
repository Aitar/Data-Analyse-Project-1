import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  data = [
    {value: 1048, name: '搜索引擎'},
    {value: 735, name: '直接访问'},
    {value: 580, name: '邮件营销'},
    {value: 484, name: '联盟广告'},
    {value: 300, name: '视频广告'}
  ];

  constructor() { }

  ngOnInit(): void { }

  option = {
    title: {
      text: '地铁站流量占比',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '50%',
        data: this.data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

}
