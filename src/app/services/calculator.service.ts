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

  constructor() { }

  public calculateTotal(options: any) {

    this.webPrice = options[0].isChecked ? options[0].price : 0;
    this.seoPrice = options[1].isChecked ? options[1].price : 0;
    this.adsPrice = options[2].isChecked ? options[2].price : 0;

    this.total = this.webPrice + this.seoPrice + this.adsPrice;

  }

  public calculateWebExtras(pages: number, languages: number) {
    pages = pages <= 0 ? 1 : pages;
    languages = languages <= 0 ? 1 : languages;

    // if (pages === 0 && languages != 0) {
    //   this.webExtras = languages * 30;
    // } else if (pages != 0 && languages === 0) {
    //   this.webExtras = pages * 30;
    // } else {
    //   this.webExtras = (pages * languages) * 30;
    // }
    this.webExtras = (pages * languages) * 30;

  }

  public getTotalWithExtras(): number {
    return this.total + this.webExtras;
  }
}
