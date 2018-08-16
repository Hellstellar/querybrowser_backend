const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors')
const mysql = require('mysql');
const seedDb = require('./seed_db')

con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mydb"
  });
  
  con.connect(err => {
    if (err) throw err;
    console.log("Connected!");
  });

  seedDb(con)

  app.use(cors());
  app.use(bodyParser.json())

  app.get('/', (req, res) => {
      res.json({ greeting: 'Hello there'})
  })

  app.post('/getdata', (req, res) => {
      const { query } = req.body;
      con.query(query, function (err, result) {
        if (err) throw err;
        res.json(result)
      });
  })

  app.listen(3050, console.log('Server started at 3050'));


 
