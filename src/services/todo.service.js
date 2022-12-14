const TodoModel = require("../models/todo.model");
const TodoService = {};

TodoService.getAllTodos = async () => {
  return await TodoModel.find({})
}

TodoService.getDetailTodo = async (req) => {
  return await TodoModel.findOne({id: req.params.id})
}

module.exports = TodoService;