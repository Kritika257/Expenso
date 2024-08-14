import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdmindashboardService {

  private apiUrl = 'rest-url'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  // Simulate HTTP request and return dummy data
  getLineChartData(): Observable<any> {
    const mockData = {
      labels: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct', 'Nov', 'Dec'
      ],
      datasets: [
        {
          data: [65, 59, 80, 81, 56, 55, 40, 60, 43, 24,34, 12],
          label: 'Monthly Expenses', // Corrected to be a string
        }
      ]
    };
    return of(mockData);
}
getPieChartData(): Observable<any> {
  const mockPieData = {
    labels: ["Travel", "Team Activities", "Professional Development", "Bills"],
    datasets: [
      {
        data: [300, 500, 100, 600],
        backgroundColor: ["#0e8174", "#10c4b5", "#6eba8c", "#005562"] // Example colors
      }
    ]
  };

  return of(mockPieData); //delay of 1 second
}

  getEmployeeData(): Observable<any[]> {
    const mockEmployeeData = [
      { employeeName: 'John Doe', submissionDate: '2024-07-01', amount: 1200, status: 'Approved' },
      { employeeName: 'Jane Smith', submissionDate: '2024-07-10', amount: 800, status: 'Pending' },
      { employeeName: 'Alice Johnson', submissionDate: '2024-07-15', amount: 1500, status: 'Approved' },
      { employeeName: 'Bob Brown', submissionDate: '2024-07-20', amount: 700, status: 'Rejected' }
    ];
    return of(mockEmployeeData); // Simulates a delay of 1 second
  }
}


