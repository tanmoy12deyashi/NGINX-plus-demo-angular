import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-zones',
  templateUrl: './shared-zones.component.html',
  styleUrls: ['./shared-zones.component.css']
})
export class SharedZonesComponent implements OnInit {
  @Input() sharedZonesData: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.sharedZonesData)
  }

  getMemoryUsage(data: {free: number, used: number}): number {
    return Math.ceil(( data.used / (data.used + data.free))* 100);
  }

}
