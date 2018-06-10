// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    selectAll:function(cb){
      connection.query("SELECT * FROM burgers", function(error, results){
          cb(results)
      })

    },
    insertOne:function(name,cb){
      console.log(name)
      connection.query("INSERT INTO burgers (name) VALUES (?)",[name], function(error,results){
        //console.log(error)
        //console.log(results)
        cb(results)
      })
    },
    updateOne:function(aaa,cb){
      console.log("what")
      connection.query("", function(error, results){
        //console.log(error)
        //console.log(results)
        cb(results)
      })

    }


}

// Export the orm object.
module.exports = orm;
