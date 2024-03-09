 /*
============================================
; Title: sign-in service.ts
; Author: Professor Krasso
; Date: 02/17/2022
; Modified By: Keith Hall
; Description: sign-in service logic gpa calculator app3.
;===========================================
*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  constructor() {

    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];

   }
   validate(studentId: number) {
     return this.studentIds.some(id => id === studentId);
   }
}
