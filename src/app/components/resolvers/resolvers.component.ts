import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resolvers',
  templateUrl: './resolvers.component.html',
  styleUrls: ['./resolvers.component.css']
})
export class ResolversComponent implements OnInit {
  @Input() resolversData: any = [];
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
