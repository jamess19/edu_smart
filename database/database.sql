-- Department (manager_id để sau mới gắn FK)
use edusmart
CREATE TABLE Department (
  department_id INT PRIMARY KEY AUTO_INCREMENT,
  department_name VARCHAR(100),
  department_code VARCHAR(20),
  description TEXT,
  manager_id INT
);

-- User
CREATE TABLE User (
  id INT PRIMARY KEY AUTO_INCREMENT,
  department_id INT,
  username VARCHAR(50) UNIQUE,
  password VARCHAR(100),
  fullname VARCHAR(100),
  address VARCHAR(255),
  email VARCHAR(100),
  birthday DATE,
  user_type VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  uploaded_at TIMESTAMP NULL
);

-- Courses
CREATE TABLE Courses (
  course_id INT PRIMARY KEY AUTO_INCREMENT,
  department_id INT,
  course_name VARCHAR(100),
  course_code VARCHAR(20),
  description TEXT,
  credits INT
);

-- OpenCourses
CREATE TABLE OpenCourses (
  opencourse_id INT PRIMARY KEY AUTO_INCREMENT,
  course_id INT,
  max_student INT,
  term INT,
  year INT,
  registration_start DATETIME,
  registration_end DATETIME
);

-- TeachingAssignment
CREATE TABLE TeachingAssignment (
  assignment_id INT PRIMARY KEY AUTO_INCREMENT,
  opencourse_id INT,
  teacher_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Enrollment
CREATE TABLE Enrollment (
  enrollment_id INT PRIMARY KEY AUTO_INCREMENT,
  opencourse_id INT,
  student_id INT,
  enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(20),
  theoretical_point FLOAT,
  practical_point FLOAT,
  midterm_point FLOAT,
  endterm_point FLOAT,
  final_point FLOAT
);

-- Resources
CREATE TABLE Resources (
  resource_id INT PRIMARY KEY AUTO_INCREMENT,
  teacher_id INT,
  opencourse_id INT,
  name VARCHAR(100),
  type VARCHAR(50),
  filepath VARCHAR(255)
);

-- Notification
CREATE TABLE Notification (
  notification_id INT PRIMARY KEY AUTO_INCREMENT,
  teacher_id INT,
  opencourse_id INT,
  content TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Assignment
CREATE TABLE Assignment (
  assignment_id INT PRIMARY KEY AUTO_INCREMENT,
  teacher_id INT,
  title VARCHAR(255),
  start_date DATETIME,
  due_date DATETIME,
  max_score FLOAT,
  filepath VARCHAR(255),
  description TEXT
);

-- Submission History
CREATE TABLE Submission_History (
  submission_id INT PRIMARY KEY AUTO_INCREMENT,
  student_id INT,
  assignment_id INT,
  filepath VARCHAR(255),
  submitted_at TIMESTAMP,
  score FLOAT
);


-- User → Department
ALTER TABLE User
  ADD CONSTRAINT fk_user_department FOREIGN KEY (department_id) REFERENCES Department(department_id);

-- Department → User (manager)
ALTER TABLE Department
  ADD CONSTRAINT fk_department_manager FOREIGN KEY (manager_id) REFERENCES User(id);

-- Courses → Department
ALTER TABLE Courses
  ADD CONSTRAINT fk_courses_department FOREIGN KEY (department_id) REFERENCES Department(department_id);

-- OpenCourses → Courses
ALTER TABLE OpenCourses
  ADD CONSTRAINT fk_opencourses_course FOREIGN KEY (course_id) REFERENCES Courses(course_id);

-- TeachingAssignment → OpenCourses, User
ALTER TABLE TeachingAssignment
  ADD CONSTRAINT fk_teachassign_opencourse FOREIGN KEY (opencourse_id) REFERENCES OpenCourses(opencourse_id),
  ADD CONSTRAINT fk_teachassign_teacher FOREIGN KEY (teacher_id) REFERENCES User(id);

-- Enrollment → OpenCourses, User
ALTER TABLE Enrollment
  ADD CONSTRAINT fk_enrollment_opencourse FOREIGN KEY (opencourse_id) REFERENCES OpenCourses(opencourse_id),
  ADD CONSTRAINT fk_enrollment_student FOREIGN KEY (student_id) REFERENCES User(id);

-- Resources → User, OpenCourses
ALTER TABLE Resources
  ADD CONSTRAINT fk_resources_teacher FOREIGN KEY (teacher_id) REFERENCES User(id),
  ADD CONSTRAINT fk_resources_opencourse FOREIGN KEY (opencourse_id) REFERENCES OpenCourses(opencourse_id);

-- Notification → User, OpenCourses
ALTER TABLE Notification
  ADD CONSTRAINT fk_notification_teacher FOREIGN KEY (teacher_id) REFERENCES User(id),
  ADD CONSTRAINT fk_notification_opencourse FOREIGN KEY (opencourse_id) REFERENCES OpenCourses(opencourse_id);

-- Assignment → User
ALTER TABLE Assignment
  ADD CONSTRAINT fk_assignment_teacher FOREIGN KEY (teacher_id) REFERENCES User(id);

-- Submission_History → User, Assignment
ALTER TABLE Submission_History
  ADD CONSTRAINT fk_submission_student FOREIGN KEY (student_id) REFERENCES User(id),
  ADD CONSTRAINT fk_submission_assignment FOREIGN KEY (assignment_id) REFERENCES Assignment(assignment_id);
