import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { interval, Subject, switchMap } from 'rxjs';
import { TABS } from 'src/app/config/tabs';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public TABS = TABS;
  public currentTab: string = 'http-zones';
  public httpZonesData: any = [];
  public locationZonesData: any = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getData()
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

  getData(): void {
    this.dashboardService.getHttpServerZonesDataSubject().subscribe({
      next: ({status, data}) => {
        if(status === 'success') {
          let tableData = []
          
          for(let d in data) {
            let rowData = {
              zone: d,
              requests:{
                current: data[d].processing,
                total: data[d].requests,
                request_per_sec: 0
              },
              responses: data[d].responses,
              traffic: {
                sent_per_sec: 0,
                received_per_sec: 0,
                sent: data[d].sent,
                reiceived: data[d].received,
              },
              ssl: data[d].ssl
            }
            tableData.push(rowData)
          }
          this.httpZonesData = tableData;
        }
      }
    });

    this.dashboardService.getLocationZonesDataSubject().subscribe({
      next: ({status, data}) => {
        if(status === 'success') {
          let tableData = []
          
          for(let d in data) {
            let rowData = {
              zone: d,
              requests:{
                total: data[d].requests,
                request_per_sec: 0
              },
              responses: data[d].responses,
              traffic: {
                sent_per_sec: 0,
                received_per_sec: 0,
                sent: data[d].sent,
                reiceived: data[d].received,
              }
            }
            tableData.push(rowData)
          }
          this.locationZonesData = tableData; 
        }
      }
    });
  }

  handleTab(tab: string): void {
    // update current tab
    this.currentTab = tab;
  }

}
