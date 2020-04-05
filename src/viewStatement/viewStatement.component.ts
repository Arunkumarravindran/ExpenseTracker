import { Component, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import{ ExpenseTrackerService} from '../expenseTracker.service'
@Component({
  selector: 'app-viewStatement',
  templateUrl: './viewStatement.component.html',
  styleUrls: ['./viewStatement.component.css']
})
export class ViewStatementComponent implements OnInit {
  displayedColumns: string[] = ['no', 'date', 'catagory', 'type', 'description', 'amount'];
   statementList : object;
  
  constructor( private etservice: ExpenseTrackerService) { }

  ngOnInit() {
this.etservice.getStatement().subscribe(response =>{
  this.statementList = response;
})

  }
 
  
 
  
}
