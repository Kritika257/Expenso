import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-office-expense-management',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, FormsModule],
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

  approve(item: any) {
    // Handle approval logic here
    console.log('Approved:', item);
    item.approvalStatus = 'Approved';
  }

  reject(item: any) {
    // Handle rejection logic here
    console.log('Rejected:', item);
    item.approvalStatus = 'Rejected';
  }
}


