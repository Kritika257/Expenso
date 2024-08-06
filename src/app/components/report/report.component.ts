import { Component,  OnInit  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent implements OnInit {
    expenseForm: FormGroup;
    expenseTypes = ['Travel', 'Team Activities','Professional Development','Bills'];
    approveStatuses = ['Pending', 'Manager', 'Approved', 'Rejected'];
    receiptName: string | null = null;
  
    constructor(private fb: FormBuilder, private router: Router) {
      this.expenseForm = this.fb.group({
        expenseType: [{ value: '' }],
        amount: [{ value: '' }],
        approveStatus: [{ value: '' }]
      });
    }
    // , disabled: true
  
    ngOnInit(): void {
      // Initialize form with default values if necessary
      this.expenseForm.patchValue({
        expenseType: this.expenseTypes[0],
        amount: '100',
        approveStatus: this.approveStatuses[0]
      });
    }
  
    onFileChange(event: any): void {
      const file = event.target.files[0];
      if (file) {
        this.receiptName = file.name;
      }
    }
  
    editExpense(): void {
      // Navigate to another component, e.g., an edit page
      this.router.navigate(['/expense']);
    }
  
    deleteExpense(): void {
      // Implement delete functionality
      console.log('Delete expense');
    }
  }

