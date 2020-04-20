import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ExpenseTrackerService} from '../expenseTracker.service'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-addIncome',
  templateUrl: './addIncome.component.html',
  styleUrls: ['./addIncome.component.css']
})
export class AddIncomeComponent implements OnInit {
  incomeCatagories: any[] = [
    {value: 'Deposit', viewValue: 'Deposit'},
    {value: 'Savings', viewValue: 'Savings'},
    {value: 'Salary', viewValue: 'Salary'}
  ];

  expenseCatagories: any[] = [
    {value: 'Food', viewValue: 'Food'},
    {value: 'Travel', viewValue: 'Travel'},
    {value: 'Accommodation', viewValue: 'Accommodation'},
    {value: 'Shopping', viewValue: 'Shopping'}
  ];

  types: any[] = [
    {value: 'Expense', viewValue: 'Expense'},
    {value: 'Income', viewValue: 'Income'}
  
  ];

  expenseForm : FormGroup;
  optionValue :  string;
  constructor(private formBuilder: FormBuilder, 
    public dialogRef: MatDialogRef<AddIncomeComponent>,
    private etservice : ExpenseTrackerService,
    private datePipe: DatePipe
    ) { }

  ngOnInit() {

    this.expenseForm = new FormGroup({
      date: new FormControl('', [
        Validators.required
      ]),
      type: new FormControl('', [
        Validators.required
      ]),
      catagory: new FormControl('', [
        Validators.required
      ]),
      amount: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(7)
      ]),
      notes: new FormControl('', [
        Validators.required,
      ]),
    });
    console.log("form values", this.optionValue)
  }

  
  onSubmit(){
    console.log("form values")

    let json = {
      date : this.datePipe.transform(this.expenseForm.value.date, 'MM/dd/yyyy'),
      type: this.expenseForm.value.type,
      catagory: this.expenseForm.value.catagory,
      notes: this.expenseForm.value.notes,
      amount: this.expenseForm.value.amount
    }
    this.etservice.addBudget(json).subscribe((response=>
      {
        if(response == 'success'){
          this.dialogRef.close( );
        }
      }))
   
  }
}
