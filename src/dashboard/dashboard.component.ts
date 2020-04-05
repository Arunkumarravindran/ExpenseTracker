import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ViewStatementComponent}  from '../viewStatement/viewStatement.component';
import { AddExpenseComponent } from '../addExpense/addExpense.component';
import { AddIncomeComponent } from '../addIncome/addIncome.component';
import{ ExpenseTrackerService} from '../expenseTracker.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  creditValue : number;
  debitValue : number;
  amounts = [1,2,3,4,5];
  constructor( public dialog: MatDialog, private etservice: ExpenseTrackerService) { }

  ngOnInit() {
  this.etservice.getStatement().subscribe(response =>{
  this.creditValue = response.filter(it=> it.type == 'credit').map(m=>{return m.amount}).reduce((a,b)=> a+b ,0);
  this.debitValue = response.filter(it=> it.type == 'debit').map(m=>{return m.amount}).reduce((a,b)=> a+b ,0);
});
  }
  openStatement(): void {
    const dialogRef = this.dialog.open(ViewStatementComponent, {
      width: '50%',
      data: {name: "Hi", animal: "Arun"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  openBudget(): void {
    const dialogRef = this.dialog.open(ViewStatementComponent, {
      width: '50%',
      data: {name: "Hi", animal: "Arun"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  openIncome(): void {
    const dialogRef = this.dialog.open(AddIncomeComponent, {
      width: '20%',
      data: {name: "Hi", animal: "Arun"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  openExpense(): void {
    const dialogRef = this.dialog.open(AddExpenseComponent, {
      width: '20%',
      data: {name: "Hi", animal: "Arun"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }



}

