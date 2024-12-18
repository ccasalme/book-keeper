const db = require('./database');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, function() {
  console.log(`App is listening on port ${port}`);
});

app.get('/books', (req, res) => {
  const rows = db.prepare('SELECT * FROM books').all();
  res.status(200).json({
    books: rows
  });
});

app.get('/books/:id', (req, res) => {
  const { id } = req.params;
  const book = db.prepare('SELECT * FROM books WHERE id = ?').get(id);
  
  res.status(200).json({
    book: book
  });
});

app.post('/books', (req, res) => {
  const { title, author, year } = req.body;

  const insert = db.prepare('INSERT INTO books (title, author, year) VALUES (?, ?, ?)');
  const result = insert.run(title, author, year);

  res.status(201).json({
    bookId: result.lastInsertRowid
  });
});