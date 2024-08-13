import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { ReportComponent } from './components/report/report.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { InventoryManagementComponent } from './components/inventory-management/inventory-management.component';
import { VendorManagementComponent } from './components/vendor-management/vendor-management.component';
import { OfficeExpenseManagementComponent } from './components/office-expense-management/office-expense-management.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login', 
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'expense',
        component: ExpenseComponent,
      },
      {
        path: 'report',
        component: ReportComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'admin-dashboard',
        component: AdminDashboardComponent,
      },
      {
        path: 'inventory-management',
        component: InventoryManagementComponent,
      },
      {
        path: 'vendor-management',
        component: VendorManagementComponent,
      },
      {
        path: 'office-expense',
        component: OfficeExpenseManagementComponent,
      }
    ],
  },
];
