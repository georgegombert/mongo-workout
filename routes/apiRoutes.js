// var db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    db.Image.find({}).then(function(dbImages) {
      res.json(dbImages);
    });
  });

  app.put("/api/workouts", function(req, res) {
    db.Image.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function(dbImage) {
      res.json(dbImage);
    });
  });

  app.post("/api/workouts/:id", function(req, res) {
    db.Image.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function(dbImage) {
      res.json(dbImage);
    });
  });

  app.get("/api/workouts/range", function(req, res) {
    db.Image.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function(dbImage) {
      res.json(dbImage);
    });
  });
};
