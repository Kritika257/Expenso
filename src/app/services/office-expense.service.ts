import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfficeExpenseService {

  constructor() { }

  getExpenses(): Observable<any[]> {
    const data = [
      { empName: 'Aman', submissionDate: new Date('2023-08-16'), expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
      { empName: 'Aman', submissionDate: new Date('2023-08-16'), expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
      { empName: 'Aman', submissionDate: new Date('2023-08-16'), expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
      { empName: 'Aman', submissionDate: new Date('2023-08-16'), expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
      { empName: 'Aman', submissionDate: new Date('2023-08-16'), expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
      { empName: 'Aman', submissionDate: new Date('2023-08-16'), expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
      { empName: 'Aman', submissionDate: new Date('2023-08-16'), expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
      { empName: 'Aman', submissionDate: new Date('2023-08-16'), expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
      { empName: 'Aman', submissionDate: new Date('2023-08-16'), expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
      { empName: 'Aman', submissionDate: new Date('2023-08-16'), expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
      { empName: 'Aman', submissionDate: new Date('2023-08-16'), expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
      { empName: 'Aman', submissionDate: new Date('2023-08-16'), expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
      { empName: 'Aman', submissionDate: new Date('2023-08-16'), expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
      { empName: 'Aman', submissionDate: new Date('2023-08-16'), expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
      { empName: 'Aman', submissionDate: new Date('2023-08-16'), expenseType: 'Bills', amount: 45, receipt: 'No Receipt', approvalStatus: 'Pending', comments: 'Will approve' },
      
      // Add more items here
    ];
    return of(data);
  }
}
