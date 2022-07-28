import { Injectable } from '@angular/core';
import { Budget } from '../models/budget';
import { IServicio } from '../models/iservicio';
import serviciosJson from 'src/assets/servicios.json'

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private total: number = 0;
  private webExtras: number = 0
  private totalWithExtras: number = 0
  private isDataValid: boolean = true;
  private pages: number = 0
  private languages: number = 0;
  private servicios: IServicio[] = serviciosJson;
  private budgets: Budget[] = [];

  constructor() {

  }

  public calculateTotal(): void {
    let tempTotal = 0;
    this.servicios.forEach(servicio => {
      if (servicio.isChecked) tempTotal += servicio.price;
    })
    this.total = tempTotal;
  }

  public getServicios(): IServicio[] {
    return this.servicios;
  }

  public getPages(): number {
    return this.pages;
  }

  public getLanguages(): number {
    return this.languages;
  }

  public calculateExtras(pages: number, languages: number): void {
    if (Number.isInteger(pages) === false || Number.isInteger(languages) === false || Number.isNaN(languages) || Number.isNaN(pages)) {
      this.isDataValid = false;
      return
    }
    this.pages = pages;
    this.languages = languages;
    this.isDataValid = true;
    this.webExtras = (pages * languages) * 30;
  }

  public getTotalWithExtras(): string {
    this.totalWithExtras = this.isDataValid ? this.total + this.webExtras : 0;
    return this.formatNumberToCurrency(this.totalWithExtras);
  }

  public formatNumberToCurrency(number: number): string {
    let formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR',
    });
    return formatter.format(number);
  }

  public createBudget(budgetName: string, clientName: string) {
    let labels: string[] = this.servicios
      .filter(servicio => servicio.isChecked)
      .map(servicio => servicio.label);

    const budget: Budget = new Budget(budgetName, clientName, labels, this.getTotalWithExtras());
    budget.setWebExtras(this.pages, this.languages);
    this.budgets.push(budget);

  }

  public getBudgets(): Budget[] {
    return this.budgets;
  }

  public sortBudgetListAlphabeticallyByName(): Budget[] {
    return this.budgets = this.budgets
      .sort((budget1, budget2) => {
        return budget1.getBudgetName() === budget2.getBudgetName() ? 0 : budget1.getBudgetName() > budget2.getBudgetName() ? 1 : -1;
      })
  }

  public sortBudgetListByDate(): Budget[] {
    return this.budgets.sort((budget1, budget2) => Number(budget1.getDate()) - Number(budget2.getDate()))

  }
}
