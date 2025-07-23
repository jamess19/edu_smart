-- Khoa
CREATE TABLE IF NOT EXISTS DEPARTMENTS (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    code VARCHAR(10) NOT NULL,
    manager INT
);

-- Giáo viên
CREATE TABLE IF NOT EXISTS STAFFS (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    fullname VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    birthday DATE,
    role VARCHAR(50) NOT NULL,
    departmentId INT,
    FOREIGN KEY (departmentId) REFERENCES DEPARTMENTS(id)
);

ALTER TABLE DEPARTMENTS
ADD CONSTRAINT fk_dept_mgr
FOREIGN KEY (manager) REFERENCES STAFFS(id);
-- Học sinh
CREATE TABLE IF NOT EXISTS STUDENTS (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    fullname VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    birthday DATE,
    departmentId INT,
    FOREIGN KEY (departmentId) REFERENCES DEPARTMENTS(id)
);

-- Các khoá học
CREATE TABLE IF NOT EXISTS COURSES (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    code VARCHAR(10) NOT NULL,
    credits INT NOT NULL,
    departmentId INT,
    FOREIGN KEY (departmentId) REFERENCES DEPARTMENTS(id)
);

-- Các khoá học đang mở
CREATE TABLE IF NOT EXISTS OPENCOURSES (
    id INT AUTO_INCREMENT PRIMARY KEY,
    teacherId INT,
    courseId INT,
    quantity INT NOT NULL,
    maximum INT NOT NULL,
    term INT NOT NULL,
    year_ YEAR DEFAULT(YEAR(CURDATE())),  -- Nếu không được thì cần dùng trigger
    FOREIGN KEY (teacherId) REFERENCES STAFFS(id),
    FOREIGN KEY (courseId) REFERENCES COURSES(id)
);

-- Đăng ký của sinh viên
CREATE TABLE IF NOT EXISTS ENROLLMENTS (
    id INT AUTO_INCREMENT PRIMARY KEY,
    studentId INT,
    courseId INT,
    enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (studentId) REFERENCES STUDENTS(id),
    FOREIGN KEY (courseId) REFERENCES OPENCOURSES(id)
);

-- Tài nguyên
CREATE TABLE IF NOT EXISTS RESOURCES (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    type VARCHAR(20) NOT NULL
);

-- Tài nguyên cho khoá học
CREATE TABLE IF NOT EXISTS COURSEMATERIALS (
    resourceId INT,
    open_courseId INT,
    FOREIGN KEY (resourceId) REFERENCES RESOURCES(id),
    FOREIGN KEY (open_courseId) REFERENCES OPENCOURSES(id)
);

-- Tài nguyên của sinh viên
CREATE TABLE IF NOT EXISTS STUDENTMATERIALS (
    resourceId INT,
    studentId INT,
    FOREIGN KEY (resourceId) REFERENCES RESOURCES(id),
    FOREIGN KEY (studentId) REFERENCES STUDENTS(id)
);
