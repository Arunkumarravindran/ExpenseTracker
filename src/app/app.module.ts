import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import { DashboardComponent } from '../dashboard/dashboard.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ViewStatementComponent } from '../viewStatement/viewStatement.component';
import {MatTableModule} from '@angular/material/table';
import { AddExpenseComponent } from '../addExpense/addExpense.component';
import { AddIncomeComponent } from '../addIncome/addIncome.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
   declarations: [
      AppComponent,
      DashboardComponent,
      ViewStatementComponent,
      AddExpenseComponent,
      AddIncomeComponent
   ],
   entryComponents: [
      ViewStatementComponent,
      AddExpenseComponent,
      AddIncomeComponent
   ],
   imports: [
      BrowserModule,
      MatFormFieldModule,
      MatSelectModule,
      MatDatepickerModule,
      AppRoutingModule,
      MatNativeDateModule,
      BrowserAnimationsModule,
      MatInputModule,
      MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatButtonModule,
      MatDialogModule,
      MatTableModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
