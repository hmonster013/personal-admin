import { Component } from '@angular/core';
import { SideMenuService } from '../_services/side-menu.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  imports: [
    CommonModule
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  menuItems: any;
  dropdownStates: Map<string, boolean> = new Map();

  constructor (
    private sideMenuService: SideMenuService,
  ) {
    this.menuItems = this.sideMenuService.getMenuItems();
  }

  toggleDropdown(key: string, event: Event): void {
    event.preventDefault();
    const currentState = this.dropdownStates.get(key) || false;
    this.dropdownStates.set(key, !currentState);
  }

  isDropdownOpen(key: string): boolean {
    return this.dropdownStates.get(key) || false;
  }
}
