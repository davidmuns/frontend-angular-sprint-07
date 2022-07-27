import { CalculatorService } from './../../services/calculator.service';
import { Component, OnInit } from '@angular/core';
import { IServicio } from '../../models/iservicio';
import serviciosJson from 'src/assets/servicios.json'
import { Budget } from '../../models/budget';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  servicios: IServicio[] = serviciosJson;
  isBtnAddBudgetDisabled: boolean = false;
  pages: number = 0;
  languages: number = 0;
  errors: number = 0;

  // constructor dependency injection
  constructor(private calculatorService: CalculatorService) {

  }

  ngOnInit(): void { }

  public updateTotal() {
    this.calculatorService.calculateTotal(this.servicios);
  }

  public getTotalWithExtras(): string {
    return this.calculatorService.getTotalWithExtras();
  }

  public createBudget(name: string, client: string) {
    this.calculatorService.createBudget(name, client, this.servicios);
  }

  public getPagesFromPanel(page: number): void {


  }

  public getLanguagesFromPanel(language: number): void { }
}
