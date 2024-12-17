import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';



@NgModule({
  declarations: [
    AddThemeComponent,
    CurrentThemeComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
  ]
})
export class ThemeModule { }
