import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ViewStatementComponent}  from '../viewStatement/viewStatement.component';
import { ConfirmPopupComponent } from '../confirmPopup/confirmPopup.component';
import { AddIncomeComponent } from '../addIncome/addIncome.component';
import{ ExpenseTrackerService} from '../expenseTracker.service';
import {SetMonthyBudgetComponent} from '../setMonthyBudget/setMonthyBudget.component'
import { Chart } from 'chart.js';
import { AuthenticationService } from 'src/authentication.service';
import { Router } from '@angular/router';
import { UserIdleService } from 'angular-user-idle';
import { error } from 'util';
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
  count: number;
  themeColor: string = '#283333';
  color : string;
  userName : string;
  expensedates: string[];
  alldates =  [];
  percentage : number;
  remaining : number;
  constructor( public dialog: MatDialog, private etservice: ExpenseTrackerService,
    private router: Router,private userIdle:UserIdleService, private authenticationService :AuthenticationService) { }

  ngOnInit() {
    this.getStatement();
    this.getMonthlyBuget();
    this.timeDurations();
    this.badgeValue = 2;
    setInterval(()=>{
      this.badgeValue = Math.floor(1+ Math.random()*10);
    },30000);
  }

  getStatement(){
    this.userName = localStorage.getItem('userName');
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
          label:'pie',
          data:[this.foodValue,this.travelValue,this.shoppingValue,this.accommodationValue],
          backgroundColor:[
            'rgb(153,255,153)',
            'rgb(240,203,105)','rgb(102,179,255)','rgb(255,153,153)'
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
                    backgroundColor: ["rgb(153,255,153)"], 
                    fill: true
                  },
                  {  
                    label:'Debit',
                    data: this.debitValues,  
                    borderColor: 'red',  
                    backgroundColor: 'rgb(255,153,153)', 
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

  }

  getMonthlyBuget(){
      
    this.month = new Date().getMonth()+1;
    console.log("Month",this.month)
    this.etservice.getMonthlyBudget(this.month).subscribe(response=>{
    console.log("monthly buget",response.budget)
    this.monthlyBudget = response.budget
    this.percentage = Math.floor((this.debitValue/this.monthlyBudget)*100);
    console.log("Sac",this.percentage >= 50)
    if(this.percentage <= 50){
      console.log("Sac",this.percentage)
      this.color = "rgb(71,193,116)"
    }
    if(this.percentage >= 51 && this.percentage <= 80){
      this.color = "rgb(205,180,16)"
    }
    if(this.percentage >= 81){
      this.color = "rgb(176,37,37)"
    }

    this.creditPercentage = (this.creditValue/100000)*100;
    this.debitPercentage = (this.monthlyBudget/this.debitValue)*100;
       this.remaining = (100- this.percentage)
       console.log(this.percentage, "and",this.debitValue,"and",this.monthlyBudget, "and", this.remaining)
 
    }),
    (error)=>{
    alert(error);
    }
  }

  openStatement() {
    const dialogRef = this.dialog.open(ViewStatementComponent, {
      width: '60%',
     data: {data : this.statements}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getStatement();
    this.getMonthlyBuget();

    });
  }

  openBudget(): void {
    const dialogRef = this.dialog.open(SetMonthyBudgetComponent, {
      width: '17%',
   
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getStatement();
    this.getMonthlyBuget();

    });
  }

  openIncome(): void {
    const dialogRef = this.dialog.open(AddIncomeComponent, {
      width: '18%',
   
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getStatement();
    this.getMonthlyBuget();
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

  logOut(){
    const dialogRef = this.dialog.open(ConfirmPopupComponent, {
      width: '30%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
   
  }
  home(){
    this.router.navigate(['/welcome'])
  }
  
  getColor(){
    return this.color;
    
  }
  getTheme(data){
    
    if(data == null){
    return this.themeColor;
    }else{
      return data;
    }
  }
  toggle(){
    this.getTheme('white');
    this.getStatement();
    this.getMonthlyBuget();
this.ngOnInit();
  }
  
 timeDurations(){
   console.log("inside tine")
    this.userIdle.startWatching();
    this.userIdle.onTimerStart().subscribe(count => { this.count = count
      console.log("count"+count)
    });
    this.userIdle.onTimeout().subscribe(() => {
      this.authenticationService.logout();
      this.router.navigate(['/welcome'])
      console.log('Time is up!')
    });
    
 }
}

 