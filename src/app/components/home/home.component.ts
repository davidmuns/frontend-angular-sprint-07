import { CalculatorService } from './../../services/calculator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  options = [
    { label: 'Una página web (500€)', price: 500, isChecked: false },
    { label: 'Una consultoria SEO (300€)', price: 300, isChecked: false },
    { label: 'Una campaña de Google Ads (200€)', price: 200, isChecked: false }
  ]
  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void { }

  public updateTotal() {
    this.calculatorService.calculateTotal(this.options);
  }

  public getTotalWithExtras(): number {
    return this.calculatorService.getTotalWithExtras();
  }
}
