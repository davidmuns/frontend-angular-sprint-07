import { CalculatorService } from './../../services/calculator.service';
import { Component, OnInit } from '@angular/core';
import { Option } from '../../interfaces/option';
import optionsJson from 'src/assets/options.json'
import { Budget } from '../../interfaces/budget';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  options: Option[] = optionsJson;
  budgets: Budget[] = [];

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

  public setBudget(name: string, client: string) {
    const options: string[] = [];
    this.options.forEach(option => {
      if (option.isChecked) options.push(option.label);
    })
    const pages = this.calculatorService.getPages();
    const languages = this.calculatorService.getLanguages();
    const budget: Budget = new Budget(name, client, options, this.getTotalWithExtras());
    budget.setWebExtras(pages, languages);


    this.budgets.push(budget);
    console.log(this.budgets);

  }
}
