import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { OrdersService } from '../services/orders.service';
import { AngularFireList } from 'angularfire2/database';
import { Order } from '../models/order';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent implements OnInit{

  headerTitle: string;
  orders: Order[];
  HEADERS = {entry: 'Entradas', meat: 'Carnes', pizza: 'Pizzas', drink: 'Bebidas', dessert: 'Postres', checkout: 'Su cuenta'}; 
  route : string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router,
    private authService: AuthService, private orderService: OrdersService) {
      this.route = this.router.url.substring(1);
      this.headerTitle = this.HEADERS[this.route];

  }
  ngOnInit(): void {
    this.orderService.getNotifications(this.authService.getUserId())
    .snapshotChanges()
    .subscribe(item => {
      this.orders = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.orders.push(x as Order);
      });
    });
  }
  logout(){
    console.log('Logg out');
    this.authService.logout();
  }

}
