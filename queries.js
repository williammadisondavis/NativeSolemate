var pgp = require('pg-promise')(/*options*/);

var cn = {
    host: 'localhost', 
    port: 5432,
    database: 'solemate',
    user: 'wills'
};

var db = pgp(cn);

module.exports = {
    ValidateUser: function (email) {
        return db.query(`select email
        FROM users
        WHERE email = '` + email + `';`);
    },
    RegisterUser: function (newUser) {
         return db.one(`INSERT INTO users (password, email, first, last) values    
         ('` + newUser.password + `', '` + newUser.email + `', '` + newUser.first + `', '` + newUser.last + `')
            RETURNING *;`);  
    },
    UserLogin: function (email, password) {
        return db.one(`select email, password, id
        FROM users
        WHERE email = '` + email + `'
        AND password = '` + password + `';`)
    }
  };
