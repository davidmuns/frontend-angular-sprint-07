import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PanellComponent } from './components/panell/panell.component';

const componentPaths: Routes = [
  {path: 'home', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanellComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(componentPaths), FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
