import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/authentication.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-confirmPopup',
  templateUrl: './confirmPopup.component.html',
  styleUrls: ['./confirmPopup.component.css']
})
export class ConfirmPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmPopupComponent>,private router: Router,private authenticationService : AuthenticationService) { }

  ngOnInit() {
  }

  logOut(){
      this.authenticationService.logout();
     this.router.navigate(['/welcome'])
     this.dialogRef.close();
  }

  close(){
this.dialogRef.close();
  }

}
