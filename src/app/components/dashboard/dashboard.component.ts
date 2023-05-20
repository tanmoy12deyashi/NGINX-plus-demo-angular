import { Component, OnInit } from '@angular/core';
import { TABS } from 'src/app/config/tabs';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public TABS = TABS;
  public currentTab: string = 'dashboard';
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(): void {
    this.dashboardService.getHttpServerZones().subscribe({
      next: response => {
        console.log(response);
      },
      error: error => {
        console.error(error);
      }
    })
  }

  handleTab(tab: string): void {
    // update current tab
    this.currentTab = tab;
  }

}
