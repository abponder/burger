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
    updateOne:function(id,cb){
      console.log("what")
      connection.query("UPDATE burgers SET devoured = true WHERE ?",[{id:id}], function(error, results){
        //console.log(error)
        //console.log(results)
        cb(results)
      })

    }


}

// Export the orm object.
module.exports = orm;
