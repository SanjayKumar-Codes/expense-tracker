import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Expense } from '../models/expense.model';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private expenses: Expense[] = [];
  private expensesSubject = new BehaviorSubject<Expense[]>(this.expenses);

  constructor() {}

  getExpenses(): Observable<Expense[]> {
    return this.expensesSubject.asObservable();
  }

  addExpense(expense: Expense): void {
    this.expenses.push(expense);
    this.expensesSubject.next(this.expenses);
  }
}
