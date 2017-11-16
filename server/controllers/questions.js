var mongoose = require('mongoose');
var Question = mongoose.model('Question'); // change this
var Answer = mongoose.model('Answer'); // change this

module.exports = {

//**********GET All data!!!
  showAll: function(req, res) {
    Question.find({}, function (err, questions) {
      if(err){
        console.log("did not get data",err);
      }else {
        console.log("got data");
        return res.json(questions); //passing to the client
      }
    })
  },

  //**********Create Data!!!

  createQuestion: function (req, res){
    console.log("we create a Question", req.body);
    // I changed this line
    delete req.body._id // passing data from the form
     Question.create(req.body, function(err, question) {
         if(err) {
             console.log('something went wrong we can not create a Question ');
             console.log(err.errors);
         } else {
             console.log('successfully added a Question!', question);
             return res.json(question) //response to the client
         }
     })
  },

  //**********Create Answer!!

  createAnswer: function (req, res){
    delete req.body._id
    var answer = new Answer(req.body);
      answer.save(function (err, answer) {
          if(err) {
            console.log("We fail to create a answer", err)
              return res.json(err);
          }
          console.log("we create it a ass succefully")
          res.json(answer)

      })
  },
  //**********Showw one data!!!
  showQuestion: function(req, res) {
      console.log("are we here")
    Question.findOne({_id: req.params.id}, function (err, question) { //id is build object into the req object
      if(err){
        console.log("something went wrong controller", err);
      }else {
        return res.json(question);
      }
    })
  },

  //**********delete one data!!!
  deleteQuestion: function(req, res) {
    console.log("are we here DElete")
    Question.remove({_id: req.params.id}, function (err, question) {
      if(err){
        console.log(err);
      }else {
        console.log('successfully deleted a Question!');
        return res.json(true)
      }
    })
  },

  //**********Showw one data!!!
  showAnswers: function(req, res) {
      console.log("are we here Ansers")
    Answer.find({_question: req.params.id}, function (err, answer) { //id is build object into the req object
      if(err){
        console.log("something went wrong controller", err);
      }else {
        return res.json(answer);
      }
    })
  },


//*********Update one data
  updateQuestion: function(req, res) {
    console.log("POST DATA", req.body);
    console.log("ID", req.params.id);

    Question.update({_id:req.params.id}, req.body, function(err, question) {
      if(err) {
          console.log('something went wrong we can not update');
          console.log(err.errors);
          res.send(err.errors);
      } else {
          console.log('successfully updated a Question!');
          return res.json(true)
      }
    })
  }

}
