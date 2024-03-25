import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  change: boolean = false;

  constructor() {}

  changeToDark() {
    this.change = !this.change;
  }
}
