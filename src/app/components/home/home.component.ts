import { CalculatorService } from './../../services/calculator.service';
import { Component, OnInit } from '@angular/core';
import { IServicio } from '../../models/iservicio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isBtnAddBudgetDisabled: boolean = false;
  private pages: number = 0;
  private languages: number = 0;

  // constructor dependency injection
  constructor(public readonly calculatorService: CalculatorService) {

  }

  ngOnInit(): void { }

  public updateTotal() {
    this.isBtnAddBudgetDisabled = this.getResultCondition();
    this.calculatorService.calculateTotal();
  }

  public getTotalWithExtras(): string {
    return this.calculatorService.getTotalWithExtras();
  }

  public createBudget(name: string, client: string) {
    this.calculatorService.createBudget(name, client);
  }

  public getPagesFromPanel(page: number): void {
    this.pages = page;
    this.isBtnAddBudgetDisabled = this.getResultCondition();
  }

  public getLanguagesFromPanel(language: number): void {
    this.languages = language;
    this.isBtnAddBudgetDisabled = this.getResultCondition();
  }

  private getResultCondition(): boolean {
    const servicios: IServicio[] = this.calculatorService.getServicios();
    return servicios[0].isChecked &&
      (
        this.pages < 1 ||
        Number.isNaN(this.pages) ||
        !Number.isInteger ||
        this.languages < 1 ||
        Number.isNaN(this.languages) ||
        !Number.isInteger(this.languages)
      ) ? true : false;
  }
}
