import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReportService } from '../../services/report.service';

interface Expense {
  empId: number;
  expenseType: string;
  receipt: string | null;
  amount: number;
  status: string;
  isEditing?: boolean;  // Add optional isEditing property
  tempReceipt?: string | File | null;  // Add temporary variables
  tempAmount?: number | null;
}

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent implements OnInit {
  expenses: Expense[] = [];

  constructor(private expenseService: ReportService) {}  

  ngOnInit(): void {
    
    this.expenseService.getExpenses().subscribe(data => {
      this.expenses = data;
    });
  }


  handleFileInput(event: Event, expense: Expense): void {
    // To handel 0 file input
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      expense.tempReceipt = input.files[0];
    }
  }

  editExpense(expense: Expense) {
    // To edit
    expense.isEditing = true;
    expense.tempReceipt = expense.receipt;
    expense.tempAmount = expense.amount;
  }

  saveExpense(expense: Expense) {
    // To save 
    expense.receipt = expense.tempReceipt as string;
    expense.amount = expense.tempAmount as number;
    expense.isEditing = false;

    console.log('Saved expense:', expense);
  }

  cancelEdit(expense: Expense) {
   // To cancel
    expense.isEditing = false;
    expense.tempReceipt = null;
    expense.tempAmount = null;
  }

  deleteExpense(empId: number) {
    // To delete
    this.expenses = this.expenses.filter(expense => expense.empId !== empId);
    console.log('Deleted expense with Emp ID:', empId);
  }
}
  



/*
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
    */