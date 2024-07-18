import { Component } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isOpen = true; // Initially sidebar is open

  constructor(private sidebarService: SidebarService) { }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
    this.isOpen = !this.isOpen; // Toggle sidebar open/close
  }
}
