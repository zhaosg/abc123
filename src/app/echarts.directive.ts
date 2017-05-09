import {
  Directive, ElementRef, Input, OnInit, HostBinding, OnChanges, OnDestroy
} from '@angular/core';
import * as echarts from 'echarts';
import ECharts = echarts.ECharts;
import EChartOption = echarts.EChartOption;
import {Subject, Subscription} from "rxjs";

@Directive({selector: '[ts-chart]'})
export class EChartsDirective implements OnChanges, OnInit, OnDestroy {
  private chart: ECharts;
  private sizeCheckInterval = null;
  private reSize$ = new Subject<string>();
  private onResize: Subscription;
  private el: ElementRef;

  @Input('ts-chart-option')
  options: EChartOption;

  @HostBinding('style.height.px')
  elHeight: number = 200;

  constructor(el: ElementRef) {
    this.el = el;
    this.chart = echarts.init(el.nativeElement, 'vintage');
  }

  ngOnChanges(changes) {
    if (this.options) {
      this.chart.setOption(this.options);
    }
  }

  ngOnInit() {
    this.sizeCheckInterval = setInterval(() => {
      this.reSize$.next(`${this.el.nativeElement.offsetWidth}:${this.el.nativeElement.offsetHeight}`)
    }, 100);
    this.onResize = this.reSize$
      .distinctUntilChanged()
      .subscribe((_) => this.chart.resize());

    this.elHeight = this.el.nativeElement.offsetHeight;
    if (this.elHeight < 300) {
      this.elHeight = 300;
    }
  }


  ngOnDestroy() {
    if (this.sizeCheckInterval) {
      clearInterval(this.sizeCheckInterval);
    }
    this.reSize$.complete();
    if (this.onResize) {
      this.onResize.unsubscribe();
    }
  }
}
