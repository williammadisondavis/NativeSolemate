const express = require('express');
const dbq = require('./queries.js')
const cors = require('cors');
const jwt = require('jsonwebtoken');
const server = express();
const STORAGE_KEY = 'id_token';
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
server.use(cors());
server.use(jsonParser)

let generateToken = (username, id) => {
    let token = jwt.sign(
        {name: username,
        userid: id},
        STORAGE_KEY,
        {expiresIn: '7d'})
        return token;
    }

    //this will be used on signin
let createProfileToken = (email, pword) => {
    console.log('here')
    let password = pword;
    let useremail = email;

    return dbq.UserLogin(useremail, password)
        .then(results => {
            console.log(results);
            if (results.password === password && results.email === useremail) {
                console.log("im here");
                return generateToken(results.email, results.id)
            } else {
                throw 'invalid credentials';
            }
        })
    };

let newUser = (req, res) => {
    let newUserEmail = req.body.email;
    let userEmailTaken = {response: "Username Taken"};
    console.log('madeit')
    
    dbq.ValidateUser(newUserEmail)
        .then(results => {
            if(results === undefined || results.length == 0) {
                
                console.log(req.body)
                dbq.RegisterUser(req.body)
                    .then(results => {
                        console.log(results.email, results.password)
                        
                        createProfileToken(
                            req.body.email, req.body.password)
                            .then(token => {
                                let newObj = {
                                    data: results,
                                    jwt: token
                                    
                                };
                                console.log(newObj)
                                res.send(newObj);
                            }).catch(error=>{console.log(error)})
                    })
            } else {
                res.set('Content-Type', 'application/json')
                res.send(JSON.stringify(userEmailTaken));
            }
        })
        .catch(error=>console.log(error))
}

let testDb = (req, res) => {
    console.log(req.body.username)
    dbq.ValidateUser(req.body.username)
    .then(results=>console.log(results))
    .catch(error=>console.log(error))
    // console.log(req)
    res.send('hello')
}

server.post('/db', testDb)
// server.post('/login', generateToken);
// server.post('/checktoken', validateToken);
server.post('/register', newUser);
server.listen(3005);

let validateToken = (req, res) => {
    let responseObject = {
                        response: null,
                        payload: null
                        };
    let token = req.body.webtoken
    let isValid;
    let payload;
    try {
        let decoded = jwt.verify(token, STORAGE_KEY, {"alg": "HS256", "typ": "JWT"});
        isValid = true;
        req.user = decoded.payload;
        responseObject.payload = payload;
    } catch (err) {
        isValid = false;
    }
    //creates a new property for the request object, called user
    if (isValid) {
        responseObject.response = "Logged in";
        res.send(responseObject);
    } else {
        responseObject.response = "Invalid login";
        res.send(responseObject);
    }
}


