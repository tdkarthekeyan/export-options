import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  login(val){
    console.log(val);
    if((val.UserName == "admin" && val.password == "admin") || (val.UserName == "aravi" && val.password == "aravi")){
    this.router.navigate(['driver']);
    } else {
      alert('Invalid credentials');
    }
  }
}
