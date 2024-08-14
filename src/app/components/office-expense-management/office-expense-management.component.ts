import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-office-expense-management',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './office-expense-management.component.html',
  styleUrl: './office-expense-management.component.css'
})
export class OfficeExpenseManagementComponent {

  data = [
    { empName: 'Aman', submissionDate: '12', expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
    { empName: 'Aman', submissionDate: '12', expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
    { empName: 'Aman', submissionDate: '12', expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
    { empName: 'Aman', submissionDate: '12', expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
    { empName: 'Aman', submissionDate: '12', expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
    { empName: 'Aman', submissionDate: '12', expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
    { empName: 'Aman', submissionDate: '12', expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
    { empName: 'Aman', submissionDate: '12', expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
    { empName: 'Aman', submissionDate: '12', expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
    { empName: 'Aman', submissionDate: '12', expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
    { empName: 'Aman', submissionDate: '12', expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
    { empName: 'Aman', submissionDate: '12', expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
    { empName: 'Aman', submissionDate: '12', expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
    { empName: 'Aman', submissionDate: '12', expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
    { empName: 'Aman', submissionDate: '12', expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
    { empName: 'Aman', submissionDate: '12', expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
    { empName: 'Aman', submissionDate: '12', expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
    // Add more items here
  ];
  p: number = 1; // Current page number
}


