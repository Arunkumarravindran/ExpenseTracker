import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import{ ExpenseTrackerService} from '../expenseTracker.service';
import * as jsPDF from 'jspdf'
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

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
  displayedColumns: string[] = ['no', 'date', 'catagory', 'type', 'description', 'amount','delete']; 
   totalRows: string;
   statementList : Statements[];
   pdfmake: any;
   dataSource = new MatTableDataSource<Statements>([]);
   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
   @ViewChild(MatSort,{static: true}) sort: MatSort;
   @ViewChild('content', {static: false}) content: ElementRef;
  constructor( private etservice: ExpenseTrackerService) { }

  ngOnInit() {
   
this.getStatement();
  }
  getStatement(){
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
 
  download(){
    console.log("inside download")
    const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' }
    pdfMake.createPdf(documentDefinition).open();
    const doc = new jsPDF();
  }
  downloadPDF(content) {
    const doc = new jsPDF();



    doc.fromHTML(content.innerHTML, 15, 15, {
      width: 190,
      'elementHandlers': this.dataSource
    });

    doc.save('statement.pdf');
  }

  delete(id){
    console.log("inside delete method")
this.etservice.delete(id).subscribe(data=>{
if(data){
  this.getStatement();
}
})
}
  }
  

