-- File seed cho database edusmart
-- Chạy sau khi đã tạo xong các bảng

USE edusmart;

-- Disable foreign key checks để insert dữ liệu dễ dàng hơn
SET FOREIGN_KEY_CHECKS = 0;

-- Insert Department (không có manager_id trước)
INSERT INTO Department (department_id, department_name, department_code, description, manger) VALUES
(1, 'Khoa Công nghệ Thông tin', 'CNTT', 'Khoa đào tạo về công nghệ thông tin và phần mềm', NULL),
(2, 'Khoa Kinh tế', 'KT', 'Khoa đào tạo về kinh tế và quản trị kinh doanh', NULL),
(3, 'Khoa Ngoại ngữ', 'NN', 'Khoa đào tạo các ngôn ngữ quốc tế', NULL),
(4, 'Khoa Cơ khí', 'CK', 'Khoa đào tạo về kỹ thuật cơ khí và chế tạo máy', NULL),
(5, 'Khoa Điện - Điện tử', 'DDT', 'Khoa đào tạo về kỹ thuật điện và điện tử', NULL);

-- Insert User (Teachers và Students)
INSERT INTO User (id, department_id, username, password, fullname, address, email, birthday, user_type, created_at, uploaded_at) VALUES
-- Teachers/Managers
(1, 1, 'admin', '123456', 'Nguyễn Văn Admin', '123 Đường ABC, TP.HCM', 'admin@edusmart.edu.vn', '1980-01-01', 'admin', '2024-01-01 08:00:00', NULL),
(2, 1, 'gv001', '123456', 'Trần Thị Lan', '456 Đường DEF, TP.HCM', 'ttlan@edusmart.edu.vn', '1985-03-15', 'teacher', '2024-01-01 08:00:00', NULL),
(3, 1, 'gv002', '123456', 'Lê Văn Minh', '789 Đường GHI, TP.HCM', 'lvminh@edusmart.edu.vn', '1982-07-20', 'teacher', '2024-01-01 08:00:00', NULL),
(4, 2, 'gv003', '123456', 'Phạm Thị Hoa', '321 Đường JKL, TP.HCM', 'pthoa@edusmart.edu.vn', '1987-12-10', 'teacher', '2024-01-01 08:00:00', NULL),
(5, 3, 'gv004', '123456', 'Võ Văn Tùng', '654 Đường MNO, TP.HCM', 'vvtung@edusmart.edu.vn', '1984-05-25', 'teacher', '2024-01-01 08:00:00', NULL),
(6, 4, 'gv005', '123456', 'Hoàng Thị Mai', '987 Đường PQR, TP.HCM', 'htmai@edusmart.edu.vn', '1986-09-18', 'teacher', '2024-01-01 08:00:00', NULL),
(7, 5, 'gv006', '123456', 'Đặng Văn Hải', '147 Đường STU, TP.HCM', 'dvhai@edusmart.edu.vn', '1983-11-30', 'teacher', '2024-01-01 08:00:00', NULL),

