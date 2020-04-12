import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ExpenseTrackerService} from '../expenseTracker.service'
@Component({
  selector: 'app-setMonthyBudget',
  templateUrl: './setMonthyBudget.component.html',
  styleUrls: ['./setMonthyBudget.component.css']
})
export class SetMonthyBudgetComponent implements OnInit {
  budgetForm : FormGroup;
  month : number;
  constructor(private formBuilder: FormBuilder, 
    public dialogRef: MatDialogRef<SetMonthyBudgetComponent>,
    private etservice : ExpenseTrackerService) { }

  ngOnInit() {
    this.budgetForm = new FormGroup({
      amount: new FormControl('', [
        Validators.required
      ])
  })
  }
onSubmit(){
  this.month = new Date().getMonth()+1;
  let json = {
    id: this.month ,
    budget: this.budgetForm.value.amount
  }
  this.etservice.setMonthlyBudget(json).subscribe(res=>{
    if(res = "Success"){
      this.dialogRef.close();
    }
  })
}
}
