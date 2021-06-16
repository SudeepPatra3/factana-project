import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HighchartsChartModule } from 'highcharts-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondFoldComponent } from './second-fold/second-fold.component';
import { FirstfoldDataComponent } from './firstfold-data/firstfold-data.component';
import { GaugechartComponent } from './gaugechart/gaugechart.component';
import { ProjectsComponent } from './projects/projects.component';
import { LinechartComponent } from './linechart/linechart.component';
import { TableComponent } from './table/table.component';
import { ActivityComponent } from './activity/activity.component';
import { ChecklistComponent } from './checklist/checklist.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondFoldComponent,
    FirstfoldDataComponent,
    GaugechartComponent,
    ProjectsComponent,
    LinechartComponent,
    TableComponent,
    ActivityComponent,
    ChecklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
