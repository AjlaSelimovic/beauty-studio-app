import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    UiComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UiModule { }
