import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tcp-udp-zones',
  templateUrl: './tcp-udp-zones.component.html',
  styleUrls: ['./tcp-udp-zones.component.css']
})
export class TcpUdpZonesComponent implements OnInit {
  @Input() tcp_udpZonesData: any = [];
  @Input() limitConnsData: any = {}
  constructor() { }

  ngOnInit(): void {
    console.log(this.tcp_udpZonesData, this.limitConnsData)
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