-- Students
(8, 1, 'sv001', '123456', 'Nguyễn Văn An', '111 Đường VWX, TP.HCM', 'nvan@student.edusmart.edu.vn', '2003-01-15', 'student', '2024-08-01 08:00:00', NULL),
(9, 1, 'sv002', '123456', 'Trần Thị Bình', '222 Đường YZ, TP.HCM', 'ttbinh@student.edusmart.edu.vn', '2003-03-20', 'student', '2024-08-01 08:00:00', NULL),
(10, 1, 'sv003', '123456', 'Lê Văn Cường', '333 Đường ABC1, TP.HCM', 'lvcuong@student.edusmart.edu.vn', '2003-05-10', 'student', '2024-08-01 08:00:00', NULL),
(11, 2, 'sv004', '123456', 'Phạm Thị Dung', '444 Đường DEF1, TP.HCM', 'ptdung@student.edusmart.edu.vn', '2003-07-25', 'student', '2024-08-01 08:00:00', NULL),
(12, 2, 'sv005', '123456', 'Võ Văn Em', '555 Đường GHI1, TP.HCM', 'vvem@student.edusmart.edu.vn', '2003-09-12', 'student', '2024-08-01 08:00:00', NULL),
(13, 3, 'sv006', '123456', 'Hoàng Thị Phương', '666 Đường JKL1, TP.HCM', 'htphuong@student.edusmart.edu.vn', '2003-11-08', 'student', '2024-08-01 08:00:00', NULL),
(14, 4, 'sv007', '123456', 'Đặng Văn Quang', '777 Đường MNO1, TP.HCM', 'dvquang@student.edusmart.edu.vn', '2003-12-20', 'student', '2024-08-01 08:00:00', NULL),
(15, 5, 'sv008', '123456', 'Lý Thị Hương', '888 Đường PQR1, TP.HCM', 'lthuong@student.edusmart.edu.vn', '2004-02-14', 'student', '2024-08-01 08:00:00', NULL),
(16, 1, 'sv009', '123456', 'Bùi Văn Sơn', '999 Đường STU1, TP.HCM', 'bvson@student.edusmart.edu.vn', '2004-04-18', 'student', '2024-08-01 08:00:00', NULL),
(17, 2, 'sv010', '123456', 'Cao Thị Thu', '101 Đường VWX1, TP.HCM', 'ctthu@student.edusmart.edu.vn', '2004-06-22', 'student', '2024-08-01 08:00:00', NULL);

-- Insert Student records
INSERT INTO Student (student_id, gpa, major, completed_credits, total_credits, type) VALUES
(8, 3.65, 'Khoa học máy tính', 85, 120, 'regular'),
(9, 3.80, 'Khoa học máy tính', 90, 120, 'regular'),
(10, 2.95, 'Khoa học máy tính', 75, 120, 'regular'),
(11, 3.45, 'Kinh tế', 80, 120, 'regular'),
(12, 3.20, 'Kinh tế', 78, 120, 'regular'),
(13, 3.55, 'Ngôn ngữ Anh', 82, 120, 'regular'),
(14, 3.30, 'Cơ khí', 76, 120, 'regular'),
(15, 3.40, 'Điện - Điện tử', 79, 120, 'regular'),
(16, 3.15, 'Khoa học máy tính', 72, 120, 'regular'),
(17, 3.60, 'Kinh tế', 84, 120, 'regular');

-- Insert Teacher records
INSERT INTO Teacher (teacher_id) VALUES
(1), (2), (3), (4), (5), (6), (7);

-- Update Department với manager_id
UPDATE Department SET manger = 2 WHERE department_id = 1;
UPDATE Department SET manger = 4 WHERE department_id = 2;
UPDATE Department SET manger = 5 WHERE department_id = 3;
UPDATE Department SET manger = 6 WHERE department_id = 4;
UPDATE Department SET manger = 7 WHERE department_id = 5;

-- Insert Courses
INSERT INTO Courses (course_id, department_id, course_name, course_code, description, credits) VALUES
-- CNTT Courses
(1, 1, 'Lập trình căn bản', 'IT101', 'Môn học cơ bản về lập trình với ngôn ngữ C/C++', 3),
(2, 1, 'Cấu trúc dữ liệu và giải thuật', 'IT201', 'Học về các cấu trúc dữ liệu và thuật toán cơ bản', 4),
(3, 1, 'Cơ sở dữ liệu', 'IT301', 'Thiết kế và quản trị cơ sở dữ liệu', 3),
(4, 1, 'Phát triển ứng dụng Web', 'IT401', 'Phát triển ứng dụng web với HTML, CSS, JavaScript, PHP', 4),
(5, 1, 'Trí tuệ nhân tạo', 'IT501', 'Giới thiệu về AI và machine learning', 3),

-- Kinh tế Courses
(6, 2, 'Kinh tế vi mô', 'EC101', 'Nguyên lý cơ bản của kinh tế vi mô', 3),
(7, 2, 'Kinh tế vĩ mô', 'EC201', 'Nguyên lý cơ bản của kinh tế vĩ mô', 3),
(8, 2, 'Quản trị kinh doanh', 'BA301', 'Các nguyên lý quản trị doanh nghiệp', 4),
(9, 2, 'Marketing căn bản', 'MK201', 'Giới thiệu về marketing và nghiên cứu thị trường', 3),

