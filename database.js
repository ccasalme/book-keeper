const Database = require('better-sqlite3');
const db = new Database('/tmp/books.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    year INTEGER
  )
`);

db.exec(`
  INSERT INTO books (title, author, year)
  VALUES
  ('Harry Potter', 'JK Rowling', 1990),
  ('Twilight', 'Stephanie Myer', 2003),
  ('50 Shades of Grey', 'EL James', 2009)
`);
