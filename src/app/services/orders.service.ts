import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Order } from '../models/order';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  orderList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getOrderList(){
    return this.orderList = this.firebase.list('orders');
  }

  insertOrder(order: Order){
    this.firebase.list('orders').push(order);
  }
  getNotifications(customerId: string){
    return this.orderList = this.firebase.list('orders', ref =>
    ref.orderByChild('customerId').equalTo(customerId));
  }
}
