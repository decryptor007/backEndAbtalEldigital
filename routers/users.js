const express = require('express');
const router = express.Router();
const models = require('../models');
const User=models.users;
const {checkToken}=require('../utils/auth.js');
console.log(checkToken);
// on routes that end in /users
router
  .route('/users')
    // find all users
    .get((req,res) => {
      User.findAll().then(users => {
        res.json(users)
      })
    })
    // create a new user
    .post((req,res) => {
      let body = req.body
      User.create(body).then(user => {
        res.json(user)
      })
      .catch((e) => res.json(e.message))
    })



//delete a user
router
  .route('/users/:userid')
    .delete((req,res) => {
      User.destroy({
        where: {id: req.params.userid}
        //include: [Post]
      })
      .then(result => {
        res.json("deletedd")
      })
    })


//update a user 

router
  .route('/users')
    .put((req,res)=>{
     User.update({
      username:req.body.username },
      {
      where:{
        id:req.body.id
      }
    })
    .then(()=>res.send("updated"))
  });

module.exports = router

