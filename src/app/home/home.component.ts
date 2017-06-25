import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    '../../../node_modules/nvd3/build/nv.d3.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor() { }
  options;
  data;

  ngOnInit() {
    this.options = {
      chart: {
        type: 'pieChart',
        height: 450,
        donut: true,
        x: function(d){return d.key;},
        y: function(d){return d.y;},
        showLabels: true,
        pie: {
          startAngle: function(d) { return d.startAngle/2 -Math.PI/2 },
          endAngle: function(d) { return d.endAngle/2 -Math.PI/2 }
        },
        duration: 500,
        legend: {
          margin: {
            top: 5,
            right: 140,
            bottom: 5,
            left: 0
          }
        }
      }
    };
    this.data = [
      {
        key: "Cumulative Return",
        values: [
          {
            "label" : "JavaScript" ,
            "value" : 50
          } ,
          {
            "label" : "PHP" ,
            "value" : 30
          } ,
          {
            "label" : "HTML5/CSS3" ,
            "value" : 80
          } ,
          {
            "label" : "NodeJS" ,
            "value" : 12
          }
        ]
      }
    ];
  }

}
