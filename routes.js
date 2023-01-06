const express = require('express');
const req = require('express/lib/request');
const router = express.Router();

const mongoType = require('mongoose').Types;

const Post = require('../Backend/Models/Post.js');


//routes Define here
//get All data from this API
router.get('/',(req, res)=>{
    Post.find((err,doc)=>{
        if(err){
            console.log('Error Occures While fetching Data' +err);
            res.status(400).send('Internal Error', err);
        }else{
            res.send(doc);
        }
    })
})
//Create new Post
router.post('/',(req, res)=>{
    let post = new Post({
        title: req.body.title,
        content: req.body.content,
        username: req.body.username
    })
    post.save((err, doc)=>{
        if(err){
            console.log('Internal Error:'+err);
            res.status(400).send('Internal Error:' +err)
        }else{
            res.send(doc)
        }
    })
})

//get Data by ID
router.get('/:id', (req, res)=>{
    if(mongoType.ObjectId.isValid(req.params.id)){
        Post.findById(req.params.id, (err, doc)=>{
            if(err){
                console.log('Internal Error:' +err);
                res.status(400).send('Internal error:'+err);
            }else{
                res.send(doc);
            }
        })
    }else{
        res.status(400).send('No record Found by this Id:',id)
    }
})

//delete Data by ID
router.delete('/:id', (req, res)=>{
    if(mongoType.ObjectId.isValid(req.params.id)){
        Post.findByIdAndRemove(req.params.id, (err, doc)=>{
            if(err){
                console.log('Internal Error:' +err);
                res.status(400).send('Internal error:'+err);
            }else{
                res.send(doc);
            }
        })
    }else{
        res.status(400).send('No record Found by this Id:',id)
    }
})


//update by id
router.put('/:id', (req, res)=>{
    let post ={
        title: req.body.title,
        content: req.body.content,
        username: req.body.username
    }

    if(mongoType.ObjectId.isValid(req.params.id)){
        Post.findByIdAndUpdate(req.params.id,{$set:post},{new:true}, (err, doc)=>{
            if(err){
                console.log('Internal Error:' +err);
                res.status(400).send('Internal error:'+err);
            }else{
                res.send(doc);
            }
        })
    }else{
        res.status(400).send('No record Found by this Id:',id)
    }
})

module.exports = router;