-- Ngoại ngữ Courses
(10, 3, 'Tiếng Anh cơ bản', 'EN101', 'Tiếng Anh giao tiếp cơ bản', 2),
(11, 3, 'Tiếng Anh nâng cao', 'EN201', 'Tiếng Anh nâng cao cho sinh viên', 3),
(12, 3, 'Tiếng Nhật cơ bản', 'JP101', 'Tiếng Nhật cơ bản', 2),

-- Cơ khí Courses
(13, 4, 'Vẽ kỹ thuật', 'ME101', 'Cơ bản về vẽ kỹ thuật cơ khí', 3),
(14, 4, 'Cơ học vật rắn', 'ME201', 'Nghiên cứu về cơ học vật rắn', 4),

-- Điện - Điện tử Courses
(15, 5, 'Mạch điện cơ bản', 'EE101', 'Phân tích mạch điện cơ bản', 3),
(16, 5, 'Điện tử số', 'EE201', 'Cơ bản về điện tử số và logic', 4);

-- Insert OpenCourses (Kỳ 1 năm 2025)
INSERT INTO OpenCourses (opencourse_id, course_id, max_student, term, year, registation_start, registation_end) VALUES
(1, 1, 30, 1, 2025, '2025-02-01 08:00:00', '2025-02-15 17:00:00'),
(2, 2, 25, 1, 2025, '2025-02-01 08:00:00', '2025-02-15 17:00:00'),
(3, 3, 35, 1, 2025, '2025-02-01 08:00:00', '2025-02-15 17:00:00'),
(4, 6, 40, 1, 2025, '2025-02-01 08:00:00', '2025-02-15 17:00:00'),
(5, 10, 50, 1, 2025, '2025-02-01 08:00:00', '2025-02-15 17:00:00'),
(6, 13, 20, 1, 2025, '2025-02-01 08:00:00', '2025-02-15 17:00:00'),
(7, 15, 25, 1, 2025, '2025-02-01 08:00:00', '2025-02-15 17:00:00'),

-- Kỳ 2 năm 2025
(8, 4, 30, 2, 2025, '2025-06-01 08:00:00', '2025-06-15 17:00:00'),
(9, 7, 35, 2, 2025, '2025-06-01 08:00:00', '2025-06-15 17:00:00'),
(10, 11, 40, 2, 2025, '2025-06-01 08:00:00', '2025-06-15 17:00:00');

-- Insert Teaching_Assignment
INSERT INTO Teaching_Assignment (assignment_id, opencourse_id, teacher_id, created_at) VALUES
(1, 1, 2, '2025-01-15 08:00:00'), -- Trần Thị Lan dạy Lập trình căn bản
(2, 2, 3, '2025-01-15 08:00:00'), -- Lê Văn Minh dạy Cấu trúc dữ liệu
(3, 3, 2, '2025-01-15 08:00:00'), -- Trần Thị Lan dạy Cơ sở dữ liệu
(4, 4, 4, '2025-01-15 08:00:00'), -- Phạm Thị Hoa dạy Kinh tế vi mô
(5, 5, 5, '2025-01-15 08:00:00'), -- Võ Văn Tùng dạy Tiếng Anh cơ bản
(6, 6, 6, '2025-01-15 08:00:00'), -- Hoàng Thị Mai dạy Vẽ kỹ thuật
(7, 7, 7, '2025-01-15 08:00:00'), -- Đặng Văn Hải dạy Mạch điện cơ bản
(8, 8, 3, '2025-05-15 08:00:00'), -- Lê Văn Minh dạy Web development
(9, 9, 4, '2025-05-15 08:00:00'), -- Phạm Thị Hoa dạy Kinh tế vĩ mô
(10, 10, 5, '2025-05-15 08:00:00'); -- Võ Văn Tùng dạy Tiếng Anh nâng cao

