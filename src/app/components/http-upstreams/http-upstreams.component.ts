import { Component, Input, OnInit } from '@angular/core';
import { convertBytes } from 'src/app/libs/byteConvertion';

@Component({
  selector: 'app-http-upstreams',
  templateUrl: './http-upstreams.component.html',
  styleUrls: ['./http-upstreams.component.css']
})
export class HttpUpstreamsComponent implements OnInit {
  @Input() httpUpstreamsData:any;
  convertBytes: Function = convertBytes;
  constructor() { }

  ngOnInit(): void {}
}
