import { Component } from '@angular/core';
import {MegaMenuItem,MenuItem} from 'primeng/api';
import {SlideMenuModule} from 'primeng/slidemenu';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppBethel'; 
  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {label: 'Compañia', icon: 'pi pi-fw pi-plus', routerLink:['\company'] },
          {label: 'Open', icon: 'pi pi-fw pi-download',routerLink:['\product'] }, 
          {label: 'Category', icon: 'pi pi-fw pi-download',routerLink:['\Category'] },
          {label: 'Undo', icon: 'pi pi-fw pi-refresh'},
          {label: 'New', icon: 'pi pi-fw pi-plus'},
          {label: 'Open', icon: 'pi pi-fw pi-download'},
    
      ];
  }
}
