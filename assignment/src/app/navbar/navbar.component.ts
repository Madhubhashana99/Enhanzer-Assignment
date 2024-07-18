import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isOpen = true;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.sidebarService.isOpen$.subscribe(isOpen => this.isOpen = isOpen);
  }
}
