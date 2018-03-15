import { Component } from '@angular/core';

// import { HeatmapData } from './ngx-heatmap/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data: any;
  public height: '400px';
  public width: '400px';

  constructor() {
    this.data = {
      max: 5,
      data: this.generatePoints()
    };
  }

  public onGenerateRandomDataClick(): void {
    this.data = {
      max: 5,
      data: this.generatePoints()
    };
  }

  private generatePoints(): any[] {
    const points = [];

    for (let i = 0; i < 500; i++) {
      points.push({
        value: this.getRandomInt(5),
        x: this.getRandomInt(600),
        y: this.getRandomInt(600)
      });
    }
    return points;
  }

  private getRandomInt(max): number {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
