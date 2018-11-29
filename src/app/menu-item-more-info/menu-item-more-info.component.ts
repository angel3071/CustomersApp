import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-menu-item-more-info',
  templateUrl: './menu-item-more-info.component.html',
  styleUrls: ['./menu-item-more-info.component.css']
})
export class MenuItemMoreInfoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    this.data = data;
  }

  ngOnInit() {
  }

}
