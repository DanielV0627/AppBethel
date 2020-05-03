import { Component, OnInit } from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {MegaMenuItem} from 'primeng/api'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private items: MenuItem[];
    /**
     *
     */
    constructor() {    
    }
    ngOnInit() {
      /*Now what I want is for example to preselect by default in the list of Items, that are the childs of the parent preselect the second SubItem in this case the label 'Open' so that the keep marked as selected.*/
          this.items = [
              {
                  label: 'File',
                  icon: 'pi pi-pw pi-file',
                  items: [
                  
                      {
                        label: 'Open', 
                        routerLink: ['/proposal/create'], 
                        routerLinkActiveOptions: { exact: true },
                        icon: 'pi pi-fw pi-external-link'
                      },
                      {separator: true},
                      {
                        label: 'Quit',
                        routerLink: ['/proposal'],
                        routerLinkActiveOptions: { exact: true },
                        icon: 'pi pi-fw pi-times'
                      }
                  ]
              }
          ];
      }
}
