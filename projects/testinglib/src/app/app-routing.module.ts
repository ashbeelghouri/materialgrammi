import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { TemplatesComponent } from './pages/templates/templates.component';
import { ThemesComponent } from './pages/themes/themes.component';

const routes: Routes = [{
  path: "",
  component: LandingComponent
}, {
  path: "documentation",
  loadChildren: () => import('./documentation/documentation.module').then(m => m.DocumentationModule) 
}, {
  path: "themes",
  component: ThemesComponent  
}, {
  path: "templates",
  component: TemplatesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }