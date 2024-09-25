const Todo = require("../model/todo");
const todoUtils = require("../utils/todos");
const { completeTodo } = require("./admin");

exports.getIndex = (req, res) => {
    Todo.findAll().then((todos) => {
        res.render('index', {
            pageTitle: "کارهای روزمره",
            todos,
            completedTodos: 10,
            remainingTodos: 10
        })
    })
};
