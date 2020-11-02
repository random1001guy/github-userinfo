import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponentComponent } from './view-component/view-component.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ViewComponentComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    ViewComponentComponent
  ]
})
export class ViewModule { }
