import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  public displayDialog: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showDialog() {
    console.log(this.displayDialog)
    this.displayDialog = true;
  }

  hideDialog() {
    this.displayDialog = false;
  }
}
