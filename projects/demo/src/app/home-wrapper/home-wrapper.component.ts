import { Component, OnInit } from '@angular/core';
import {APP_ROUTES} from './home.mode';

@Component({
  selector: 'app-home-wrapper',
  templateUrl: './home-wrapper.component.html',
  styleUrls: ['./home-wrapper.component.scss']
})
export class HomeWrapperComponent implements OnInit {

  readonly APP_ROUTES = APP_ROUTES;

  constructor() { }

  ngOnInit(): void {
  }

}
