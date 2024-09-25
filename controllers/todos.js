const Todo = require("../model/todo");
const todoUtils = require("../utils/todos");
const { completeTodo } = require("./admin");

exports.getIndex = (req, res) => {
    Todo.count({ where: { IsDone: true } }).then(completedTodos => {
        Todo.findAll().then((todos) => {
            res.render('index', {
                pageTitle: "کارهای روزمره",
                todos,
                completedTodos,
                remainingTodos: todos.length - completedTodos,
            });
        });
    });
};
