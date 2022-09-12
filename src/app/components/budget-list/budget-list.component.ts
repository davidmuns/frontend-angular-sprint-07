import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './../../services/calculator.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {
  filterByName: string = '';
  constructor(public readonly calculatorService: CalculatorService) { }

  ngOnInit(): void {
  }

  public sortBudgetListAlphabeticallyByName() {
    this.calculatorService.sortBudgetListAlphabeticallyByName();
  }

  public sortBudgetListByDate() {
    this.calculatorService.sortBudgetListByDate();
  }



}
