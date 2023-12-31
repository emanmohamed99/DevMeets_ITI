var jwt = require('jsonwebtoken');
const userAuth= require("../Models/userAuthModel");

const requireAuth = (req, res, next)=>{
 var Token = req.cookies.jwt //grab token from cookies

 if(!Token) {
  // res.redirect('/login') //if token doesnt exist redirect to login

 }
jwt.verify(Token, "thisissecret", (err, decodedToken) =>{
if(err){
console.log(err)
}
else{

 next()
}
 })
 }

 const checkUser = async (req, res, next)=>{
 var Token = req.cookies.jwt

 if(Token){
  jwt.verify(Token, "secrettoken", async (err, decodedToken) =>{
if(err){
 console.log(err.message)
 next()
}
else{
  let User = await userAuth.findById(decodedToken.UserId).exec(); //grab User from DB
  res.locals.user=User //send it to client as user
 next()
}
 })
 }
 else{
  res.locals.user=null
  next();
 }
 }

 module.exports = {requireAuth, checkUser}