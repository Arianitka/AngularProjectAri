import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { TrendingComponent } from './trending-themes/trending-themes.component';





@NgModule({
  declarations: [

    CurrentThemeComponent,
    ThemesListComponent,
    PostsListComponent,
    MainComponent,
    SearchComponent,
    TrendingComponent
    
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    SharedModule,
    FormsModule,
  ]
})

export class ThemeModule { }
