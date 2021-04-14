import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppRoutingModule } from './app-routing.module';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {CommonModule, registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzSliderModule} from 'ng-zorro-antd/slider';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {DataAnalyseModule} from './data-analyse/data-analyse.module';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import {NzButtonModule} from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';



registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NzIconModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxEchartsModule.forRoot({echarts}),
    AppRoutingModule,
    NzGridModule,
    NzInputNumberModule,
    NzLayoutModule,
    NzMenuModule,
    DataAnalyseModule,
    NzBreadCrumbModule,
    NzDropDownModule,
    NzButtonModule,
    NzSliderModule
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
