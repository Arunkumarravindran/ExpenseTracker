import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, from } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';


interface ItemsResponseObj {
  id: number,
                date: string,
                catagory: string,
                type: string,
                notes: string,
                amount: number
}

interface ItemsResponse {
  shows: Array<ItemsResponseObj>;
}

@Injectable({
  providedIn: 'root'
})
export class ExpenseTrackerService {

  statementUrl = "http://localhost:5000/expenseTable"
constructor(private http: HttpClient) { }

getStatement() : Observable<ItemsResponseObj[]> {
  return this.http
      .get<ItemsResponseObj[]>(this.statementUrl);
      
}

}
