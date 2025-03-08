import { Component } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css'],
  imports: [CommonModule,
  FormsModule]  
})

export class ExpenseFormComponent {
  title: string = '';
  amount: number = 0;
  category: string = '';
  categories = ['Food', 'Transport', 'Entertainment', 'Bills'];

  constructor(private expenseService: ExpenseService) {}

  addExpense() {
    const newExpense: Expense = {
      id: Date.now(),
      title: this.title,
      amount: this.amount,
      category: this.category,
      date: new Date(),
    };
    this.expenseService.addExpense(newExpense);
    this.title = '';
    this.amount = 0;
    this.category = '';
  }
}
