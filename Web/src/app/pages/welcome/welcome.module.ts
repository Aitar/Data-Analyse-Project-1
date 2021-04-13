import {NgModule, OnInit} from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

import G6 from '@antv/g6';

@NgModule({
  imports: [WelcomeRoutingModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule implements OnInit{
  ngOnInit() {

  }
  constructor() {
  }
}
