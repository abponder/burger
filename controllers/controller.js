var express = require("express");
var orm = require("../config/orm")
var router = express.Router();


router.get ("/", function(req,res){
   orm.selectAll(function(data){
    res.render("index",{burgers:data})
  });
});

router.post ("/add", function(req,res){
  var name = req.body.name
  orm.insertOne(name, function(data){
    res.send("works")
  });
});

router.put("/update", function(req,res){

  

});





// Export routes for server.js to use.
module.exports = router;
