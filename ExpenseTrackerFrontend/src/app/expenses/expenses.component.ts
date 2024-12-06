import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgForOf } from '@angular/common';
import {FormsModule} from '@angular/forms';  // Ajoutez cette importation

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
  imports: [
    RouterModule,  // Ajoutez RouterModule ici
    NgForOf,
    FormsModule
  ],
  standalone: true
})
export class ExpensesComponent implements OnInit {
  expenses: any[] = [];
  errorMessage: string = '';
  selectedExpense: any = null;  // Pour stocker la dépense sélectionnée pour l'édition

  constructor(
    private expenseService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadExpenses();
  }

  // Charger les dépenses
  loadExpenses(): void {
    this.expenseService.getExpenses().subscribe(
      (data) => {
        this.expenses = data;
      },
      (error) => {
        this.errorMessage = 'Failed to load expenses';
        console.error(error);
      }
    );
  }

  // Méthode pour éditer une dépense
  editExpense(expense: any): void {
    this.selectedExpense = { ...expense };  // Crée une copie de la dépense à modifier
  }

  // Méthode pour enregistrer les modifications de la dépense
  saveExpense(): void {
    if (this.selectedExpense) {
      this.expenseService.updateExpense(this.selectedExpense).subscribe(
        (data) => {
          this.loadExpenses();  // Recharger la liste des dépenses après mise à jour
          this.selectedExpense = null;  // Réinitialiser la dépense sélectionnée
        },
        (error) => {
          this.errorMessage = 'Failed to update expense';
          console.error(error);
        }
      );
    }
  }

  // Méthode pour annuler l'édition
  cancelEdit(): void {
    this.selectedExpense = null;  // Réinitialiser la dépense sélectionnée sans enregistrer les modifications
  }

  // Méthode pour supprimer une dépense
  newExpense: any;
  deleteExpense(expenseId: number): void {
    if (confirm('Are you sure you want to delete this expense?')) {
      this.expenseService.deleteExpense(expenseId).subscribe(
        () => {
          this.loadExpenses();  // Recharger la liste des dépenses après suppression
        },
        (error) => {
          this.errorMessage = 'Failed to delete expense';
          console.error(error);
        }
      );
    }
  }
}
