import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {AddExpenseComponent} from '../add-expense/add-expense.component';
import {ExpensesComponent} from './expenses/expenses.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ExpenseTrackerFrontend';
}
