const Todo = require("../models/Todo");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTodo = async (req, res) => {
  try {
    const { title, priority, dueDate } = req.body;

    const todo = await Todo.create({ 
      title,
      priority,
      dueDate,
      user: req.user._id,
     });

    res.status(201).json(todo);
  } catch (error) {
    console.log(error);

    res.status(500).json({ 
      message: error.message,
    });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { title, priority, dueDate, completed } =
      req.body;

    const todo = await Todo.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    todo.title =
      title || todo.title;

    todo.priority =
      priority || todo.priority;

    todo.dueDate =
      dueDate || todo.dueDate;

    if (
      completed !== undefined
    ) {
      todo.completed = completed;
    }

    const updatedTodo =
      await todo.save();

    res.status(200).json(
      updatedTodo
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteTodo = async (req, res) => {
  try {
    await todo.findOneDelete({
      _id: req.params.id,
      user: req.user._id,
    })

    res.status(200).json({ message: "Todo deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};