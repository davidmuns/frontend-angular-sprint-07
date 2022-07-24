import { Injectable } from '@angular/core';
import { Option } from '../interfaces/option';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private total: number = 0;
  private webExtras: number = 0;
  private totalWithExtras: number = 0;
  private isDataValid: boolean = true;

  constructor() { }

  public calculateTotal(options: Option[]) {
    let tempSum = 0;
    options.forEach(option => {
      if (option.isChecked) {
        tempSum += option.price;
      }
    })
    this.total = tempSum;
  }

  public calculateExtras(pages: number, languages: number): void {
    if (!Number.isInteger(pages) || !Number.isInteger(languages) || Number.isNaN(languages) || Number.isNaN(pages)) {
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

  public formatNumberToCurrency(number: number) {
    let formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR',
    });
    return formatter.format(number);
  }
}
