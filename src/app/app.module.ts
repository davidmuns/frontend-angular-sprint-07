import { CalculatorService } from './services/calculator.service';
import { PanelComponent } from './components/panel/panel.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { ModalWebComponent } from './components/modalweb/modalweb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BudgetListComponent } from './components/budget-list/budget-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanelComponent,
    WelcomePageComponent,
    ModalWebComponent,
    BudgetListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    AppRoutingModule,
    NgbModule
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
