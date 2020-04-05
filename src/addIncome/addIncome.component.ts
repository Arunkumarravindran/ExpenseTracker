import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addIncome',
  templateUrl: './addIncome.component.html',
  styleUrls: ['./addIncome.component.css']
})
export class AddIncomeComponent implements OnInit {
  catagories: any[] = [
    {value: 'Deposit', viewValue: 'Deposit'},
    {value: 'Savings', viewValue: 'Savings'},
    {value: 'Salary', viewValue: 'Salary'}
  ];

  types: any[] = [
    {value: 'Credit', viewValue: 'Credit'},
    {value: 'Debit', viewValue: 'Debit'}
  ];
  constructor() { }

  ngOnInit() {
  }
  
}
