const sqlite3 = require('sqlite3').verbose();
const DB_SOURCE = "../../conclude.db";
const bcrypt = require('bcryptjs');

// open database in memory
let db = new sqlite3.Database(DB_SOURCE, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
  if (err) {
    return console.error(err.message);
  } else {
    console.log('Connected to the conclude database.');
    db.run('CREATE TABLE webform ( \
      id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \
      idNum NVARCHAR(13), \
      name NVARCHAR(20), \
      surname NVARCHAR(20), \
      email NVARCHAR(20), \
      address1 NVARCHAR(20), \
      address2 NVARCHAR(20), \
      city NVARCHAR(20), \
      province NVARCHAR(20), \
      country NVARCHAR(20), \
      postal NVARCHAR(20), \
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP \
      )', (err) => {
      if (err) {
        console.log('webform table already exists')
      } else {
        let sql = 'INSERT INTO webform (idNum, name, surname, email, address1, address2, city, province, country, postal, created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?)'
        db.run(sql, ['1234567890123', 'John', 'Doe', 'john@gmail.com', '123 avenue', 'Melville', 'Johannesburg', 'Gauteng', 'South Africa', '2092', '2020/12/05'])
      }

    });
    db.run(`CREATE TABLE appusers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name text, 
      email text UNIQUE, 
      password text,
      CONSTRAINT email_unique UNIQUE (email)
    )`,
      (err) => {
        if (err) {
          console.log('appusers table already exists')
        } else {
          var insert = 'INSERT INTO appusers (name, email, password) VALUES (?,?,?)'
          db.run(insert, ["admin","admin@example.com",bcrypt.hashSync("password")])
        } 
      });
  }
});


// close the database connection
// db.close((err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });

module.exports = db;