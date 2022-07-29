import { Budget } from 'src/app/models/budget';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'budgetPipe'
})
export class BudgetFilterPipe implements PipeTransform {

  transform(budgets: Budget[], budgetName: string): Budget[] {
    if (!budgetName || budgetName.length < 3) return budgets;
    let filteredBudgetsByName: Budget[] = [];
    for (const budget of budgets) {
      if (budget.getBudgetName().toLowerCase().indexOf(budgetName.toLowerCase()) > -1) {
        filteredBudgetsByName.push(budget)
      }
    }
    return filteredBudgetsByName;
  }

}
