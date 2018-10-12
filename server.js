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

let createProfileToken = (email, pword) => {
    let password = pword;
    let useremail = email;

    return dbq.UserLogin(useremail, password)
        .then(results => {
            if (results.password === password && results.email === useremail) {
                return generateToken(results.email, results.id)
            } else {
                throw 'invalid credentials';
            }
        })
        .catch(error=>{console.log(error)});
    };

let generateTokenHelper = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    return createProfileToken(email, password)
    .then(token => {
        if (token === undefined) {
            res.send({error: 'error'})
        } else {
        res.send({token})
        }
    })
}

let newUser = (req, res) => {
    let newUserEmail = req.body.email;
    let userEmailTaken = {response: "Username Taken"};
    
    dbq.ValidateUser(newUserEmail)
        .then(results => {
            if(results === undefined || results.length == 0) {
                
                // console.log(req.body)
                dbq.RegisterUser(req.body)
                    .then(results => {
                        // console.log(results.email, results.password)
                        
                        createProfileToken(
                            req.body.email, req.body.password)
                            .then(token => {
                                let newObj = {
                                    data: results,
                                    jwt: token
                                    
                                };
                                console.log(newObj)
                                res.send(newObj);
                            }).catch(error=>{return(error)})
                    })
            } else {
                res.set('Content-Type', 'application/json')
                res.send(JSON.stringify(userEmailTaken));
            }
        })
        .catch(error=>{return (error)})
}


server.post('/login', generateTokenHelper);
server.post('/register', newUser);
server.listen(3005);