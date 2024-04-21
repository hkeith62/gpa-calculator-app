 /*
============================================
; Title: base-layout.component.ts
; Author: Professor Krasso
; Date: 02/06/2022
; Modified By: Keith Hall
; Description: component.ts file for the base-layout component of the gpa calculator3.
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

 
  constructor(private cookieService: CookieService, private router: Router) {
  }

  ngOnInit(): void {
  }
  signOut() {

    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }

}
