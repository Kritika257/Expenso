import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

interface Expense {
  empId: number;
  expenseType: string;
  receipt: string | null;
  amount: number;
  status: string;
}

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
  expenses: Expense[] = [
    { empId: 1, expenseType: 'Travel', receipt: null, amount: 150, status: 'Admin Approved' },
    { empId: 2, expenseType: 'Office Supplies', receipt: 'receipt1.pdf', amount: 75, status: 'Completed' },
    { empId: 3, expenseType: 'Meals', receipt: null, amount: 50, status: 'Manager Rejected' },
    // Add more dummy data as needed
  ];

  editExpense(expense: Expense) {
    // Logic to edit the expense and upload receipt if not uploaded
    console.log('Edit expense:', expense);
  }

  deleteExpense(empId: number) {
    // Logic to delete the expense
    this.expenses = this.expenses.filter(expense => expense.empId !== empId);
    console.log('Delete expense with Emp ID:', empId);
  }
}