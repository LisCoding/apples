import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from './../api.service'
import { Question } from './../question'
import { Answer } from './../answer'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  currentUser = ""
  newQuestion = new Question();
  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
    this.currentUser = this._apiService.currentUser
  }

  cancel(){
    this._router.navigate(["/dashboard"])
  }
  createQuestion(question: Question){
    console.log("I was clicked")
    this._apiService.create(this.newQuestion)
    .then(status => this.newQuestion) // response from the back end -redefining the user array ojbects
    .catch(err=> console.log("something went wrong creating the Question!", err))
    this.newQuestion = new Question()
    this._router.navigate(["/dashboard"])
  }
}
