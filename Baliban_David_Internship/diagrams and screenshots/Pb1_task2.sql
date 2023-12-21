CREATE TABLE `Book` (
  `book_id` INT PRIMARY KEY,
  `title` VARCHAR(255),
  `author` VARCHAR(255),
  `isbn` VARCHAR(50),
  `quantity` INT
);

CREATE TABLE `Patron` (
  `patron_id` INT PRIMARY KEY,
  `name` VARCHAR(255),
  `id` VARCHAR(50),
  `contact_info` VARCHAR(255),
  `max_books` INT,
  `fines` DECIMAL(10, 2)
);

CREATE TABLE `Borrowing` (
  `borrowing_id` INT PRIMARY KEY,
  `book_id` INT,
  `patron_id` INT,
  `borrow_date` DATE,
  `due_date` DATE,
  `return_date` DATE,
  `fine_rate` DECIMAL(10, 2)
);

ALTER TABLE `Borrowing` ADD FOREIGN KEY (`borrowing_id`) REFERENCES `Book` (`book_id`);

ALTER TABLE `Borrowing` ADD FOREIGN KEY (`borrowing_id`) REFERENCES `Patron` (`patron_id`);

CREATE TABLE `Book_Patron` (
  `Book_book_id` INT,
  `Patron_patron_id` INT,
  PRIMARY KEY (`Book_book_id`, `Patron_patron_id`)
);

ALTER TABLE `Book_Patron` ADD FOREIGN KEY (`Book_book_id`) REFERENCES `Book` (`book_id`);

ALTER TABLE `Book_Patron` ADD FOREIGN KEY (`Patron_patron_id`) REFERENCES `Patron` (`patron_id`);

