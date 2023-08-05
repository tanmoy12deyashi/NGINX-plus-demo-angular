import { Component, Input, OnInit } from '@angular/core';
import { convertBytes } from 'src/app/libs/byteConvertion';

@Component({
  selector: 'app-http-zones',
  templateUrl: './http-zones.component.html',
  styleUrls: ['./http-zones.component.css']
})
export class HttpZonesComponent implements OnInit {
  @Input() httpZonesData: any
  @Input() locationZonesData: any
  @Input() limitReqsData: any
  convertBytes: Function = convertBytes;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }
}
