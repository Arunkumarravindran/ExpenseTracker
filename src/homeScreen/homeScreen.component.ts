import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homeScreen',
  templateUrl: './homeScreen.component.html',
  styleUrls: ['./homeScreen.component.css']
})
export class HomeScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['/login']);
  }
  signup(){
    this.router.navigate(['/login']);
  }
  dashboard(){
    this.router.navigate(['/dashboard']);
  }

}
