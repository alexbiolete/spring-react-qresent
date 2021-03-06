CREATE SCHEMA `qresent`;

CREATE TABLE `qresent`.`admin` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE);

CREATE TABLE `qresent`.`student` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `password_UNIQUE` (`password` ASC) VISIBLE);

CREATE TABLE `qresent`.`teacher` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `password_UNIQUE` (`password` ASC) VISIBLE);

CREATE TABLE `qresent`.`subject` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE);

CREATE TABLE `qresent`.`course` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `subject_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_course_subject_idx` (`subject_id` ASC) VISIBLE,
  CONSTRAINT `fk_course_subject`
    FOREIGN KEY (`subject_id`)
    REFERENCES `qresent`.`subject` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


ALTER TABLE `qresent`.`student`
DROP INDEX `password_UNIQUE` ,
DROP INDEX `name_UNIQUE` ;

ALTER TABLE `qresent`.`teacher`
DROP INDEX `password_UNIQUE` ,
DROP INDEX `name_UNIQUE` ;

ALTER TABLE `qresent`.`course`
ADD UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE;

CREATE TABLE `qresent`.`attendance` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `course_id` INT NOT NULL,
  `student_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_attendance_course_idx` (`course_id` ASC) VISIBLE,
  INDEX `fk_attendance_student_idx` (`student_id` ASC) VISIBLE,
  CONSTRAINT `fk_attendance_course`
    FOREIGN KEY (`course_id`)
    REFERENCES `qresent`.`course` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_attendance_student`
    FOREIGN KEY (`student_id`)
    REFERENCES `qresent`.`student` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

CREATE TABLE `qresent`.`subject_teacher` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `subject_id` INT NOT NULL,
  `teacher_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_subject_teacher1_idx` (`subject_id` ASC) VISIBLE,
  INDEX `fk_subject_teacher2_idx` (`teacher_id` ASC) VISIBLE,
  CONSTRAINT `fk_subject_teacher1`
    FOREIGN KEY (`subject_id`)
    REFERENCES `qresent`.`subject` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_subject_teacher2`
    FOREIGN KEY (`teacher_id`)
    REFERENCES `qresent`.`teacher` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

CREATE TABLE `qresent`.`subject_student` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `subject_id` INT NOT NULL,
  `student_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_subject_student1_idx` (`subject_id` ASC) VISIBLE,
  INDEX `fk_subject_student2_idx` (`student_id` ASC) VISIBLE,
  CONSTRAINT `fk_subject_student1`
    FOREIGN KEY (`subject_id`)
    REFERENCES `qresent`.`subject` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_subject_student2`
    FOREIGN KEY (`student_id`)
    REFERENCES `qresent`.`student` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


CREATE TABLE `qresent`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE);


CREATE INDEX index_user_role ON user (role);

CREATE TABLE `qresent`.`subject_user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `subject_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `user_role` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_subject_user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_subject_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `qresent`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


ALTER TABLE `qresent`.`attendance`
DROP FOREIGN KEY `fk_attendance_student`;
ALTER TABLE `qresent`.`attendance`
ADD INDEX `fk_attendance_student_idx` (`student_id` ASC) VISIBLE,
DROP INDEX `fk_attendance_student_idx`;

ALTER TABLE `qresent`.`attendance`
ADD CONSTRAINT `fk_attendance_student`
  FOREIGN KEY (`student_id`)
  REFERENCES `qresent`.`user` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;
