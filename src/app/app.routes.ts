import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { ReportComponent } from './components/report/report.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { UsermanagementComponent } from './admin/usermanagement/usermanagement.component';
import { AppReportsComponent } from './admin/app-reports/app-reports.component';
import { AppOverviewComponent } from './admin/app-overview/app-overview.component';


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
        path: 'analytics',
        component: AnalyticsComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'admin/user-management',
        component: UsermanagementComponent,
      },
      {
        path: 'app-reports',
        component: AppReportsComponent,
      },
      {
        path: 'app-overview',
        component: AppOverviewComponent,
      }
    ],
  },
];
