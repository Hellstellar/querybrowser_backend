const faker = require('faker');

module.exports = (con) => {
    let sql = "DELETE FROM customers";

    con.query(sql, (err, result) => {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });

    const fakeUsers = [];

    for(let i = 0; i < 25; i++)
      fakeUsers.push([
        faker.name.findName(),
        faker.random.number(80),
        faker.internet.email(),
        'no'
      ]);

    sql = "INSERT INTO customers (name, age, email, premium_plan) VALUES ?"

    con.query(sql, [fakeUsers], (err, result) => {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
}