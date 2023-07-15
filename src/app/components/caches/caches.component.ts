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

}
