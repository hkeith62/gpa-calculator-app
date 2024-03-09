 /*
============================================
; Title: sign-in guard.spec.ts
; Author: Professor Krasso
; Date: 02/17/2022
; Modified By: Keith Hall
; Description: Sign-in guard.spec.ts for the gpa calculator app3.
;===========================================
*/
import { TestBed } from '@angular/core/testing';

import { SignInGuard } from './sign-in.guard';

describe('SignInGuard', () => {
  let guard: SignInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SignInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
