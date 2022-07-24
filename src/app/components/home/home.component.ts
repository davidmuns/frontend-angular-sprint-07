import { CalculatorService } from './../../services/calculator.service';
import { Component, OnInit } from '@angular/core';
import { Option } from '../../interfaces/option';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  options: Option[] = [
    { label: 'Una página web (desde 530€)', price: 500, isChecked: false },
    { label: 'Una consultoria SEO (300€)', price: 300, isChecked: false },
    { label: 'Una campaña de Google Ads (200€)', price: 200, isChecked: false }
  ]

  // constructor dependency injection
  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void { }

  public updateTotal() {
    this.calculatorService.calculateTotal(this.options);
  }

  public getTotalWithExtras(): string {
    return this.calculatorService.getTotalWithExtras();
  }
}
