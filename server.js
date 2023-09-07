const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
  

// User function
const createUser = () => {
  return (newUser = {
      password: faker.internet.password(),
      Email: faker.internet.email(),
      phoneNumber: faker.phone.imei(),
      lastName: faker.person.lastName(),
      firstName: faker.person.firstName(),
      _id: faker.string.uuid()
  });
};

// Company function *********

const createCompany = () => {
  return (newCompany = {
    _id: faker.string.uuid(),
    Company: faker.company.name(),
    Address: {
      Street:
      faker.location.street(),
      City:
      faker.location.city(),
      State:
      faker.location.state(),
      ZipCode:
      faker.location.zipCode(),
      Country:
      faker.location.country(),
    }
  });
};

// GET***********************

app.get("/api/users/new", (req, res) => {
  res.json( createUser() );
});

app.get("/api/companies/new", (req, res) => {
  res.json( createCompany() );
});

app.get("/api/user/company", (req, res) => {
  res.json( [createUser(), createCompany()]);
});


// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));