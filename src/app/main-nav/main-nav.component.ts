import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {
  headerTitle: string;
  HEADERS = {entry: 'Entradas', meat: 'Carnes', fish: 'Pescados', drink: 'Bebidas', dessert: 'Postres'}; 


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    console.log('Entering mainNav');
    this.headerTitle = this.HEADERS[this.router.url.substring(1)];
  }

}
