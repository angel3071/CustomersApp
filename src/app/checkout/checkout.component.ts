import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { OrdersService } from '../services/orders.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  orders: Order[];
  showSpinner: boolean = true;
  displayedColumns: string[] = ['plate', 'cost'];

  constructor(private authService: AuthService, private orderService: OrdersService) { }

  ngOnInit() {
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
    this.showSpinner = false;
  }
  getTotalCost() {
    return this.orders.map(t => t.platePrice).reduce((acc, value) => acc + value, 0);
  }

}
