-- Department (manager_id để sau mới gắn FK)
use edusmart;
SET FOREIGN_KEY_CHECKS = 0;

-- DROP TABLE IF EXISTS 
--     Teaching_Assignment, 
--     Enrollment,
--     Submission_History,
--     Assignment,
--     Resources,
--     Notification,
--     OpenCourses,
--     Courses,
--     Student,
--     Teacher,
--     User,
--     Department;

-- Department
CREATE TABLE Department (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(100),
    department_code VARCHAR(50),
    description TEXT,
    manger INT
);

-- User
CREATE TABLE User (
    id INT PRIMARY KEY,
    department_id INT,
    username VARCHAR(50),
    password VARCHAR(255),
    fullname VARCHAR(100),
    address VARCHAR(255),
    email VARCHAR(100),
    birthday DATE,
    user_type VARCHAR(20),
    created_at TIMESTAMP,
    uploaded_at TIMESTAMP
);

-- Student
CREATE TABLE Student (
    student_id INT PRIMARY KEY,
    gpa FLOAT,
    major VARCHAR(100),
    completed_credits INT,
    total_credits INT,
    type VARCHAR(20)
);

-- Teacher
CREATE TABLE Teacher (
    teacher_id INT PRIMARY KEY
);

-- Courses
CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    department_id INT,
    course_name VARCHAR(100),
    course_code VARCHAR(50),
    description TEXT,
    credits INT
);

-- OpenCourses
CREATE TABLE OpenCourses (
    opencourse_id INT PRIMARY KEY,
    course_id INT,
    max_student INT,
    term INT,
    year INT,
    registation_start DATETIME,
    registation_end DATETIME
);

-- Enrollment
CREATE TABLE Enrollment (
    enrollment_id INT PRIMARY KEY,
    opencourse_id INT,
    student_id INT,
    enrolled_at TIMESTAMP,
    status VARCHAR(50),
    theorical_point FLOAT,
    practical_point FLOAT,
    midterm_point FLOAT,
    endterm_point FLOAT,
    final_point FLOAT
);

-- Teaching Assignment
CREATE TABLE Teaching_Assignment (
    assignment_id INT PRIMARY KEY,
    opencourse_id INT,
    teacher_id INT,
    created_at TIMESTAMP
);

-- Assignment
CREATE TABLE Assignment (
    assignment_id INT PRIMARY KEY,
    teacher_id INT,
    title VARCHAR(100),
    start_date DATETIME,
    due_date DATETIME,
    max_score FLOAT,
    filepath VARCHAR(255),
    description TEXT
);

-- Submission History
CREATE TABLE Submission_History (
    submission_id INT PRIMARY KEY,
    student_id INT,
    assignment_id INT,
    filepath VARCHAR(255),
    submitted_at TIMESTAMP,
    score FLOAT
);

-- Notification
CREATE TABLE Notification (
    notification_id INT PRIMARY KEY,
    teacher_id INT,
    opencourse_id INT,
    content TEXT,
    created_at TIMESTAMP
);

-- Resources
CREATE TABLE Resources (
    resource_id INT PRIMARY KEY,
    teacher_id INT,
    opencourse_id INT,
    name VARCHAR(100),
    type VARCHAR(50),
    filepath VARCHAR(255)
);


-- User
ALTER TABLE User ADD CONSTRAINT fk_user_department FOREIGN KEY (department_id) REFERENCES Department(department_id);

-- Student & Teacher liên kết với User
ALTER TABLE Student ADD CONSTRAINT fk_student_user FOREIGN KEY (student_id) REFERENCES User(id);
ALTER TABLE Teacher ADD CONSTRAINT fk_teacher_user FOREIGN KEY (teacher_id) REFERENCES User(id);

-- Courses
ALTER TABLE Courses ADD CONSTRAINT fk_course_department FOREIGN KEY (department_id) REFERENCES Department(department_id);

-- OpenCourses
ALTER TABLE OpenCourses ADD CONSTRAINT fk_opencourse_course FOREIGN KEY (course_id) REFERENCES Courses(course_id);

-- Enrollment
ALTER TABLE Enrollment
    ADD CONSTRAINT fk_enrollment_opencourse FOREIGN KEY (opencourse_id) REFERENCES OpenCourses(opencourse_id),
    ADD CONSTRAINT fk_enrollment_student FOREIGN KEY (student_id) REFERENCES Student(student_id);

-- Teaching_Assignment
ALTER TABLE Teaching_Assignment
    ADD CONSTRAINT fk_assignment_opencourse FOREIGN KEY (opencourse_id) REFERENCES OpenCourses(opencourse_id),
    ADD CONSTRAINT fk_teaching_assignment_teacher FOREIGN KEY (teacher_id) REFERENCES Teacher(teacher_id);
-- Assignment
ALTER TABLE Assignment
    ADD CONSTRAINT fk_assignment_teacher FOREIGN KEY (teacher_id) REFERENCES Teacher(teacher_id);

-- Submission_History
ALTER TABLE Submission_History
    ADD CONSTRAINT fk_submission_student FOREIGN KEY (student_id) REFERENCES Student(student_id),
    ADD CONSTRAINT fk_submission_assignment FOREIGN KEY (assignment_id) REFERENCES Assignment(assignment_id);

-- Notification
ALTER TABLE Notification
    ADD CONSTRAINT fk_notification_teacher FOREIGN KEY (teacher_id) REFERENCES Teacher(teacher_id),
    ADD CONSTRAINT fk_notification_opencourse FOREIGN KEY (opencourse_id) REFERENCES OpenCourses(opencourse_id);

-- Resources
ALTER TABLE Resources
    ADD CONSTRAINT fk_resource_teacher FOREIGN KEY (teacher_id) REFERENCES Teacher(teacher_id),
    ADD CONSTRAINT fk_resource_opencourse FOREIGN KEY (opencourse_id) REFERENCES OpenCourses(opencourse_id);
