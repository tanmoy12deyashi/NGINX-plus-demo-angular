import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-upstreams',
  templateUrl: './http-upstreams.component.html',
  styleUrls: ['./http-upstreams.component.css']
})
export class HttpUpstreamsComponent implements OnInit {
  @Input() httpUpstreamsData:any;
  constructor() { }

  ngOnInit(): void {
  }

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
