import { Component,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';



@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [FormsModule, CommonModule,  TypeaheadModule ,ReactiveFormsModule],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent {
  public asyncSelected!: string; // Use definite assignment assertion
  public typeaheadLoading: boolean = false; // Provide an initial value
  public typeaheadNoResults: boolean = false; // Provide an initial value
  public dataSource: Array<string> = ['Admin', 'Manager', 'Kritika'];

  public changeTypeaheadLoading(e: boolean): void {
    this.typeaheadLoading = e;
  }

  public changeTypeaheadNoResults(e: boolean): void {
    this.typeaheadNoResults = e;
  }

  

  public defaultDate: string;

  constructor() {
    const today = new Date();
    this.defaultDate = today.toISOString().substring(0, 10);
  }
  
}

