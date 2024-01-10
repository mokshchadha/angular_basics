import { Component } from '@angular/core';

@Component({
  selector: 'servercomponent',
  templateUrl: './servercomponent.component.html',
  styleUrl: './servercomponent.component.css',
})
export class ServercomponentComponent {
  clicks: Array<string> = [];

  showPassword: boolean = false;

  toggleShow() {
    this.showPassword = !this.showPassword;
  }

  handleClick() {
    this.toggleShow();
    this.clicks.push(`Click happended at ${new Date().toISOString()}`);
  }
}
