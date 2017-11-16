import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from './../api.service';
import { Question } from './../question'
import { Answer } from './../answer';
import { ActivatedRoute } from '@angular/router'; // to get the id of the url

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  currentUser = ""
  currentQuestion = new Question();
  newAnswer = new Answer();
  questionID = {};
  constructor(private _apiService: ApiService, private _router: Router, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe( params => {
         this.questionID = params.get('id');
    })
  }


    ngOnInit() {
      this.getQuestionInfo(this.questionID)
    }

    getQuestionInfo(question){
      this._apiService.show_question(question)
      .then(question => {this.currentQuestion = question}) // redefining the user array ojbects
      .catch(err=> console.log("something went wrong when we were getting the Questuion!", err))

    }

  cancel(){
    this._router.navigate(["/dashboard"])
  }
  createAnswer(){
    this.newAnswer._question = this.questionID
    this.newAnswer.author = this._apiService.currentUser

    this._apiService.createAnswer(this.newAnswer)
    .then(status => this.newAnswer) // response from the back end
    .catch(err=> console.log("something went wrong creating the Answer!", err))
    this._router.navigate(["/dashboard"])

  }
}
