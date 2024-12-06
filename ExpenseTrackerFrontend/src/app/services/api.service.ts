import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from '../models/Expense.model';
import { Budget } from '../models/Budget.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:5122';

  constructor(private http: HttpClient) {}

  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.apiUrl + "/expenses");
  }

  addExpense(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(`${this.apiUrl}/expenses`, expense);
  }

  deleteExpense(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/Expenses/${id}`);
  }

  // Budget API
  getBudget(): Observable<Budget[]> {
    return this.http.get<Budget[]>(`${this.apiUrl}/Budgets`);
  }

  updateBudget(budget: Budget): Observable<Budget> {
    return this.http.put<Budget>(`${this.apiUrl}/Budgets/${budget.id}`, budget);
  }

  updateExpense(expense: Expense) {
    return this.http.put<Expense>(`${this.apiUrl}/expenses/${expense.id}`, expense);

  }
}
