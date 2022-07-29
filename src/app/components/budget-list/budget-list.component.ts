import { Component, OnInit } from '@angular/core';
import { Budget } from 'src/app/models/budget';
import { CalculatorService } from './../../services/calculator.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {
  filterByName: string = '';
  // budget!: Budget;
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
