 /*
============================================
; Title: grade-summary.component.ts
; Author: Professor Krasso
; Date: 02/08/2022
; Modified By: Keith Hall
; Description: component.ts for grade-summary component.
;===========================================
*/
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  @Input() grade: string;
  @Input() course: string;


  constructor() {
    this.grade = 'Grade';
    this.course = 'Course';

  }

  ngOnInit(): void {
  }
}
