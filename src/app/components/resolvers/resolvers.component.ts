import { Component, Input, OnInit } from '@angular/core';
import { convertBytes } from 'src/app/libs/byteConvertion';

@Component({
  selector: 'app-resolvers',
  templateUrl: './resolvers.component.html',
  styleUrls: ['./resolvers.component.css']
})
export class ResolversComponent implements OnInit {
  @Input() resolversData: any = [];
  convertBytes: Function = convertBytes;
  
  constructor() { }

  ngOnInit(): void {
  }
}
