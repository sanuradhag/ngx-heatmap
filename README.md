# ngx heatmap

An angular wrapper for heatmap.js. (Development in progress)

### Installation

Install through npm;

    npm install --save ngx-heatmap
    
Then import **`NgxHeatMapModule`** and include it in your apps for module.
    
    import { Component, NgModule } from '@angular/core';
    import { NgxHeatMapModule } from 'ngx-heatmap';
     
    @NgModule({
      imports: [
        NgxHeatMapModule
      ]
    })
    export class MyModule {}
 
Then add  **`ngx-heatma`** to your app template.
    
    <ngx-heatmap [height]="height"
                 [width]="width"
                 [maxDataPoints]="500"
                 [minDataPoints]="500"
                 [heatPoints]="data">
    </ngx-heatmap>


### Styles 

Style guide will be added soon.


### Documentation
   
##### angular-switchable-grid properties.

   
   Property| Input/Output| Default value | Description
   | -------| --------|-------|:--------------|
   |[height]| Input | 400px |Height of the heat map canvas|
   |[width]| Input| 400px |  Width of the heat map canvas|
   |[maxDataPoints]| Input| null| Maximum number of points on heat map| 
   |[minDatPoints]| Input| null| Minimum number of points on heat map.| 
   |[heatPoints]| Input| [] - empty array| Array containing heat map points| 
   |[configurations]| Input| {} - empty object| Configurations for heat map| 
  



### Any suggestions?

  Drop me a e-mail saggunasekara@gmail.com.   
  
  Or open a new issue in https://github.com/sanuradhag/ngx-heatmap/issues

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
 [<img src="https://avatars0.githubusercontent.com/u/24251976?s=400&v=4" width="100px;"/><br /><sub>Anuradha Gunasekara</sub>][anuradha-profile]|
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

This software is licensed under the MIT license

[license-badge]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license]: https://github.com/yohangz/scala-play-angular-seed/blob/master/LICENSE

[anuradha-profile]: https://github.com/sanuradhag
