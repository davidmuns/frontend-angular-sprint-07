import { Injectable } from '@angular/core';
import { Option } from '../interfaces/option';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private total: number = 0;
  private webExtras: number = 0
  private totalWithExtras: number = 0
  private isDataValid: boolean = true;

  constructor() {

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
      this.isDataValid = false;
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
