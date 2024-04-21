 /*
============================================
; Title: gpa.component.ts
; Author: Professor Krasso
; Date: 02/08/2022
; Modified By: Keith Hall
; Description: component.ts file for the gpa component.
;===========================================
*/
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number;

  constructor() {
    this.gpaTotal = 0.0;
  }

  ngOnInit(): void {
  }

}
