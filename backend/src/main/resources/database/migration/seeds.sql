-- DEPARTMENTS
INSERT INTO DEPARTMENTS (name, code, manager) VALUES
('INFORMATION TECHNOLOGY', 'IT', NULL),
('SOFTWARE ENGINEERING', 'SE', NULL),
('COMPUTER SCIENCE', 'CS', NULL),
('DATA SCIENCE', 'DS', NULL);

-- STAFFS
INSERT INTO STAFFS (username, password, fullname, address, email, birthday, role, departmentId) VALUES
('johnsmith', '123456', 'JOHN SMITH', 'NEW YORK', 'john.smith@edusmart.edu', '1978-03-15', 'HEAD OF DEPARTMENT', 1),
('emilybrown', '123456', 'EMILY BROWN', 'LOS ANGELES', 'emily.brown@edusmart.edu', '1982-07-22', 'LECTURER', 1),
('michaeljohnson', '123456', 'MICHAEL JOHNSON', 'CHICAGO', 'michael.johnson@edusmart.edu', '1985-11-10', 'LECTURER', 2),
('sarahlee', '123456', 'SARAH LEE', 'BOSTON', 'sarah.lee@edusmart.edu', '1980-05-30', 'LECTURER', 3),
('davidkim', '123456', 'DAVID KIM', 'SAN FRANCISCO', 'david.kim@edusmart.edu', '1975-12-05', 'HEAD OF DEPARTMENT', 4);

-- Update manager
UPDATE DEPARTMENTS SET manager = 1 WHERE id = 1;
UPDATE DEPARTMENTS SET manager = 3 WHERE id = 2;
UPDATE DEPARTMENTS SET manager = 4 WHERE id = 3;
UPDATE DEPARTMENTS SET manager = 5 WHERE id = 4;

-- STUDENTS
INSERT INTO STUDENTS (username, password, fullname, address, email, birthday, departmentId) VALUES
('alicewong', '123456', 'ALICE WONG', 'SEATTLE', 'alice.wong@student.edusmart.edu', '2002-01-12', 1),
('brianclark', '123456', 'BRIAN CLARK', 'AUSTIN', 'brian.clark@student.edusmart.edu', '2001-09-23', 2),
('chloemartin', '123456', 'CHLOE MARTIN', 'DENVER', 'chloe.martin@student.edusmart.edu', '2003-04-18', 3),
('danielgarcia', '123456', 'DANIEL GARCIA', 'MIAMI', 'daniel.garcia@student.edusmart.edu', '2002-07-07', 4),
('evaadams', '123456', 'EVA ADAMS', 'PORTLAND', 'eva.adams@student.edusmart.edu', '2001-12-30', 1);

-- COURSES
INSERT INTO COURSES (name, code, credits, departmentId) VALUES
('JAVA PROGRAMMING', 'JAVA101', 3, 1),
('DATABASE SYSTEMS', 'DB102', 3, 1),
('SOFTWARE DESIGN PATTERNS', 'SDP201', 3, 2),
('ALGORITHMS', 'ALG301', 4, 3),
('MACHINE LEARNING', 'ML401', 4, 4),
('PYTHON PROGRAMMING', 'PYT101', 3, 1);

-- OPENCOURSES
INSERT INTO OPENCOURSES (teacherId, courseId, quantity, maximum, term, year_) VALUES
(2, 1, 0, 60, 1, 2025),
(3, 3, 0, 40, 1, 2025),
(4, 4, 0, 50, 2, 2025),
(5, 5, 0, 35, 2, 2025),
(2, 2, 0, 45, 1, 2025),
(3, 6, 0, 50, 2, 2025);

-- ENROLLMENTS
INSERT INTO ENROLLMENTS (studentId, courseId) VALUES
(1, 1),
(1, 2),
(2, 3),
(3, 4),
(4, 5),
(5, 1),
(2, 1),
(3, 2),
(4, 6),
(5, 6);

-- RESOURCES
INSERT INTO RESOURCES (name, type) VALUES
('JAVA LECTURE SLIDES', 'SLIDE'),
('JAVA ASSIGNMENTS', 'EXERCISE'),
('DATABASE LAB MANUAL', 'DOCUMENT'),
('PATTERNS REFERENCE', 'BOOK'),
('ALGORITHM VISUALIZER', 'TOOL'),
('ML DATASETS', 'DATASET'),
('PYTHON PRACTICE QUESTIONS', 'EXERCISE');

-- COURSEMATERIALS
INSERT INTO COURSEMATERIALS (resourceId, open_courseId) VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 3),
(5, 4),
(6, 4),
(7, 6);

-- STUDENTMATERIALS
INSERT INTO STUDENTMATERIALS (resourceId, studentId) VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 3),
(5, 4),
(6, 4),
(7, 5);