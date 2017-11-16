import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from './../api.service'
import { Question } from './../question'
import { Answer } from './../answer'
import { ActivatedRoute } from '@angular/router'; // to get the id of the url
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  currentQuestion = new Question();
  updatedQuestion = new Question();
  answers: Array<Answer> = []
  questionID = {};

  constructor(private _apiService: ApiService, private _router: Router, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe( params => {
         console.log(params.get('id'));
         this.questionID = params.get('id');
         console.log("this is pollID", this.questionID)
    })

  }

  ngOnInit() {
    this.getQuestionInfo(this.questionID)
    this.getAnswers(this.questionID)
  }

  getQuestionInfo(question){
    console.log("we are getting one que info")
    console.log("this is the param", question)
    this._apiService.show_question(question)
    .then(question => this.currentQuestion = question) // redefining the user array ojbects
    .catch(err=> console.log("something went wrong when we were getting the Questuion!", err))

  }

  getAnswers(question){
    console.log("we are getting one ansers info")
    console.log("this is the param", question)
    this._apiService.getAnswers(question)
    .then(answers => this.answers= answers) // redefining the user array ojbects
    .catch(err=> console.log("something went wrong when we were getting the Answers!", err))
  }
}
