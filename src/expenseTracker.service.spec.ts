/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExpenseTrackerService } from './expenseTracker.service';

describe('Service: ExpenseTracker', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpenseTrackerService]
    });
  });

  it('should ...', inject([ExpenseTrackerService], (service: ExpenseTrackerService) => {
    expect(service).toBeTruthy();
  }));
});
