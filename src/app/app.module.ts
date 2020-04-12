import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
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
import {MatNativeDateModule,DateAdapter} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule }   from '@angular/forms';
import { DatePipe } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatSortModule} from '@angular/material/sort';
import { ChartsModule } from 'ng2-charts';
import {MatBadgeModule} from '@angular/material/badge';
import { SetMonthyBudgetComponent } from '../setMonthyBudget/setMonthyBudget.component';
@NgModule({
   declarations: [
      AppComponent,
      DashboardComponent,
      ViewStatementComponent,
      AddExpenseComponent,
      AddIncomeComponent,
      SetMonthyBudgetComponent
   ],
   entryComponents: [
      ViewStatementComponent,
      AddExpenseComponent,
      AddIncomeComponent,
      SetMonthyBudgetComponent
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      MatSortModule,
      FormsModule,
      MatBadgeModule,
      ChartsModule,
      MatFormFieldModule,
      MatSelectModule,
      MatDatepickerModule,
      AppRoutingModule,
      MatNativeDateModule,
      BrowserAnimationsModule,
      MatInputModule,
      MatPaginatorModule,
      MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatButtonModule,
      MatDialogModule,
      MatTableModule,
      HttpClientModule,
      MatDatepickerModule
   ],
   providers: [
      DatePipe
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule  {

}
