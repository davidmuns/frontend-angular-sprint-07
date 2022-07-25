import { Injectable } from '@angular/core';
import { Option } from '../interfaces/option';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private total: number;
  private webExtras: number;
  private totalWithExtras: number;
  private isDataValid: boolean;

  constructor() {
    this.total = 0;
    this.webExtras = 0;
    this.totalWithExtras = 0;
    this.isDataValid = false;
  }

  public calculateTotal(options: Option[]): void {
    let tempTotal = 0;
    options.forEach(option => {
      if (option.isChecked) tempTotal += option.price;
    })
    this.total = tempTotal;
  }

  public calculateExtras(pages: number, languages: number): void {
    if (Number.isInteger(pages) === false || Number.isInteger(languages) === false || Number.isNaN(languages) || Number.isNaN(pages)) {
      return
    }
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
