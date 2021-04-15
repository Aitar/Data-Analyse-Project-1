import { Component, OnInit } from '@angular/core';
import {data1, data2} from './Data';

@Component({
  selector: 'app-relation-graph',
  templateUrl: './relation-graph.component.html',
  styleUrls: ['./relation-graph.component.css']
})
export class RelationGraphComponent implements OnInit {

  ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/data/npmdepgraph.min10.json';
  json = data1;
  webkitDep = data2;

  constructor() { }

  ngOnInit(): void {
  }

  // option = {
  //   title: {
  //     text: 'NPM Dependencies'
  //   },
  //   animationDurationUpdate: 1500,
  //   animationEasingUpdate: 'quinticInOut',
  //   series: [{
  //     type: 'graph',
  //     layout: 'none',
  //     // progressiveThreshold: 700,
  //     data: this.json.nodes.map(function (node) {
  //       return {
  //         x: node.x,
  //         y: node.y,
  //         id: node.id,
  //         name: node.label,
  //         symbolSize: node.size,
  //         itemStyle: {
  //           color: node.color
  //         }
  //       };
  //     }),
  //     edges: this.json.edges.map(function (edge) {
  //       return {
  //         source: edge.sourceID,
  //         target: edge.targetID
  //       };
  //     }),
  //     emphasis: {
  //       focus: 'adjacency',
  //       label: {
  //         position: 'right',
  //         show: true
  //       }
  //     },
  //     roam: true,
  //     lineStyle: {
  //       width: 0.5,
  //       curveness: 0.3,
  //       opacity: 0.7
  //     }
  //   }]
  // }

  option = {
    legend: {
      data: ['HTMLElement', 'WebGL', 'SVG', 'CSS', 'Other']
    },
    series: [{
      type: 'graph',
      layout: 'force',
      animation: true,
      // symbolSize: 20, //这个属性是节点的大小，可以通过设置node的属性来修改每个node的大小
      label: {
        position: 'right',
        formatter: '{b}'
      },
      draggable: true,
      data: this.webkitDep.nodes.map(function (node, idx) {
        //在这个匿名函数中书写节点属性赋值
        // node.id = idx;

        return node;
      }),
      categories: this.webkitDep.categories,
      force: {
        edgeLength: 20,
        repulsion: 10, //镜头缩放水平
        gravity: 0.05 //节点聚合在一起的承度
      },
      edges: this.webkitDep.links
    }]
  };
}
