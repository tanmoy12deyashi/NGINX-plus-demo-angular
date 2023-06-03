import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, interval } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APP } from '../config/app'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  // get APP
  private APP = APP;
  // get url
  private url = environment.apiUrl;
  // set data subject for every service
  private httpServerZonesDataSubject = new Subject<any>();
  private locationZonesDataSubject = new Subject<any>();
  private httpUpstreamsDataSubject = new Subject<any>();
  private streamServerZonesDataSubject = new Subject<any>();
  private streamUpstreamsDataSubject = new Subject<any>();
  private cachesDataSubject = new Subject<any>();
  private slabDataSubject = new Subject<any>();
  private limitReqsDataSubject = new Subject<any>();
  private streamZoneSyncDataSubject = new Subject<any>();
  private resolversDataSubject = new Subject<any>();
  private limitConnsDataSubject = new Subject<any>();

  // set interval subscription
  private intervalSubscription: any;

  constructor(private http: HttpClient) {
    this.startFetchingData();
  }

  ngOnDestroy() {
    this.intervalSubscription.unsubscribe();
  }

  private startFetchingData() {
    this.intervalSubscription = interval(APP.interval).subscribe(() => {
      this.getHttpServerZones();
      this.getLocationZones();
      this.getHttpUpstreams();
      this.getStreamServerZones();
      //this.getStreamUpstreams();
      //this.getCaches();
      this.getSlab();
      this.getLimitReqs()
      this.getStreamZoneSync();
      this.getResolvers();
      this.getLimitConns()
    });
  }

  private pauseFetchingData() {
    this.intervalSubscription.unsubscribe();
  }

  private resumeFetchingData() {
    this.startFetchingData();
  }

  getHttpServerZonesDataSubject(): Subject<any> {
    return this.httpServerZonesDataSubject;
  }

  getHttpServerZones() {
    this.http.get<any>(`${this.url}/http/server_zones/`).subscribe((data: any) => {
      this.httpServerZonesDataSubject.next(data);
    });
  }

  getLocationZonesDataSubject(): Subject<any> {
    return this.locationZonesDataSubject;
  }

  getLocationZones() {
    this.http.get<any>(`${this.url}/http/location_zones/`).subscribe((data: any) => {
      this.locationZonesDataSubject.next(data);
    });
  }

  getHttpUpstreamsDataSubject(): Subject<any> {
    return this.httpUpstreamsDataSubject;
  }

  getHttpUpstreams() {
    this.http.get<any>(`${this.url}/http/upstreams/`).subscribe((data: any) => {
      this.httpUpstreamsDataSubject.next(data);
    });
  }

  getStreamServerZonesDataSubject(): Subject<any> {
    return this.streamServerZonesDataSubject;
  }

  getStreamServerZones() {
    this.http.get<any>(`${this.url}/stream/server_zones/`).subscribe((data: any) => {
      this.streamServerZonesDataSubject.next(data);
    });
  }

  getStreamUpstreamsDataSubject(): Subject<any> {
    return this.streamUpstreamsDataSubject;
  }

  getStreamUpstreams() {
    this.http.get<any>(`${this.url}/stream/upstreams/`).subscribe((data: any) => {
      this.streamUpstreamsDataSubject.next(data);
    });
  }

  getCachesDataSubject(): Subject<any> {
    return this.cachesDataSubject;
  }

  getCaches() {
    this.http.get<any>(`${this.url}/http/caches/`).subscribe((data: any) => {
      this.cachesDataSubject.next(data);
    });
  }

  getSlabDataSubject(): Subject<any> {
    return this.slabDataSubject;
  }

  getSlab() {
    this.http.get<any>(`${this.url}/slabs/`).subscribe((data: any) => {
      this.slabDataSubject.next(data);
    });
  }

  getLimitReqsDataSubject(): Subject<any> {
    return this.limitReqsDataSubject;
  }

  getLimitReqs() {
    this.http.get<any>(`${this.url}/http/limit_reqs/`).subscribe((data: any) => {
      this.limitReqsDataSubject.next(data);
    });
  }

  getStreamZoneSyncDataSubject(): Subject<any> {
    return this.streamZoneSyncDataSubject;
  }

  getStreamZoneSync() {
    this.http.get<any>(`${this.url}/stream/zone_sync/`).subscribe((data: any) => {
      this.streamZoneSyncDataSubject.next(data);
    });
  }

  getResolversDataSubject(): Subject<any> {
    return this.resolversDataSubject;
  }

  getResolvers() {
    this.http.get<any>(`${this.url}/resolvers/`).subscribe((data: any) => {
      this.resolversDataSubject.next(data);
    });
  }

  getLimitConnsDataSubject(): Subject<any> {
    return this.limitConnsDataSubject;
  }

  getLimitConns() {
    this.http.get<any>(`${this.url}/stream/limit_conns/`).subscribe((data: any) => {
      this.limitConnsDataSubject.next(data);
    });
  }

  /* getHttpServerZones(): Observable<any> {
    //return this.http.get<any>(`${this.url}/http/server_zones/`);
  } */

  /* getStreamServerZones(): Observable<any> {
    return this.http.get<any>(`${this.url}/stream/server_zones/`);
  }

  getLocationZones(): Observable<any> {
    return this.http.get<any>(`${this.url}/http/location_zones/`);
  }
  getHttpUpstreams(): Observable<any> {
    return this.http.get<any>(`${this.url}/http/upstreams/`);
  }
  getStreamUpstreams(): Observable<any> {
    return this.http.get<any>(`${this.url}/stream/upstreams/`);
  }
  getSlab(): Observable<any> {
    return this.http.get<any>(`${this.url}/slabs/`);
  }
  getStreamZoneSync(): Observable<any> {
    return this.http.get<any>(`${this.url}/stream/zone_sync/`);
  }
  getResolvers(): Observable<any> {
    return this.http.get<any>(`${this.url}/resolvers/`);
  }

  getCaches(): Observable<any> {
    return this.http.get<any>(`${this.url}/http/caches/`);
  } */

}
