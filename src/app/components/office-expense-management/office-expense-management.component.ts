import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';



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

  constructor() {}

  approve(data: any) {
    // Send email via EmailJS
    emailjs.send("service_1rl00md", "template_rkr0sph", {
      emp_name: data.empName,
      submission_date: data.submissionDate,
      expense_type: data.expenseType,
      amount: data.amount,
      receipt: data.receipt,
      comments: data.comments,
    }, "sLQgz1t8GTy1GCl20").then((response: EmailJSResponseStatus) => {
      console.log('Email sent successfully', response.status, response.text);
      data.approvalStatus = 'Approved';
    }, (error) => {
      console.error('Failed to send email', error);
    });
  }

  reject(data: any) {
    // Handle reject logic
    console.log('Rejected:', data);
    data.approvalStatus = 'Rejected';
  }
}

 /* approve(item: any) {
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
  */


