import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-menu-item-order',
  templateUrl: './menu-item-order.component.html',
  styleUrls: ['./menu-item-order.component.css']
})
export class MenuItemOrderComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.data = data;
   }

  ngOnInit() {
  }

}
