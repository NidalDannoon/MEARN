const express = require("express");
const faker = require('faker');
const app = express();
// req is short for request
// res is short for response

class User {
    constructor() {
        this._id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
const newUser = new User();
console.log(newUser);

class Address{
  constructor(){
    this.street = faker.address.streetAddress();
    this.city = faker.address.city();
    this.state = faker.address.state();
    this.zipCode = faker.address.zipCode();
    this.country = faker.address.country();
  }
}
const newAddress = new Address();

class Company {
  constructor() {
      this._id = faker.random.number();
      this.name= faker.company.companyName();
      this.address = newAddress;
  }
}
const newCompany = new Company();
console.log(newCompany);


app.get("/api/:users/:new", (req, res) => {
  if(req.params.users === "users"){
    res.send(`User First Name: ${newUser.firstName}; User Last Name: ${newUser.lastName}`);
  }
  if(req.params.users === "companies"){
    res.send(`Company name: ${newCompany.name}`);
  }
  if(req.params.users === "user" && req.params.new === "company"){
    res.send(`User First Name: ${newUser.firstName}; Company name: ${newCompany.name}`);
  }
  });
  const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
  );