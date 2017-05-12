import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import SVG from 'svg.js'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  options: any = {
    title: { text: 'ECharts入门示例' },
    tooltip: {},
    legend: { data: ['销量'] },
    xAxis: { data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'] },
    yAxis: {},
    series: [{ name: '销量', type: 'bar', data: [5, 20, 36, 10, 10, 20] }]
  };
  constructor(public navCtrl: NavController) {

  }
  ngOnInit() {
    var draw = SVG('drawing');
    draw.rect(100, 100).move(100, 50).fill('#f06');
  }
}
