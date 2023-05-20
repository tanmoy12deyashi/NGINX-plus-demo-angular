import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private url = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getHttpServerZones(): Observable<any> {
    return this.http.get<any>(`${this.url}/http/server_zones/`);
  }

  getStreamServerZones(): Observable<any> {
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
  }

}
