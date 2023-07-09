const { faker } = require('@faker-js/faker');
const fs = require("fs");
const jsonServer = require("json-server");

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const generateData = (count) => {
  const data = [];

  for(let i = 1; i <= count; i++) {
    data.push({
      id: i,
      name: faker.person.fullName(),
      jobTitle: faker.person.jobType(),
      tenure: faker.number.int(20).toString(),
      gender: capitalize(faker.person.sex())
    })
  }

  return data;
}

fs.writeFileSync(
  "./db.json",
  JSON.stringify({ employees: generateData(parseInt(process.env.DATA_COUNT || '20', 10)) })
);

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use(router);

server.listen(3000, () => {
  console.log("Server is running");
});
