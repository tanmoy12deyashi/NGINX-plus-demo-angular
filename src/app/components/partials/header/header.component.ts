import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { SettingsComponent } from '../../popups/settings/settings.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  displayDialog = true;

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  openModal() {
    const ref = this.dialogService.open(SettingsComponent, {
      header: 'Options',
      width: 'auto',
      data: { /* optional data to pass to the modal component */ }
    });
  
    ref.onClose.subscribe((result: any) => {
      // Handle modal close event
      console.log('Modal closed:', result);
    });
  }

}
