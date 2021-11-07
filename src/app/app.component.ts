import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sidebarWidth = '24%';
  reloading = false;

  toggleReloading(reloading: boolean) {
    this.reloading = reloading;
  }
}
