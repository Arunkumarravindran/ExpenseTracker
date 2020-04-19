
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AuthenticationService } from '../authentication.service';
import { User } from 'src/_model/user';
import { LoginFailureComponent } from 'src/loginFailure/loginFailure.component';
@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
registerForm: FormGroup;
loading = false;
submitted = false;
returnUrl: string;
password:string;
resp: User;
 
constructor(
private formBuilder: FormBuilder,
private route: ActivatedRoute,
private router: Router,
private authenticationService : AuthenticationService,
private _snackBar: MatSnackBar
) { }
 
ngOnInit() {
this.loginForm = this.formBuilder.group({

email: ['', Validators.required],
password: ['', Validators.required]
});

this.registerForm = this.formBuilder.group({

    email: ['', Validators.required],
    name: ['', Validators.required],
    password: ['', Validators.required]
    });
 
}

 

get fval() { return this.loginForm.controls; }
get fval1() { return this.registerForm.controls; }
 
login() {
    
this.loading = true;
this.password  = this.fval.password.value;
this.authenticationService.login(this.fval.email.value,this.fval.password.value)
.subscribe(
data => {
    console.log("responses",data)
    if (data) {
        this.router.navigate(['/']);
         }else{
         console.log("login failed")
         this._snackBar.openFromComponent(LoginFailureComponent, {
            duration: 5 * 1000,
          });
         this.loading = false;
        }
});
}
register() {
    
    this.loading = true;
    this.authenticationService.register(this.registerForm.value)
    .subscribe(
    data => {
        console.log("data",data)
        // if(data){
        alert('User Registered successfully!!');
        this.router.navigate(['/login']);
        // }else{
        // alert('User already Registered, Please login!!');
        // }
    });
    }
}