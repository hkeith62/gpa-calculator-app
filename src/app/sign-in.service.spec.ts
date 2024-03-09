 /*
============================================
; Title: sign-in service.spec.ts
; Author: Professor Krasso
; Date: 02/17/2022
; Modified By: Keith Hall
; Description: sign-in service spec.ts  for the gpa calculator app3.
;===========================================
*/
import { TestBed } from '@angular/core/testing';

import { SignInService } from './sign-in.service';

describe('SignInService', () => {
  let service: SignInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
