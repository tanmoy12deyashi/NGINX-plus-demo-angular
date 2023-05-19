import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private url = 'https://demo.nginx.com/api/8';
  constructor(private http: HttpClient) { }

  getServerZones(): Observable<any> {
    return this.http.get<any>(`${this.url}/http/caches/`);
  }

}
