import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() linkSelected = new EventEmitter<{ selectedLink: string }>();

  onNavLinkClick(selectedLink: string) {
    this.linkSelected.emit({
      selectedLink: selectedLink,
    });
  }
}
