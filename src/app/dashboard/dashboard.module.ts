import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  //Add exports para que ele possa ser exibido
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
