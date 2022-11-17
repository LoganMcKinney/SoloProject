const Chores = require('../models/chores.model')

const addChore = (req,res) => {
    Chores.create(req.body)
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.status(400).json(err)
    })
}

const allChores = (req,res) => {
    Chores.find()
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.status(400).json(err)
    })
}

const findById = (req,res) => {
    Chores.findOne({_id:req.params.id})
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.status(400).json(err)
    })
}

const updateById = (req,res) => {
    Chores.updateOne({_id:req.params.id}, req.body,{new:true,runValidators:true})
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.status(400).json(err)
    })
}

const deleteById = (req,res) => {
    Chores.remove({_id:req.params.id})
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.status(400).json(err)
    })
}

module.exports = {
    addChore,
    allChores,
    findById,
    updateById,
    deleteById
}