import { Component, OnInit } from '@angular/core';
import {APP_ROUTES, navItems} from '../../home.mode';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  readonly APP_ROUTES = APP_ROUTES;
  readonly navItems = navItems;

  constructor() { }

  ngOnInit(): void {
  }

}
