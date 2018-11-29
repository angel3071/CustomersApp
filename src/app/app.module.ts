import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, 
  MatListModule, MatProgressSpinnerModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { MenuItemsService } from './services/menu-items.service';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';                                                                         
import { AngularFireStorageModule } from 'angularfire2/storage';                                                                           
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuItemMoreInfoComponent } from './menu-item-more-info/menu-item-more-info.component';
import { MenuItemOrderComponent } from './menu-item-order/menu-item-order.component';  
import { OrdersService } from './services/orders.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MenuListComponent,
    MenuItemMoreInfoComponent,
    MenuItemOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  entryComponents: [
    MenuItemMoreInfoComponent,
    MenuItemOrderComponent
  ],
  providers: [MenuItemsService, OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
