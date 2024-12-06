
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
// @ts-ignore
import { Budget } from '../models/budget.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css'],
  imports: [
    FormsModule
  ],
  standalone: true
})
export class BudgetComponent implements OnInit {
  budget: Budget = { id: 0, monthlyBudget: 0, totalExpenses: 0 };

  constructor(private apiService: ApiService ) {}

  ngOnInit(): void {
    this.getBudget();
  }

  getBudget(): void {
    this.apiService.getBudget().subscribe((data: string | any[]) => {
      if (data.length > 0) {
        this.budget = data[0];
      }
    });
  }

  updateBudget(): void {
    this.apiService.updateBudget(this.budget).subscribe();
  }
}
