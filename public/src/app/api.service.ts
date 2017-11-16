import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from './question'
import { Answer } from './answer'
import "rxjs";

@Injectable()
export class ApiService {
  //save current user
  currentUser: string = ""

  constructor( private _http: Http) { }

  //****CRUD OPERATIONS*******
//create A Question
  create(question: Question) {
    return this._http.post("/questions", question )
    .map(data => data.json()) // converting to json
    .toPromise() // making a promise that will get something
  }

  //create An Answer
    createAnswer(answer: Answer) {
      console.log("we are in create")
      return this._http.post("/answers", answer )
      .map(data => data.json()) // converting to json
      .toPromise() // making a promise that will get something
    }
//get all the Questions
  getQuestions(){
    return this._http.get("/questions")
    .map(data => data.json()) // converting to json
    .toPromise() // making a promise that will get something
  }


//update Question
  update(question: Question) {
    return this._http.put("/questions/" + question._id, question)
    .map(data => data.json()) // converting to json
    .toPromise() // making a promise that will get something
  }

//Show deatils of one Question
  show_question(question: Question){
    console.log("Iam in service", question)
    return this._http.get("/questions/" + question)
    .map(data => data.json()) // converting to json
    .toPromise() // making a promise that will get something
  }

  getAnswers(question: Question){
    console.log("Iam in service gettin Anss", question)
    return this._http.get("/answers/" + question)
    .map(data => data.json()) // converting to json
    .toPromise() // making a promise that will get something
  }



}
