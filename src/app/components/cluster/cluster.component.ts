import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.css']
})
export class ClusterComponent implements OnInit {
  @Input() instanceStatus: any;
  @Input() clusterZones: any;
  constructor() { }

  ngOnInit(): void {
  }

}
