const Database = require('better-sqlite3');
const db = new Database('/tmp/books.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS books (
    id NOT NULL INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    year INTEGER
  )
`);

db.exec(`
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      book_id INTEGER NOT NULL,
      content TEXT NOT NULL,
      FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE
    )
  `);

db.exec(`
  INSERT INTO books (title, author, year)
  VALUES
  ('Harry Potter', 'JK Rowling', 1990),
  ('Twilight', 'Stephanie Myer', 2003),
  ('50 Shades of Grey', 'EL James', 2009)
`);

db.exec(`
    INSERT INTO notes (book_id, content)
    VALUES
    (1, 'Harry Potter is a wizard.'),
    (2, 'Twilight is a vampire love story.'),
    (3, '50 Shades of Grey is a romantic novel.')
  `);