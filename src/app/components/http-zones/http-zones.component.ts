import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-zones',
  templateUrl: './http-zones.component.html',
  styleUrls: ['./http-zones.component.css']
})
export class HttpZonesComponent implements OnInit {
  @Input() httpZonesData: any
  @Input() locationZonesData: any
  @Input() limitReqsData: any
  constructor() { }

  ngOnInit(): void {
    //console.log(this.zonesData);
  }

  /* ngOnChanges(): void {
    //console.log(this.limitReqsData);
  } */

  convertBytes(bytes: number): string {
    if (bytes < 1024) {
      return bytes + " B";
    } else if (bytes < (1024 * 1024)) {
      return (bytes / 1024).toFixed(2) + " KB";
    } else if(bytes < (1024 * 1024 * 1024)) {
      return (bytes / (1024 * 1024)).toFixed(2) + " MB";
    } else {
      return (bytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
    }
  }

}
