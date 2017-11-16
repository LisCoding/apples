import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from './../api.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newUser = {
    name: ""
  }
  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
  }

  //on login we like to redirect to dashboard and save the current User
login() {
  this._apiService.currentUser = this.newUser.name;
  console.log("This is currentUser", this._apiService.currentUser)
  this._router.navigate(["/dashboard"])
}
}
