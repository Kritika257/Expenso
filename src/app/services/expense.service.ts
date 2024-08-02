import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor() { }

  // Mock data for Bar Chart
  getMonthlyExpenses(): Observable<any> {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        label: 'Amount Spent',
        data: [500, 600, 700, 800, 900, 1000],
        backgroundColor: 'rgba(63, 81, 181, 0.5)',
        borderColor: 'rgba(63, 81, 181, 1)',
        borderWidth: 1
      }]
    };
    return of(data).pipe(delay(1000)); // Mocking network delay
  }

  // Mock data for Donut Chart
  getExpenseCategories(): Observable<any> {
    const data = {
      labels: ['Rent', 'Utilities', 'Groceries', 'Entertainment'],
      datasets: [{
        data: [1000, 200, 300, 150],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
      }]
    };
    return of(data).pipe(delay(1000)); // Mocking network delay
  }
}

