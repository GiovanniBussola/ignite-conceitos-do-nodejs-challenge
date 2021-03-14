const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid')

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers

  const user = findUserByUsername(username)

  if (!user) {
    return response.status(404).json({ error: 'User not found' })
  }

  request.user = user;

  return next();
}

function findUserByUsername(username) {
  return users.find(user => user.username === username);
}

function findTodoByUserTodoId(user, todoId) {
  const todo = user.todos.find(todo => todo.id === todoId);

  return todo
}

app.post('/users', (request, response) => {
  const { name, username } = request.body;

  if (findUserByUsername(username)) {
    return response.status(400).json({ error: 'Username already exists' })
  }

  const user = {
    id: uuidv4(),
    name,
    username,
    todos: []
  };
  
  users.push(user);

  return response.status(201).json(user)
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  const { user } = request

  return response.json(user.todos)
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  const { title, deadline } = request.body
  const { user } = request

  const todo = {
    id: uuidv4(),
    title,
    deadline: new Date(deadline),
    done: false,
    created_at: new Date()
  }

  user.todos.push(todo)

  return response.status(201).json(todo)
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { id: todoId } = request.params
  const { user } = request

  const todo = findTodoByUserTodoId(user, todoId)

  if (!todo) {
    return response.status(404).json({ error: 'Todo not found' })
  }

  const { title, deadline } = request.body

  todo.title = title
  todo.deadline = new Date(deadline)

  return response.status(201).json(todo)
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  const { id: todoId } = request.params
  const { user } = request

  const todo = findTodoByUserTodoId(user, todoId)

  if (!todo) {
    return response.status(404).json({ error: 'Todo not found' })
  }

  todo.done = true

  return response.status(201).json(todo)
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { id: todoId } = request.params
  const { user } = request

  const todo = findTodoByUserTodoId(user, todoId)

  if (!todo) {
    return response.status(404).json({ error: 'Todo not found' })
  }

  user.todos = user.todos.filter(todo => todo.id !== todoId);

  return response.status(204).send()
});

module.exports = app;