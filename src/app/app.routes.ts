import { Routes } from '@angular/router';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { ExpenseSummaryComponent } from './components/expense-summary/expense-summary.component';

export const routes: Routes = [
  { path: '', component: ExpenseSummaryComponent },
  { path: 'expenses', component: ExpenseListComponent },
  { path: 'add-expense', component: ExpenseFormComponent }
];
