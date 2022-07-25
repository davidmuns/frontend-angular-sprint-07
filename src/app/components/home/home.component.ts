import { CalculatorService } from './../../services/calculator.service';
import { Component, OnInit } from '@angular/core';
import { Option } from '../../interfaces/option';
import optionsJson from 'src/assets/options.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  options: Option[] = optionsJson;

  // constructor dependency injection
  constructor(private calculatorService: CalculatorService) {

  }

  ngOnInit(): void { }

  public updateTotal() {
    this.calculatorService.calculateTotal(this.options);
  }

  public getTotalWithExtras(): string {
    return this.calculatorService.getTotalWithExtras();
  }
}
