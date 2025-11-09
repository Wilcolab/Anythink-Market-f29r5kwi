const express = require('express');

const app = express();
const PORT = process.env.PORT || 8001;

app.use(express.json());

let nextId = 1;
const tasks = [];

// Create a task: POST /tasks  { "text": "New task" }
app.post('/tasks', (req, res) => {
  const { text } = req.body || {};
  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid "text" field' });
  }
  const task = { id: nextId++, text };
  tasks.push(task);
  return res.status(201).json(task);
});

// List tasks: GET /tasks
app.get('/tasks', (req, res) => {
  return res.json(tasks);
});

// Root health check
app.get('/', (req, res) => res.send('OK'));

app.listen(PORT, '0.0.0.0', () => {
  /* eslint-disable no-console */
  console.log(`JS Express server listening on http://0.0.0.0:${PORT}`);
});