import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {

  menuItemList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }


  getMenuItems(){
    return this.menuItemList = this.firebase.list('plates');
  }

}
