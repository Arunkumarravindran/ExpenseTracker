import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, from } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';


interface Statements {
                date: string,
                catagory: string,
                type: string,
                notes: string,
                amount: number
}
interface MonthlyBudget {
 id:number,
 budget:number
}


interface ItemsResponse {
  shows: Array<Statements>;
}

@Injectable({
  providedIn: 'root'
})
export class ExpenseTrackerService {

  statementUrl = "http://localhost:5000/expenseTable"
  monthlyBudgetUrl = "http://localhost:5000/monthlyBuget"
constructor(private http: HttpClient) { }

getStatement() : Observable<Statements[]> {
  return this.http
      .get<Statements[]>(this.statementUrl).pipe(retry(2),
      catchError(this.handleError)
      , map(responseBody => { 
          return responseBody;
        }));
      
}
addBudget( e : Statements){
return this.http.post<Statements>(this.statementUrl,e).pipe(retry(2),
catchError(this.handleError)
, map(responseBody => { 
    return "success";
  }));
}

getMonthlyBudget(monthId): Observable<MonthlyBudget>{
  return this.http.get<MonthlyBudget>(this.monthlyBudgetUrl+'/'+monthId).pipe(retry(2),
  catchError(this.handleError)
  , map(responseBody => { 
      return responseBody;
    }));
  
}
setMonthlyBudget(data){
  console.log("inside update",data)
  return this.http.patch(this.monthlyBudgetUrl +"/"+ data.id, data).pipe(retry(2),
  catchError(this.handleError)
  , map(responseBody => { 
    console.log("updated")
      return "Success";
    }));
  
}

handleError(error: HttpErrorResponse) {
  console.log("Error Handling Works");
  return throwError(error);
  }
}