-- Insert Enrollment
INSERT INTO Enrollment (enrollment_id, opencourse_id, student_id, enrolled_at, status, theorical_point, practical_point, midterm_point, endterm_point, final_point) VALUES
-- Lập trình căn bản
(1, 1, 8, '2025-02-16 09:00:00', 'enrolled', 8.5, 7.0, 7.5, 8.0, 7.75),
(2, 1, 9, '2025-02-16 10:00:00', 'enrolled', 9.0, 8.5, 8.8, 9.2, 8.88),
(3, 1, 10, '2025-02-16 11:00:00', 'enrolled', 6.5, 7.0, 6.8, 7.2, 6.88),
(4, 1, 16, '2025-02-16 14:00:00', 'enrolled', 8.0, 7.5, 7.8, 8.5, 7.95),
-- Kiểm tra dữ liệu trong các bảng
SELECT 'User table:' as Info, COUNT(*) as count FROM User;
SELECT 'Student table:' as Info, COUNT(*) as count FROM Student;

-- Xem dữ liệu cụ thể


-- Cấu trúc dữ liệu
(5, 2, 8, '2025-02-16 09:30:00', 'enrolled', 7.5, 8.0, 7.8, 8.2, 7.88),
(6, 2, 9, '2025-02-16 10:30:00', 'enrolled', 9.5, 9.0, 9.2, 9.5, 9.3),
(7, 2, 10, '2025-02-16 11:30:00', 'enrolled', 5.5, 6.0, 5.8, 6.5, 5.95),

-- Cơ sở dữ liệu
(8, 3, 8, '2025-02-16 15:00:00', 'enrolled', 8.0, 8.5, 8.2, 8.8, 8.38),
(9, 3, 16, '2025-02-16 15:30:00', 'enrolled', 7.0, 7.5, 7.2, 7.8, 7.38),

-- Kinh tế vi mô
(10, 4, 11, '2025-02-16 08:00:00', 'enrolled', 8.5, NULL, 8.0, 8.5, 8.33),
(11, 4, 12, '2025-02-16 08:30:00', 'enrolled', 7.5, NULL, 7.8, 8.0, 7.77),
(12, 4, 17, '2025-02-16 09:00:00', 'enrolled', 9.0, NULL, 8.8, 9.2, 8.93),

-- Tiếng Anh cơ bản
(13, 5, 13, '2025-02-16 13:00:00', 'enrolled', 8.0, 8.5, 8.2, 8.3, 8.2),
(14, 5, 8, '2025-02-16 13:30:00', 'enrolled', 7.0, 7.5, 7.2, 7.8, 7.38),
(15, 5, 11, '2025-02-16 14:00:00', 'enrolled', 8.5, 9.0, 8.8, 9.0, 8.83);

-- Insert Resources
INSERT INTO Resources (resource_id, teacher_id, opencourse_id, name, type, filepath) VALUES
(1, 2, 1, 'Slide bài giảng 1 - Giới thiệu lập trình', 'presentation', '/resources/it101/slide1.pptx'),
(2, 2, 1, 'Bài tập tuần 1', 'exercise', '/resources/it101/exercise1.pdf'),
(3, 2, 1, 'Code mẫu Hello World', 'code', '/resources/it101/hello.cpp'),
(4, 3, 2, 'Slide Stack và Queue', 'presentation', '/resources/it201/stack_queue.pptx'),
(5, 3, 2, 'Bài tập về Stack', 'exercise', '/resources/it201/stack_exercise.pdf'),
(6, 2, 3, 'Thiết kế ERD - Hướng dẫn', 'document', '/resources/it301/erd_guide.docx'),
(7, 4, 4, 'Tài liệu Kinh tế vi mô', 'document', '/resources/ec101/micro_economics.pdf'),
(8, 5, 5, 'English Grammar Basics', 'document', '/resources/en101/grammar_basics.pdf'),
(9, 6, 6, 'Bản vẽ kỹ thuật mẫu', 'drawing', '/resources/me101/sample_drawing.dwg'),
(10, 7, 7, 'Sơ đồ mạch điện', 'diagram', '/resources/ee101/circuit_diagram.pdf');

