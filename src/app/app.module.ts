import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
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
import { HomeScreenComponent } from '../homeScreen/homeScreen.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import {MatTabsModule} from '@angular/material/tabs';
import {ConfirmPopupComponent} from '../confirmPopup/confirmPopup.component'
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginFailureComponent } from 'src/loginFailure/loginFailure.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { UserIdleModule } from 'angular-user-idle';
import { HttpInterceptorService } from 'src/_helper/httpInterceptor';
import { ExpenseTrackerService } from 'src/expenseTracker.service';
@NgModule({
   declarations: [
      AppComponent,
      DashboardComponent,
      ViewStatementComponent,
      AddIncomeComponent,
      SetMonthyBudgetComponent,
      HomeScreenComponent,
      LoginComponent,
      RegisterComponent,
      ConfirmPopupComponent,
      LoginFailureComponent
   ],
   entryComponents: [
      ViewStatementComponent,
      AddIncomeComponent,
      SetMonthyBudgetComponent,
      ConfirmPopupComponent,
      LoginFailureComponent
   ],
   imports: [
      BrowserModule,
      MatTabsModule,
      MatSlideToggleModule,
      MatTooltipModule,
      ReactiveFormsModule,
      MatGridListModule,
      MatSortModule,
      MatSnackBarModule,
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
      MatDatepickerModule,
      UserIdleModule.forRoot({idle: 20, timeout: 20, ping: 10})
   ],
   providers: [
      DatePipe,ExpenseTrackerService,{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule  {

}
