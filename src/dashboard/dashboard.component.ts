import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ViewStatementComponent}  from '../viewStatement/viewStatement.component';
import { AddExpenseComponent } from '../addExpense/addExpense.component';
import { AddIncomeComponent } from '../addIncome/addIncome.component';
import{ ExpenseTrackerService} from '../expenseTracker.service';
import {SetMonthyBudgetComponent} from '../setMonthyBudget/setMonthyBudget.component'
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  creditValue : number;
  debitValue : number;
  creditValues : number[];
  debitValues : number[];
  foodValue : number;
  month : number;
  badgeValue: number;
  shoppingValue : number;
  travelValue : number;
  monthlyBudget : number;
  creditPercentage : number;
  debitPercentage : number;
  accommodationValue : number;
  statements : any[];
  chartCard: boolean;
  detailsCard = true;
  chart;
  lineChart;
  expensedates: string[];
  alldates =  [];
  percentage : number;
  remaining : number;
  constructor( public dialog: MatDialog, private etservice: ExpenseTrackerService) { }

  ngOnInit() {
    this.badgeValue = 2;
    setInterval(()=>{
      this.badgeValue = Math.floor(1+ Math.random()*10);
    },30000);
  this.etservice.getStatement().subscribe(response =>{
    this.statements = response;
  this.creditValue = response.filter(it=> it.type == 'Income').map(m=>{return m.amount}).reduce((a,b)=> a+b ,0);
  this.debitValue = response.filter(it=> it.type == 'Expense').map(m=>{return m.amount}).reduce((a,b)=> a+b ,0);
  this.foodValue = response.filter(it=> it.catagory == 'Food').map(m=>{return m.amount}).reduce((a,b)=> a+b ,0);
  this.travelValue = response.filter(it=> it.catagory == 'Travel').map(m=>{return m.amount}).reduce((a,b)=> a+b ,0);
  this.shoppingValue = response.filter(it=> it.catagory == 'Shopping').map(m=>{return m.amount}).reduce((a,b)=> a+b ,0);
  this.accommodationValue = response.filter(it=> it.catagory == 'Accommodation').map(m=>{return m.amount}).reduce((a,b)=> a+b ,0);
  this.expensedates = response.map(m=>{return m.date}).sort();

  this.creditValues = response.filter(it=> it.type == 'Income').map(m=>{return m.amount});
  this.debitValues = response.filter(it=> it.type == 'Expense').map(m=>{return m.amount});

  this.chart= new Chart('pieChart',{
type:'pie',
data:{
  labels:["Food","Travel","Shopping","Accommodation"],
  datasets:[{
    label:'jjjbkj',
    data:[this.foodValue,this.travelValue,this.shoppingValue,this.accommodationValue],
    backgroundColor:[
      'blue',
      'red','yellow','pink'
    ],

  }]
},
options:{
  title:{
    text:"Transactions",
    display:true
  }
}
})

  this.lineChart = new Chart('lineChart', {  
        type: 'line',  
        data: {  
          labels: this.expensedates,
          datasets: [  
            {  
              label:'Credit',
              data: this.creditValues,  
              borderColor: 'green',  
              backgroundColor: ["green"], 
              fill: true
            },
            {  
              label:'Debit',
              data: this.debitValues,  
              borderColor: 'red',  
              backgroundColor: 'red', 
              fill: true
            }    
          ]  
        },  
        options: {  
          legend: {  
            display: false  
          },  
          scales: {  
            xAxes: [{  
              display: true
              
            }],  
            yAxes: [{  
              display: true  
            }],  
          }  
        }  
      });   
});
      this.month = new Date().getMonth()+1;
      console.log("Month",this.month)
      this.etservice.getMonthlyBudget(this.month).subscribe(response=>{
      console.log("monthly buget",response.budget)
      this.monthlyBudget = response.budget
      //this.percentage = (this.debitValue/this.monthlyBudget)*100;
      this.percentage = 81;
      this.creditPercentage = (this.creditValue/100000)*100;
      this.debitPercentage = (this.debitValue/this.monthlyBudget)*100;
         this.remaining = (100- this.percentage)
         console.log(this.percentage, "and",this.debitValue,"and",this.monthlyBudget, "and", this.remaining)
   
      })


  }
  openStatement() {
    const dialogRef = this.dialog.open(ViewStatementComponent, {
      width: '60%',
     data: {data : this.statements}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  openBudget(): void {
    const dialogRef = this.dialog.open(SetMonthyBudgetComponent, {
      width: '15%',
   
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  openIncome(): void {
    const dialogRef = this.dialog.open(AddIncomeComponent, {
      width: '16%',
   
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  openExpense(): void {
    const dialogRef = this.dialog.open(AddExpenseComponent, {
      width: '20%',
   
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  chartDetails(){
    this.chartCard = true;
  this.detailsCard = false;
  }

  detailsChart(){
    this.chartCard = false;
    this.detailsCard = true;
  }
  badgeValueZero(){
    this.badgeValue = 0;
  }
 
}

 