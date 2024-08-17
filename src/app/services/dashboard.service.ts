import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiUrl = 'rest-url'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  // Simulate HTTP request and return dummy data
  
  getDashboardData(): Observable<any> {
  
    const dummyData = {
      data1: {
        labels: ["Travel", "Team Activities", "Professional Development", "Bills"],
        datasets: [{
          data: [1000, 200, 300, 150]
        }]
      },
      data2: {
        labels: ["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"],
        datasets: [
          {
            label: "Travel",
            data: [ 500,  950,  100, 150]
          },
          {
            label: "Team Activities",
            data: [ 210, 210,  210,  220]
          },
          {
            label: "Professional Development",
            data: [ 310, 320, 330, 320]
          },
          {
            label: "Bills",
            data: [ 170, 160, 170, 180]
          }
        ]
      },
   

    tableData: [
      { expenseType: 'Travel', amount: 1001, pendingApprovals: 3 },
      { expenseType: 'Team Activities', amount: 1002, pendingApprovals: 3 },
      { expenseType: 'Professional Development', amount: 1003, pendingApprovals: 6 },
      { expenseType: 'Bills', amount: 1004, pendingApprovals: 5 }
    ]
  };

    // Simulate HTTP delay and return dummy data
    return of(dummyData).pipe(delay(1000));
  }
  
}
