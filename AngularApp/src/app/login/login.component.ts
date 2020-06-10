import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: String = null;
  password: String = null;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(myfrom: NgForm) {
    if (this.email == 'admin@gmail.com' && this.password == '123') {
      this.router.navigate(['/landing']);
    }
  }

}
