import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addExpense',
  templateUrl: './addExpense.component.html',
  styleUrls: ['./addExpense.component.css']
})
export class AddExpenseComponent implements OnInit {
  catagories: any[] = [
    {value: 'Food', viewValue: 'Food'},
    {value: 'Travel', viewValue: 'Travel'},
    {value: 'Accommodation', viewValue: 'Accommodation'},
    {value: 'Shopping', viewValue: 'Shopping'}
  ];

  types: any[] = [
    {value: 'Credit', viewValue: 'Credit'},
    {value: 'Debit', viewValue: 'Debit'}
  ];
  constructor() { }

  ngOnInit() {
  }
 
}
