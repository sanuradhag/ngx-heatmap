import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

import * as heatmap from 'heatmap.js';

// import { DataPoint, Heatmap, HeatmapConfiguration, HeatmapData } from './models';


@Component({
  selector: 'ngx-heatmap',
  templateUrl: './ngx-heatmap.component.html',
  styleUrls: ['./ngx-heatmap.component.scss']
})

export class HeatMapComponent implements OnInit, OnChanges, AfterViewInit {

  @ViewChild('heatMap')
  private heatMapDiv: any;

  @Input()
  public height: number = 400;

  @Input()
  public width: number = 400;

  @Input()
  public set configurations(config) {
    if (!config) {
      this.configs = {
        container: this.heatMapDiv.nativeElement,
      };
      return;
    }
    this.configs = config;
  }

  public get configurations(): any {
    return this.configs;
  }

  @Input()
  public set heatPoints(data: any) {
    this.data = data;
    if (this.heatMapInstance) {
      this.heatMapInstance = this.heatMapInstance.setData(data);
    }
  }

  @Input()
  public set maxDataPoints(value: number) {
    this.dataMax = value;
    if (this.heatMapInstance) {
      this.heatMapInstance = this.heatMapInstance.setDataMax(value);
    }
  }

  @Input()
  public set minDataPoints(value: number) {
    this.dataMin = value;
    if (this.heatMapInstance) {
      this.heatMapInstance = this.heatMapInstance.setDataMin(value);
    }
  }

  private heatMapInstance: any;
  private configs: any;
  private dataMin: number;
  private dataMax: number;
  private data: any;

  constructor() {
  }

  public ngOnInit(): void {
  }

  public ngOnChanges(changes: any): void {
    // if (this.heatMapInstance) {
    //   this.heatMapInstance = heatmap.repaint().setData(this.data);
    // }
  }

  public ngAfterViewInit(): void {
    this.heatMapInstance = heatmap.create({
      container: this.heatMapDiv.nativeElement,
    }).setData(this.data);
    // this.heatMapInstance.setData(this.data);
    // this.heatMapInstance.setDataMax(this.dataMax);
    // this.heatMapInstance.setDataMin(this.dataMin);
  }

  public addPoint(point: any): void {
    this.heatMapInstance = this.heatMapInstance.addData(point);
  }

  // private createHeatMap(): any {
  //   if (!this.heatMapInstance) {
  //     const heatMapInstance = heatmap.create({
  //       container: this.heatMapDiv.nativeElement
  //     });
  //     return heatMapInstance;
  //   } else {
  //     return this.heatMapInstance;
  //   }
  // }
}
