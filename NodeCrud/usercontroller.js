const connection = require("./config");
const express = require("express");
const Employee = require("./employee");
const app = express();

app.use(express.json());
connection.connect((err) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log("connected");
  }
});
//Get all Employee Data
app.get("/", (request, response) => {
  connection.query("select * from employee", (error, result) => {
    response.send(result);
  });
});

//Get employee by id
app.get("/:id", (request, response) => {
  connection.query(
    "select * from employee where empid=" + request.params.id,
    (error, result) => {
      response.send(result);
    }
  );
});

//Add employee
app.post("/addemployee", (request, response) => {
  const data = request.body;
  const c = Object.assign(new Employee(), data);
  console.log(c);
  connection.query(
    "insert into employee  set ? ",
    c,
    (error, result, fields) => {
      if (error) error, data;
      response.send("Data Inserted " + result);
    }
  );
});

//Update employee By ID
app.put("/updateemployee/:id", (request, response) => {
  const data = request.body;
  connection.query(
    "update employee set ? where empid=" + request.params.id,
    data,
    (error, result, fields) => {
      if (error) throw error;
      response.send(result);
    }
  );
});

//delete employee by id
app.delete("/deleteemployee/:id", (request, response) => {
  connection.query(
    "delete from employee where empid=" + request.params.id,
    (error, result) => {
      if (error) throw error;
      response.send(result);
    }
  );
});
app.listen(5000, () => console.log("the application running on port 5000"));
