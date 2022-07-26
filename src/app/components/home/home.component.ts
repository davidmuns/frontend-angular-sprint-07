import { CalculatorService } from './../../services/calculator.service';
import { Component, OnInit } from '@angular/core';
import { IServicio } from '../../models/iservicio';
import serviciosJson from 'src/assets/servicios.json'
import { Budget } from '../../models/budget';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  servicios: IServicio[] = serviciosJson;
  budgets: Budget[] = [];

  // constructor dependency injection
  constructor(private calculatorService: CalculatorService) {

  }

  ngOnInit(): void { }

  public updateTotal() {
    this.calculatorService.calculateTotal(this.servicios);
  }

  public getTotalWithExtras(): string {
    return this.calculatorService.getTotalWithExtras();
  }

  public setBudget(name: string, client: string) {
    const servicios: string[] = [];
    this.servicios.forEach(servicio => {
      if (servicio.isChecked) servicios.push(servicio.label);
    })
    const pages = this.calculatorService.getPages();
    const languages = this.calculatorService.getLanguages();
    const budget: Budget = new Budget(name, client, servicios, this.getTotalWithExtras());
    budget.setWebExtras(pages, languages);


    this.budgets.push(budget);
    console.log(this.budgets);

  }
}
