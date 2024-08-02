import { Component} from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';
import { Chart, registerables} from 'chart.js';
Chart.register(...registerables)



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BaseChartDirective ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  {

      data2: ChartData<'bar'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Travel',
        data: [100, 950, 500, 105, 450, 950, 260, 560, 100, 950, 105, 150],
        backgroundColor: '#10c4b5'
      },
      {
        label: 'Team Activities',
        data: [200, 220, 210, 230, 220, 210, 220, 230, 210, 220, 230, 220],
        backgroundColor: '#005562'
      },
      {
        label: 'Professional Development',
        data: [300, 320, 310, 330, 320, 310, 320, 330, 310, 320, 330, 320],
        backgroundColor: '#0e8174'
      },
      {
        label: 'Bills',
        data: [150, 160, 170, 180, 170, 160, 170, 180, 170, 160, 170, 180],
        backgroundColor: '#6eba8c'
      }
    ]
  };

  chartOptions2: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true
      }
    },
    plugins: {
      legend: {
        display: true
      }
    },
    layout: {
      padding: 10
    }
  };

      

      data1: ChartData<'doughnut'> = {
        labels: ['Travel', 'Team Activities', 'Professional Development', 'Bills'],
        datasets: [{
          data: [1000, 200, 300, 150],
          backgroundColor: ['#10c4b5','#005562','#0e8174','#6eba8c'],
          borderColor: ['#0e8174', '#10c4b5', '#6eba8c', '#005562'],
          borderWidth: 1
        }]
      };
        chartOptions1: ChartOptions<'doughnut'> = {
          cutout: '50%',  // Inner size as percentage
          layout: {
            padding: 10
        },
      }
  }

