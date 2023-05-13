module.exports = (req, resp, next) =>{
    if(!req.query.age){
        resp.send("Please provide your age")
       }
       else if(req.query.age<=18){
        resp.send("you are under aged");
       }
       else if(req.query.age>=18){
        resp.send("you are eligible for voting");
       }
       else {
        next();
       }
    }
