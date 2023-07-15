import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-caches',
  templateUrl: './caches.component.html',
  styleUrls: ['./caches.component.css']
})
export class CachesComponent implements OnInit {
  @Input() cacheData: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.cacheData)
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
