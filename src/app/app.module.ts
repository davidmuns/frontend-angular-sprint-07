import { PanelComponent } from './components/panel/panel.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';


const componentPaths: Routes = [
  { path: 'home', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanelComponent

  ],
  imports: [
    BrowserModule, RouterModule.forRoot(componentPaths), FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
