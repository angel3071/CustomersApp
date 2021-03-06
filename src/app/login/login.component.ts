import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };


  constructor(private authService: AuthService, private router: Router) {

}
  ngOnInit() {

  }
  login(){
    this.router.navigate(['']);
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
    .then((res) => {
      console.log('entering the then');
      this.router.navigate(['entry']);
    })
    .catch((err) => console.log(err));
  }

  signInWithEmail() {

    this.authService.signInRegular(this.user.email, this.user.password)
      .then((res) => {
        console.log(res);
        this.router.navigate(['entry']);
      })
      .catch((err) => console.log('error: ' + err));
  }
  





}