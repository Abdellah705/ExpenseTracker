import { Component } from '@angular/core';
import {ApiService} from '../app/services/api.service';
import {ActivatedRoute} from '@angular/router';
import {ExpensesComponent} from '../app/expenses/expenses.component';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent {
  expenses: any[] = [];
  errorMessage: string = '';
  selectedExpense: any = null;  // Pour stocker la dépense sélectionnée pour l'édition
  expense: any;

  constructor(
    private expenseService: ApiService,
    private route: ActivatedRoute,private expenseComponent : ExpensesComponent
  ) {}

  ngOnInit(): void {
    this.expenseComponent.loadExpenses();
  }
  saveExpense(): void {
    if (this.selectedExpense) {
      this.expenseService.updateExpense(this.selectedExpense).subscribe(
        (data) => {
          this.expenseComponent.loadExpenses();  // Recharger la liste des dépenses après mise à jour
          this.selectedExpense = null;  // Réinitialiser la dépense sélectionnée
        },
        (error) => {
          this.errorMessage = 'Failed to update expense';
          console.error(error);
        }
      );
    }
  }
}
