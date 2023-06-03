import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  displayDialog = true;

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
