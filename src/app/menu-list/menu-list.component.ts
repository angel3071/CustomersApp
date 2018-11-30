import { Component, OnInit } from '@angular/core';
import { Plate } from '../models/plate';
import { MenuItemsService } from '../services/menu-items.service';
import { MatDialog } from '@angular/material';
import { MenuItemMoreInfoComponent } from '../menu-item-more-info/menu-item-more-info.component';
import { MenuItemOrderComponent } from '../menu-item-order/menu-item-order.component';
import { OrdersService } from '../services/orders.service';
import { Order } from '../models/order';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  data: Plate[];
  comment: string;
  showSpinner: boolean = true;
  category: string;

  constructor(private menuItemsService: MenuItemsService, 
    private orderService: OrdersService, private dialog: MatDialog, 
    private router: Router, private authService: AuthService) { 
      this.category = this.router.url.substring(1);
    }

  ngOnInit() {
    //console.log('Entering ngOnInit ' + this.data.length);
    console.log('Actual route ' + this.router.url);
    console.log('Logged user: ' + this.authService.getUserId());
    this.menuItemsService.getMenuItems(this.category)
    .snapshotChanges()
    .subscribe(item => {
      this.data = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.data.push(x as Plate);
      });
      this.showSpinner = false;
    })

  }
  getDisplayName(){ return ''; }
  getUserId(){ return ''; }

  openDialogMoreInfo(plate: Plate) {
    const dialogRef = this.dialog.open(MenuItemMoreInfoComponent,
      {
        data: {
          header: plate.name,
          paragraph: plate.desc
      },
      });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result){
        console.log(`Plate ordered: ${plate.name}`);
        this.orderService.insertOrder({
          customerName: this.authService.getDisplayName(),
          customerId: this.authService.getUserId(),
          plate: plate.$key,                                                                                                 
          plateImage: plate.image,                                                                                            
          orderNumber: 100,                                                                                          
          dateTime: new Date().toString(),                                                                                              
          status: 'ordered',                                                                                               
          comments: '',
          platePrice: plate.price,
          plateName: plate.name
        } as Order);
      } 
      
    });
  }
  openDialogOrder(plate: Plate){
    const dialogRef = this.dialog.open(MenuItemOrderComponent,
      {
        data: {
          header: plate.name,
          paragraph: 'Desea ordenar este platillo?',
          comment: this.comment
      }
      });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result} ${this.comment}`);
      this.comment = result;
      if(result!=false){
        console.log(`Plate ordered: ${plate.name}`);
        this.orderService.insertOrder({
          customerName: this.authService.getDisplayName(),
          customerId: this.authService.getUserId(),
          plate: plate.$key,                                                                                                 
          plateImage: plate.image,                                                                                            
          orderNumber: 100,                                                                                          
          dateTime: new Date().toString(),                                                                                              
          status: 'ordered',                                                                                               
          comments: this.comment,
          platePrice: plate.price,
          plateName: plate.name
        } as Order);
      } 
      
    });

  }


}
