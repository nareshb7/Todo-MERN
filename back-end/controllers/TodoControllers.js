const TodoModel = require('../models/TodoModel')

module.exports.getTodo = async (req,res)=> {
    const todo = await TodoModel.find({},{projection :{ text:0} }).then((data)=> res.send(data)).catch(err=> res.send(err))
}
module.exports.saveTodo = async (req,res)=> {
    const {text} = req.body
    await TodoModel.create({text})
    .then((data)=> res.send(data))
    .catch(err=> res.send(err))
}
module.exports.updateTodo = async (req,res)=> {
    const {id, text} = req.body
    await TodoModel.findByIdAndUpdate(id, {text})
    .then((data)=> res.send(data))
    .catch((err)=> res.send(err))
}
module.exports.deleteTodo = async (req,res)=> {
    const {id} = req.body
    await TodoModel.findByIdAndDelete(id)
    .then((data)=> res.send(data))
    .catch(err=> res.send(err))
}
module.exports.deleteAll = async (req,res)=> {
    await TodoModel.deleteMany({})
    .then(data => res.send(data))
    .catch(err => res.send(err))
}