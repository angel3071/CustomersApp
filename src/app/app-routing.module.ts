import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'entry', component: MainNavComponent},
    { path: 'meat', component: MainNavComponent},
    { path: 'fish', component: MainNavComponent},
    { path: 'drink', component: MainNavComponent},
    { path: 'dessert', component: MainNavComponent},
    { path: 'login', component: LoginComponent},
    { path: '', redirectTo: '/entry', pathMatch: 'full'}                                            
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
