import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import{ ExpenseTrackerService} from '../expenseTracker.service'

interface Statements {
  date: string,
  catagory: string,
  type: string,
  notes: string,
  amount: number
}

@Component({
  selector: 'app-viewStatement',
  templateUrl: './viewStatement.component.html',
  styleUrls: ['./viewStatement.component.css']
})
export class ViewStatementComponent implements OnInit {
  displayedColumns: string[] = ['no', 'date', 'catagory', 'type', 'description', 'amount']; 
   totalRows: string;
   statementList : Statements[];
   dataSource = new MatTableDataSource<Statements>([]);
   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
   @ViewChild(MatSort,{static: true}) sort: MatSort;
 
  constructor( private etservice: ExpenseTrackerService) { }

  ngOnInit() {
   
this.etservice.getStatement().subscribe(response =>{
  this.dataSource.data = response;
  this.statementList = response;
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  
  
})

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
 
  
 
  
}
