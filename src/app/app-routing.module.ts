import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LoginComponent } from './login/login.component';
import { MainNavWrapperListComponent } from './main-nav-wrapper-list/main-nav-wrapper-list.component';
import { MainNavWrapperCheckoutComponent } from './main-nav-wrapper-checkout/main-nav-wrapper-checkout.component';

const routes: Routes = [
    { path: 'entry', component: MainNavWrapperListComponent},
    { path: 'meat', component: MainNavWrapperListComponent},
    { path: 'pizza', component: MainNavWrapperListComponent},
    { path: 'drink', component: MainNavWrapperListComponent},
    { path: 'dessert', component: MainNavWrapperListComponent},
    { path: 'checkout', component: MainNavWrapperCheckoutComponent},
    { path: 'login', component: LoginComponent},
    { path: '', redirectTo: '/entry', pathMatch: 'full'}                                            
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
