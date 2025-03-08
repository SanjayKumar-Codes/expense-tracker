import {OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense.model';

@Component({
  selector: 'app-expense-summary',
  standalone: true,
  templateUrl: './expense-summary.component.html',
  styleUrls: ['./expense-summary.component.css'],
  imports:[CommonModule]
})
export class ExpenseSummaryComponent implements OnInit {
  total: number = 0;

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenseService.getExpenses().subscribe((expenses) => {
      this.total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    });
  }
}
