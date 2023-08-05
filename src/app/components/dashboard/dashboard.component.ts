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
  public limitReqsData: any = [];
  public httpUpstreamsData: any = [];

  public instanceStatus: any = {};
  public clusterZones: any = [];

  public sharedZonesData: any = [];

  public limitConnsData: any;
  public tcp_udpZonesData: any = [];
  public resolversData: any;

  public cacheData: any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(): void {
    this.dashboardService.getHttpServerZonesDataSubject().subscribe({
      next: ({ status, data }) => {
        if (status === 'success') {
          let tableData = []

          for (let d in data) {
            let rowData = {
              zone: d,
              requests: {
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
      next: ({ status, data }) => {
        if (status === 'success') {
          let tableData = []

          for (let d in data) {
            let rowData = {
              zone: d,
              requests: {
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

    this.dashboardService.getLimitReqsDataSubject().subscribe({
      next: ({ status, data }) => {
        if (status === 'success') {
          let tableData = []

          for (let d in data) {
            let rowData = {
              zone: d,
              ...data[d]
            }
            tableData.push(rowData)
          }
          this.limitReqsData = tableData;
        }
      }
    });

    this.dashboardService.getHttpUpstreamsDataSubject().subscribe({
      next: ({ status, data }) => {
        if (status === 'success') {
          let tableData = []

          for (let d in data) {
            tableData.push(data[d])
          }
          this.httpUpstreamsData = tableData;
        }
      }
    });

    this.dashboardService.getSlabDataSubject().subscribe({
      next: ({ status, data }) => {
        if (status === 'success') {
          let tableData = []

          for (let d in data) {
            let rowData = {
              zone: d,
              ...data[d]
            }
            tableData.push(rowData)
          }
          this.sharedZonesData = tableData;
        }
      }
    });

    this.dashboardService.getStreamZoneSyncDataSubject().subscribe({
      next: ({ status, data }) => {
        if (status === 'success') {
          this.instanceStatus = data.status;

          let tableData = [];
          for (let d in data?.zones) {
            let rowData = {
              zone: d,
              ...data?.zones[d]
            }
            tableData.push(rowData)
          }
          this.clusterZones = tableData;
        }
      }
    });

    this.dashboardService.getStreamServerZonesDataSubject().subscribe({
      next: ({ status, data }) => {
        if (status === 'success') {
          let tableData = [];
          for (let d in data) {
            let rowData = {
              zone: d,
              ...data[d]
            }
            tableData.push(rowData)
          }
          this.tcp_udpZonesData = tableData;
        }
      }
    });

    this.dashboardService.getLimitConnsDataSubject().subscribe({
      next: ({ status, data }) => {
        if (status === 'success') {
          let tableData = [];
          for (let d in data) {
            let rowData = {
              zone: d,
              ...data[d]
            }
            tableData.push(rowData)
          }
          this.limitConnsData = tableData;
        }
      }
    });

    this.dashboardService.getResolversDataSubject().subscribe({
      next: ({ status, data }) => {
        if (status === 'success') {
          let tableData = [];
          for (let d in data) {
            let rowData = {
              zone: d,
              ...data[d]
            }
            tableData.push(rowData)
          }
          this.resolversData = tableData;
        }
      }
    });

    this.dashboardService.getCachesDataSubject().subscribe({
      next: ({ status, data }) => {
        if (status === 'success') {
          let tableData = [];
          for (let d in data) {
            let rowData = {
              zone: d,
              ...data[d]
            }
            tableData.push(rowData)
          }
          this.cacheData = tableData;
        }
      }
    });
  }



  handleTab(tab: string): void {
    // update current tab
    this.currentTab = tab;
  }

}