-- Insert Notification
INSERT INTO Notification (notification_id, teacher_id, opencourse_id, content, created_at) VALUES
(1, 2, 1, 'Chào mừng các bạn đến với môn Lập trình căn bản. Buổi học đầu tiên sẽ diễn ra vào thứ 2 tuần tới.', '2025-02-20 08:00:00'),
(2, 2, 1, 'Nhắc nhở: Bài tập tuần 1 cần nộp trước 17h ngày thứ 6 tuần này.', '2025-02-28 16:00:00'),
(3, 3, 2, 'Thông báo: Kiểm tra giữa kỳ sẽ diễn ra vào tuần 8, các bạn chuẩn bị kỹ.', '2025-03-15 10:00:00'),
(4, 2, 3, 'Bài lab tuần này sẽ thực hành thiết kế database cho một ứng dụng thực tế.', '2025-03-20 14:00:00'),
(5, 4, 4, 'Tài liệu bổ sung về chương 3 đã được upload, các bạn tham khảo thêm.', '2025-03-10 11:00:00'),
(6, 5, 5, 'English speaking practice session will be held every Friday at 2 PM.', '2025-02-25 13:00:00'),
(7, 6, 6, 'Lưu ý: Cần mang đầy đủ dụng cụ vẽ cho buổi thực hành tuần tới.', '2025-03-05 09:00:00'),
(8, 7, 7, 'Thí nghiệm tuần này sẽ đo đạc các thông số mạch RLC, chuẩn bị báo cáo.', '2025-03-12 15:00:00');

-- Insert Assignment
INSERT INTO Assignment (assignment_id, teacher_id, title, start_date, due_date, max_score, filepath, description) VALUES
(1, 2, 'Bài tập 1: Hello World và biến', '2025-03-01 08:00:00', '2025-03-08 23:59:59', 10.0, '/assignments/it101/assignment1.pdf', 'Viết chương trình Hello World và thực hành với các loại biến cơ bản'),
(2, 2, 'Bài tập 2: Cấu trúc điều khiển', '2025-03-15 08:00:00', '2025-03-22 23:59:59', 10.0, '/assignments/it101/assignment2.pdf', 'Sử dụng if-else, switch-case, và các vòng lặp'),
(3, 3, 'Project: Cài đặt Stack bằng Array', '2025-03-10 08:00:00', '2025-03-24 23:59:59', 20.0, '/assignments/it201/stack_project.pdf', 'Cài đặt cấu trúc dữ liệu Stack và các phép toán cơ bản'),
(4, 2, 'Thiết kế ERD cho hệ thống thư viện', '2025-04-01 08:00:00', '2025-04-15 23:59:59', 25.0, '/assignments/it301/library_erd.pdf', 'Phân tích yêu cầu và thiết kế ERD cho hệ thống quản lý thư viện'),
(5, 4, 'Bài tập về Cung và Cầu', '2025-03-05 08:00:00', '2025-03-12 23:59:59', 15.0, '/assignments/ec101/supply_demand.pdf', 'Giải các bài tập về đường cung và đường cầu'),
(6, 5, 'Writing Assignment: My Future Career', '2025-03-20 08:00:00', '2025-03-27 23:59:59', 10.0, '/assignments/en101/career_essay.pdf', 'Write a 300-word essay about your future career plans');

-- Insert Submission_History
INSERT INTO Submission_History (submission_id, student_id, assignment_id, filepath, submitted_at, score) VALUES
(1, 8, 1, '/submissions/sv001/assignment1.cpp', '2025-03-07 15:30:00', 8.5),
(2, 9, 1, '/submissions/sv002/assignment1.cpp', '2025-03-06 20:15:00', 9.0),
(3, 10, 1, '/submissions/sv003/assignment1.cpp', '2025-03-08 22:45:00', 6.5),
(4, 16, 1, '/submissions/sv009/assignment1.cpp', '2025-03-07 18:20:00', 8.0),

(5, 8, 2, '/submissions/sv001/assignment2.cpp', '2025-03-21 14:10:00', 7.5),
(6, 9, 2, '/submissions/sv002/assignment2.cpp', '2025-03-20 16:30:00', 9.5),
(7, 10, 2, '/submissions/sv003/assignment2.cpp', '2025-03-22 23:30:00', 5.5),

(8, 8, 3, '/submissions/sv001/stack_project.cpp', '2025-03-23 19:45:00', 17.0),
(9, 9, 3, '/submissions/sv002/stack_project.cpp', '2025-03-22 10:20:00', 19.5),
(10, 10, 3, '/submissions/sv003/stack_project.cpp', '2025-03-24 23:55:00', 12.0),

