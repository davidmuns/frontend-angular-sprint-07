import { Component, OnInit } from '@angular/core';
import { Budget } from 'src/app/models/budget';
import { CalculatorService } from './../../services/calculator.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {

  budgets: Budget[] = this.calculatorService.getBudgets();
  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
  }

  public sortBudgetListAlphabeticallyByName() {
    this.budgets = this.budgets
      .sort((budget1, budget2) => {
        return budget1.getBudgetName() === budget2.getBudgetName() ? 0 : budget1.getBudgetName() > budget2.getBudgetName() ? 1 : -1;
      })
    console.log(this.budgets);
  }

  public sortBudgetListByDate() {
    this.budgets = this.budgets.sort((budget1, budget2) => Number(budget1.getDate()) - Number(budget2.getDate()))

  }



}
