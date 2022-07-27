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



}
