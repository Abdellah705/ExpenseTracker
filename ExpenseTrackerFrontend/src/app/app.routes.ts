import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesComponent } from './expenses/expenses.component';
import { BudgetComponent } from './budget/budget.component';
import {AddExpenseComponent} from '../add-expense/add-expense.component';

export const routes: Routes = [
  { path: 'expenses', component: ExpensesComponent },
  { path: 'budgets', component: BudgetComponent },
  { path: 'addExpense', component: AddExpenseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
