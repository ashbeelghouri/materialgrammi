import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MaterialgrammiModule } from 'projects/materialgrammi/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { ThemesComponent } from './pages/themes/themes.component';
import { TemplatesComponent } from './pages/templates/templates.component';
import { ToolsModule } from './tools/tools.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ThemesComponent,
    TemplatesComponent
  ],
  imports: [
    BrowserModule,
    MaterialgrammiModule,
    AppRoutingModule,
    ToolsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
