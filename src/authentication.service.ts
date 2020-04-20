import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map,catchError, retry } from 'rxjs/operators';
 
import { User } from '../src/_model/user';
 
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    auth_Url = "http://localhost:5000/userDetails";
    
    constructor(private http: HttpClient) {

    }
 
    
    login(email: string, password:string) {
      console.log("inside service",email)
    return this.http.get<User>(this.auth_Url+'?'+'email='+email)
    .pipe(retry(2),
    catchError(this.handleError),map(response => {
      if (response[0].password == password){
        localStorage.setItem('currentUser', "true");
        localStorage.setItem('userName',response[0].name);
return true;
      }else{
        return false;
      }
     
  }));
    }
    
    logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userName');
   
    }

    register(user : User) {
      let params = new HttpParams();
        return this.http.post<User>(this.auth_Url,user);  
  }

  handleError(error: HttpErrorResponse) {
    console.log("Error Handling Works");
    return throwError(error);
  }

}