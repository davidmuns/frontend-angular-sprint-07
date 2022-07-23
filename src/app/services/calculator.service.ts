import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private webPrice: number = 0;
  private seoPrice: number = 0;
  private adsPrice: number = 0;
  private total: number = 0;
  private webExtras: number = 0;
  private totalWithExtras: number = 0;
  private isNumberType: boolean = true;

  constructor() { }

  public calculateTotal(options: any) {

    this.webPrice = options[0].isChecked ? options[0].price : 0;
    this.seoPrice = options[1].isChecked ? options[1].price : 0;
    this.adsPrice = options[2].isChecked ? options[2].price : 0;

    this.total = this.webPrice + this.seoPrice + this.adsPrice;

  }

  public calculateWebExtras(pages: number, languages: number): void {
    if (Number.isNaN(pages) || Number.isNaN(languages)) {
      this.isNumberType = false;
    } else {
      this.isNumberType = true;
      this.webExtras = (pages * languages) * 30;
    }
  }

  public getTotalWithExtras(): string {
    this.totalWithExtras = this.isNumberType ? this.total + this.webExtras : 0;
    return this.formatNumberToCurrency(this.totalWithExtras);
  }

  public formatNumberToCurrency(number: number) {
    // Create our number formatter.
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR',
    });

    return formatter.format(number);
  }
}
