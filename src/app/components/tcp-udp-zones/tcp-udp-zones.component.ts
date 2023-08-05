import { Component, Input, OnInit } from '@angular/core';
import { convertBytes } from 'src/app/libs/byteConvertion';

@Component({
  selector: 'app-tcp-udp-zones',
  templateUrl: './tcp-udp-zones.component.html',
  styleUrls: ['./tcp-udp-zones.component.css']
})
export class TcpUdpZonesComponent implements OnInit {
  @Input() tcp_udpZonesData: any = [];
  @Input() limitConnsData: any = {};
  convertBytes: Function = convertBytes;

  constructor() { }

  ngOnInit(): void {
  }
}
