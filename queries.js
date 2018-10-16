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
         return db.one(`INSERT INTO users (password, email, first, last, description, location, goal1, goal2, goal3) values    
         ('` + newUser.password + `', '` + newUser.email + `', '` + newUser.first + `', '` + newUser.last + `', '` + newUser.description + `', '` + newUser.location + `', '` + newUser.goal1 + `', '` + newUser.goal2 + `', '` + newUser.goal3+ `')
            RETURNING *;`);  
    },
    UserLogin: function (email, password) {
        return db.one(`select email, password, id
        FROM users
        WHERE email = '` + email + `'
        AND password = '` + password + `';`)
    },
    ListUserByID: function (id) {
        return db.one(`SELECT *
            FROM users
            WHERE id = '` + id + `';`);
    },
    storeGoalbyUser: function(body) {
        return db.one(`INSERT INTO goals (userid, goal) values
        ('` + body.id + `', '` + body.goal + `')
        RETURNING *;`)
    },
    getGoalsbyUser: function(id) {
        return db.query(`SELECT *
        FROM goals
        WHERE userid = '` + id + `';`);
    }
  };
