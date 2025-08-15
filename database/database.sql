

use edusmart;
SET FOREIGN_KEY_CHECKS = 0;

-- DROP TABLE IF EXISTS 
--     teaching_assignment, 
--     enrollment,
--     submission,
--     assignment,
--     resource,
--     notification,
--     open_course,
--     course,
--     student,
--     teacher,
--     user,
--     department;

-- department
CREATE TABLE department (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(100),
    department_code VARCHAR(50),
    description TEXT,
    manager_id INT
);

-- user
CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    department_id INT,
    username VARCHAR(50) UNIQUE,
    password VARCHAR(255),
    fullname VARCHAR(100),
    address VARCHAR(255),
    email VARCHAR(100),
    birthday DATE,
    user_type VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

-- student
CREATE TABLE student (
    id INT PRIMARY KEY, -- user_id
    student_code NVARCHAR(20),
    gpa FLOAT,
    major VARCHAR(100),
    completed_credits INT,
    total_credits INT,
    type VARCHAR(20)
);

-- teacher
CREATE TABLE teacher (
    id INT PRIMARY KEY, -- Cùng PK với user
    teacher_code NVARCHAR(20),
    degree VARCHAR(100),
    research_area VARCHAR(255),
    years_of_experience INT DEFAULT 0
);

-- course
CREATE TABLE course (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    department_id INT,
    course_name VARCHAR(100),
    course_code VARCHAR(50) UNIQUE,
    description TEXT,
    credits INT
);

-- open_course
CREATE TABLE open_course (
    open_course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_id INT,
    max_student INT,
    term INT,
    year YEAR,
    registation_start DATETIME,
    registation_end DATETIME
);

-- enrollment
CREATE TABLE enrollment (
    enrollment_id INT PRIMARY KEY AUTO_INCREMENT,
    open_course_id INT,
    student_id INT,
    enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50),
    theoretical_point FLOAT,
    practical_point FLOAT,
    midterm_point FLOAT,
    endterm_point FLOAT,
    final_point FLOAT
);

-- Teaching assignment
CREATE TABLE teaching_assignment (
    assignment_id INT PRIMARY KEY AUTO_INCREMENT,
    open_course_id INT,
    teacher_id INT,
    role NVARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- assignment
CREATE TABLE assignment (
    assignment_id INT PRIMARY KEY AUTO_INCREMENT,
    teacher_id INT,
    open_course_id INT,
    title VARCHAR(100),
    start_date DATETIME,
    due_date DATETIME,
    max_score FLOAT,
    filepath VARCHAR(255),
    description TEXT
);

-- Submission
CREATE TABLE submission (
    student_id INT,
    assignment_id INT,
    filepath VARCHAR(255),
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    score FLOAT,
    PRIMARY KEY (student_id, assignment_id)
);

-- notification
CREATE TABLE notification (
    notification_id INT PRIMARY KEY AUTO_INCREMENT,
    teacher_id INT,
    open_course_id INT,
    title NVARCHAR(255),
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- resource
CREATE TABLE resource (
    resource_id INT PRIMARY KEY AUTO_INCREMENT,
    teacher_id INT,
    open_course_id INT,
    name VARCHAR(100),
    type VARCHAR(50),
    filepath VARCHAR(255)
);


-- user
ALTER TABLE user ADD CONSTRAINT fk_user_department FOREIGN KEY (department_id) REFERENCES department(department_id);

-- student & teacher liên kết với user
ALTER TABLE student ADD CONSTRAINT fk_student_user FOREIGN KEY (id) REFERENCES user(id) ON DELETE CASCADE;
ALTER TABLE teacher ADD CONSTRAINT fk_teacher_user FOREIGN KEY (id) REFERENCES user(id) ON DELETE CASCADE;

-- department manager
ALTER TABLE department ADD CONSTRAINT fk_department_manager 
    FOREIGN KEY (manager_id) REFERENCES teacher(id);
-- course
ALTER TABLE course ADD CONSTRAINT fk_course_department FOREIGN KEY (department_id) REFERENCES department(department_id);

-- open_course
ALTER TABLE open_course ADD CONSTRAINT fk_open_course_course FOREIGN KEY (course_id) REFERENCES course(course_id);

-- enrollment
ALTER TABLE enrollment
    ADD CONSTRAINT fk_enrollment_open_course FOREIGN KEY (open_course_id) REFERENCES open_course(open_course_id),
    ADD CONSTRAINT fk_enrollment_student FOREIGN KEY (student_id) REFERENCES student(id);

-- teaching_assignment
ALTER TABLE teaching_assignment
    ADD CONSTRAINT fk_teaching_assignment_open_course FOREIGN KEY (open_course_id) REFERENCES open_course(open_course_id),
    ADD CONSTRAINT fk_teaching_assignment_teacher FOREIGN KEY (teacher_id) REFERENCES teacher(id);
-- assignment
ALTER TABLE assignment
    ADD CONSTRAINT fk_assignment_teacher FOREIGN KEY (teacher_id) REFERENCES teacher(id),
    ADD CONSTRAINT fk_assignment_open_course FOREIGN KEY (open_course_id) REFERENCES open_course(open_course_id);
-- submission
ALTER TABLE submission
    ADD CONSTRAINT fk_submission_student FOREIGN KEY (student_id) REFERENCES student(id),
    ADD CONSTRAINT fk_submission_assignment FOREIGN KEY (assignment_id) REFERENCES assignment(assignment_id);

-- notification
ALTER TABLE notification
    ADD CONSTRAINT fk_notification_teacher FOREIGN KEY (teacher_id) REFERENCES teacher(id),
    ADD CONSTRAINT fk_notification_open_course FOREIGN KEY (open_course_id) REFERENCES open_course(open_course_id);

-- resource
ALTER TABLE resource
    ADD CONSTRAINT fk_resource_teacher FOREIGN KEY (teacher_id) REFERENCES teacher(id),
    ADD CONSTRAINT fk_resource_open_course FOREIGN KEY (open_course_id) REFERENCES open_course(open_course_id);