(11, 11, 5, '/submissions/sv004/supply_demand.pdf', '2025-03-11 16:40:00', 12.5),
(12, 12, 5, '/submissions/sv005/supply_demand.pdf', '2025-03-12 14:25:00', 13.0),
(13, 17, 5, '/submissions/sv010/supply_demand.pdf', '2025-03-10 20:10:00', 14.0),

(14, 13, 6, '/submissions/sv006/career_essay.docx', '2025-03-26 11:30:00', 8.5),
(15, 8, 6, '/submissions/sv001/career_essay.docx', '2025-03-25 15:20:00', 7.0);

-- Enable foreign key checks
SET FOREIGN_KEY_CHECKS = 1;

-- Hiển thị thống kê
SELECT 'Department' as TableName, COUNT(*) as RecordCount FROM Department
UNION ALL
SELECT 'User', COUNT(*) FROM User
UNION ALL
SELECT 'Student', COUNT(*) FROM Student
UNION ALL
SELECT 'Teacher', COUNT(*) FROM Teacher
UNION ALL
SELECT 'Courses', COUNT(*) FROM Courses
UNION ALL
SELECT 'OpenCourses', COUNT(*) FROM OpenCourses
UNION ALL
SELECT 'Teaching_Assignment', COUNT(*) FROM Teaching_Assignment
UNION ALL
SELECT 'Enrollment', COUNT(*) FROM Enrollment
UNION ALL
SELECT 'Resources', COUNT(*) FROM Resources
UNION ALL
SELECT 'Notification', COUNT(*) FROM Notification
UNION ALL
SELECT 'Assignment', COUNT(*) FROM Assignment
UNION ALL
SELECT 'Submission_History', COUNT(*) FROM Submission_History;

-- Queries để test dữ liệu
SELECT 'Students with GPA info:' as Info;
SELECT u.fullname, s.gpa, s.completed_credits, s.total_credits, s.major 
FROM User u 
JOIN Student s ON u.id = s.student_id 
ORDER BY s.gpa DESC;

SELECT 'Current enrollments:' as Info;
SELECT u.fullname as student_name, c.course_name, e.final_point
FROM User u 
JOIN Enrollment e ON u.id = e.student_id
JOIN OpenCourses oc ON e.opencourse_id = oc.opencourse_id
JOIN Courses c ON oc.course_id = c.course_id
ORDER BY u.fullname;


-- USE edusmart;

-- -- Disable foreign key checks để có thể xóa dữ liệu dễ dàng
-- SET FOREIGN_KEY_CHECKS = 0;

-- -- Xóa dữ liệu theo thứ tự để tránh lỗi foreign key
-- DELETE FROM Submission_History;
-- DELETE FROM Assignment;
-- DELETE FROM Resources;
-- DELETE FROM Notification;
-- DELETE FROM Enrollment;
-- DELETE FROM Teaching_Assignment;
-- DELETE FROM OpenCourses;
-- DELETE FROM Courses;
-- DELETE FROM Student;
-- DELETE FROM Teacher;
-- DELETE FROM User;
-- DELETE FROM Department;

-- -- Reset AUTO_INCREMENT nếu có
-- ALTER TABLE Department AUTO_INCREMENT = 1;
-- ALTER TABLE User AUTO_INCREMENT = 1;
-- ALTER TABLE Student AUTO_INCREMENT = 1;
-- ALTER TABLE Teacher AUTO_INCREMENT = 1;
-- ALTER TABLE Courses AUTO_INCREMENT = 1;
-- ALTER TABLE OpenCourses AUTO_INCREMENT = 1;
-- ALTER TABLE Enrollment AUTO_INCREMENT = 1;
-- ALTER TABLE Teaching_Assignment AUTO_INCREMENT = 1;
-- ALTER TABLE Assignment AUTO_INCREMENT = 1;
-- ALTER TABLE Submission_History AUTO_INCREMENT = 1;
-- ALTER TABLE Notification AUTO_INCREMENT = 1;
-- ALTER TABLE Resources AUTO_INCREMENT = 1;
COMMIT;