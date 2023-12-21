CREATE TABLE `Questions` (
  `question_id` INT PRIMARY KEY,
  `question_text` VARCHAR(255),
  `question_choice_index` INT
);

CREATE TABLE `Choices` (
  `choice_id` INT PRIMARY KEY,
  `question_id` INT,
  `choice_text` VARCHAR(255)
);

CREATE TABLE `Users` (
  `user_id` INT PRIMARY KEY,
  `username` VARCHAR(255),
  `score` INT,
  `progress` INT
);

ALTER TABLE `Choices` ADD FOREIGN KEY (`question_id`) REFERENCES `Questions` (`question_id`);

ALTER TABLE `Choices` ADD FOREIGN KEY (`choice_id`) REFERENCES `Questions` (`question_id`);

CREATE TABLE `Users_Questions` (
  `Users_user_id` INT,
  `Questions_question_id` INT,
  PRIMARY KEY (`Users_user_id`, `Questions_question_id`)
);

ALTER TABLE `Users_Questions` ADD FOREIGN KEY (`Users_user_id`) REFERENCES `Users` (`user_id`);

ALTER TABLE `Users_Questions` ADD FOREIGN KEY (`Questions_question_id`) REFERENCES `Questions` (`question_id`);

