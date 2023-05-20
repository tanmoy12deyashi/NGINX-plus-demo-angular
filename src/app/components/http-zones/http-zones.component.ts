import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-zones',
  templateUrl: './http-zones.component.html',
  styleUrls: ['./http-zones.component.css']
})
export class HttpZonesComponent implements OnInit {
  @Input() zonesData: any
  constructor() { }

  ngOnInit(): void {
    console.log(this.zonesData);
  }

}
