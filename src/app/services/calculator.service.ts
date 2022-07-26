import { Injectable } from '@angular/core';
import { IServicio } from '../models/iservicio';

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

  constructor() {

  }

  public calculateTotal(servicios: IServicio[]): void {
    let tempTotal = 0;
    servicios.forEach(servicio => {
      if (servicio.isChecked) tempTotal += servicio.price;
    })
    this.total = tempTotal;
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
}
