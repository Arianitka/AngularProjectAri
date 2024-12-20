import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { AddThemeComponent } from "./add-theme/add-theme.component";
import { CurrentThemeComponent } from "./current-theme/current-theme.component";
import { AuthActivate } from "../guards/auth.activate";
import { ThemesListComponent } from "./themes-list/themes-list.component";
import { SearchComponent } from "./search/search.component";
import { TrendingComponent } from "./trending-themes/trending-themes.component";

const routes: Routes = [
    {
        path: 'themes',
        children: [
            { path: '', pathMatch: 'full', component: MainComponent },
            { path: ':themeId', component: CurrentThemeComponent },
        ],
    },
{
        path: 'add-theme',
        component: AddThemeComponent,
        canActivate: [AuthActivate]
    },
    {
        path: 'themes',
        component: ThemesListComponent,
        canActivate: [AuthActivate]
    },
    {
        path: 'search',
        component: SearchComponent,
    },
    {
        path: 'trending',
        component: TrendingComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ThemeRoutingModule { }