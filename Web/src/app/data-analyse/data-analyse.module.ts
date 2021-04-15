import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { DataAnalyseRoutingModule } from './data-analyse-routing.module';
import {LayoutComponent} from './layout/layout.component';
import {OverviewComponent} from './overview/overview.component';
import {ColumnChartComponent} from './overview/column-chart/column-chart.component';
import {PriceTableComponent} from './overview/price-table/price-table.component';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {NgxEchartsModule} from 'ngx-echarts';
import { PieChartComponent } from './overview/pie-chart/pie-chart.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { WeekViewComponent } from './week-view/week-view.component';
import { DataMgtComponent } from './data-mgt/data-mgt.component';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LayoutComponent,
    OverviewComponent,
    ColumnChartComponent,
    PriceTableComponent,
    PieChartComponent,
    WeekViewComponent,
    DataMgtComponent,

  ],
  exports: [
    LayoutComponent,
    ColumnChartComponent,
    PriceTableComponent,
    PieChartComponent
  ],
  imports: [
    NzSliderModule,
    NzInputNumberModule,
    NzLayoutModule,
    NzMenuModule,
    CommonModule,
    DataAnalyseRoutingModule,
    NzBreadCrumbModule,
    NgxEchartsModule,
    NzGridModule,
    FormsModule
  ]
})
export class DataAnalyseModule { }
