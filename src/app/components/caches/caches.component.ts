import { Component, Input, OnInit, SimpleChanges} from '@angular/core';
import { convertBytes } from 'src/app/libs/byteConvertion';

@Component({
  selector: 'app-caches',
  templateUrl: './caches.component.html',
  styleUrls: ['./caches.component.css']
})
export class CachesComponent implements OnInit {
  @Input() cacheData: any = [];
  @Input() sharedZonesData: any;
  convertBytes: Function = convertBytes;
  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.cacheData.forEach((cache: any) => {
      const getSelectedSharedZones = this.sharedZonesData.filter((shared: any) => shared.zone === cache.zone);
      if(getSelectedSharedZones.length) {
        cache.pages = getSelectedSharedZones[0].pages;
      }
    });
  }

  getDiskUsage(used: number, max_size: number) {
    return !max_size ? '-' : Math.round((used / max_size) * 10) / 10 + '%';
  }

  getMemoryUsage(pages: any) {
    return Math.round((pages.used / (pages.used + pages.free)) * 10) / 10 + '%';
  }
}
