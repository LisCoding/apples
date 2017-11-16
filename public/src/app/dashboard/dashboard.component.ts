import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from './../api.service'
import { Question } from './../question'
import { Answer } from './../answer'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser = "";
  questions :Array<Question> = []
  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
      this.currentUser = this._apiService.currentUser
      this.getQuestions()
  }

  getQuestions(){
    console.log("Im in get question")
    this._apiService.getQuestions()
    .then(questions => this.questions = questions) // redefining the user array ojbects
    .catch(err=> console.log("something went wrong when we were getting question!", err))

  }


}
