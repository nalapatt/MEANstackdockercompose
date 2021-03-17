 const angular = require("angular");
 const app  = angular();
 
 app.get("/", function(req, res){
     res.send("Hello from angular!");
 });

 app.listen(4200, function(){
     console.log("Projects in Docker API server started at");
 });
