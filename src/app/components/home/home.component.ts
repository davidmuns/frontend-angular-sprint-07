import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  total: number = 0;
  webPrice: number = 0;
  seoPrice: number = 0;
  adsPrice: number = 0;

  options = [
    { label: 'Una página web (500€)', price: 500, isChecked: false },
    { label: 'Una consultoria SEO (300€)', price: 300, isChecked: false },
    { label: 'Una campaña de Google Ads (200€)', price: 200, isChecked: false }
  ]
  constructor() { }

  ngOnInit(): void { }

  public updateTotal() {

    this.webPrice = this.options[0].isChecked ? this.options[0].price : 0;

    this.seoPrice = this.options[1].isChecked ? this.options[1].price : 0;

    this.adsPrice = this.options[2].isChecked ? this.options[2].price : 0;

    this.total = this.webPrice + this.seoPrice + this.adsPrice;

  }

}
