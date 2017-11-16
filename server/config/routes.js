let questions = require('../controllers/questions.js')
var path = require('path');

module.exports = function(app) {
  //**** 2. create routes ********

  //get all the questions info
  app.get('/questions', function(req,res) {
    console.log("GET request Route")
    questions.showAll(req,res)
  });


  //create questions
  app.post('/questions', function (req, res){
    console.log("POST Request Route")
    questions.createQuestion(req,res)
  });
  //create Answer
  app.post('/answers', function (req, res){
    console.log("POST Anse Request ")
    questions.createAnswer(req,res)
  });


  // show one specific note info
  app.get('/questions/:id', function(req, res) {
    console.log("Getting one es[pe] ")
    questions.showQuestion(req, res)
  });

  // show one specific note info
  app.get('/answers/:id', function(req, res) {
    console.log("Getting one Anserr")
    questions.showAnswers(req, res)
  });

  //Delete a question
  app.delete('/questions/:id', function(req, res) {
    console.log("DELETE Request Route")
    questions.deleteQuestion(req, res)
  });

  //Update a question!!!
  app.put('/questions/:id', function(req, res) {
    console.log(" from routes ID", req.params.id);
    questions.updateQuestion(req, res)
  });


  // if none of these do not match we go to Angular routes
  app.all("*", (req,res,next) => {
      res.sendFile(path.resolve("./public/dist/index.html"))
  });

}
