USE edusmart;
SET FOREIGN_KEY_CHECKS = 0;

-- Insert department (manager_id là teacher_id)
INSERT INTO department (department_id, department_name, department_code, description, manager_id) VALUES
(1, 'Khoa Công nghệ Thông tin', 'CNTT', 'Khoa đào tạo về công nghệ thông tin và phần mềm', 2),
(2, 'Khoa Kinh tế', 'KT', 'Khoa đào tạo về kinh tế và quản trị kinh doanh', 4),
(3, 'Khoa Ngoại ngữ', 'NN', 'Khoa đào tạo các ngôn ngữ quốc tế', 5),
(4, 'Khoa Cơ khí', 'CK', 'Khoa đào tạo về kỹ thuật cơ khí và chế tạo máy', 6),
(5, 'Khoa Điện - Điện tử', 'DDT', 'Khoa đào tạo về kỹ thuật điện và điện tử', 7);

-- Insert user (teachers và students)
INSERT INTO user (id, department_id, username, password, fullname, address, email, birthday, user_type, created_at, updated_at) VALUES
-- Admin/teachers
(1, 1, 'admin', '123456', 'Nguyễn Văn Admin', '123 Đường ABC, TP.HCM', 'admin@edusmart.edu.vn', '1980-01-01', 'admin', '2024-01-01 08:00:00', NULL),
(2, 1, 'gv001', '123456', 'Trần Thị Lan', '456 Đường DEF, TP.HCM', 'ttlan@edusmart.edu.vn', '1985-03-15', 'teacher', '2024-01-01 08:00:00', NULL),
(3, 1, 'gv002', '123456', 'Lê Văn Minh', '789 Đường GHI, TP.HCM', 'lvminh@edusmart.edu.vn', '1982-07-20', 'teacher', '2024-01-01 08:00:00', NULL),
(4, 2, 'gv003', '123456', 'Phạm Thị Hoa', '321 Đường JKL, TP.HCM', 'pthoa@edusmart.edu.vn', '1987-12-10', 'teacher', '2024-01-01 08:00:00', NULL),
(5, 3, 'gv004', '123456', 'Võ Văn Tùng', '654 Đường MNO, TP.HCM', 'vvtung@edusmart.edu.vn', '1984-05-25', 'teacher', '2024-01-01 08:00:00', NULL),
(6, 4, 'gv005', '123456', 'Hoàng Thị Mai', '987 Đường PQR, TP.HCM', 'htmai@edusmart.edu.vn', '1986-09-18', 'teacher', '2024-01-01 08:00:00', NULL),
(7, 5, 'gv006', '123456', 'Đặng Văn Hải', '147 Đường STU, TP.HCM', 'dvhai@edusmart.edu.vn', '1983-11-30', 'teacher', '2024-01-01 08:00:00', NULL),
-- students
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

-- Insert student
INSERT INTO student (id, student_code, gpa, major, completed_credits, total_credits, type) VALUES
(8, 'SV001', 3.65, 'Khoa học máy tính', 85, 120, 'regular'),
(9, 'SV002', 3.80, 'Khoa học máy tính', 90, 120, 'regular'),
(10, 'SV003', 2.95, 'Khoa học máy tính', 75, 120, 'regular'),
(11, 'SV004', 3.45, 'Kinh tế', 80, 120, 'regular'),
(12, 'SV005', 3.20, 'Kinh tế', 78, 120, 'regular'),
(13, 'SV006', 3.55, 'Ngôn ngữ Anh', 82, 120, 'regular'),
(14, 'SV007', 3.30, 'Cơ khí', 76, 120, 'regular'),
(15, 'SV008', 3.40, 'Điện - Điện tử', 79, 120, 'regular'),
(16, 'SV009', 3.15, 'Khoa học máy tính', 72, 120, 'regular'),
(17, 'SV010', 3.60, 'Kinh tế', 84, 120, 'regular');

-- Insert teacher
INSERT INTO teacher (id, teacher_code, degree, research_area, years_of_experience) VALUES
(1, 'GV001', 'Ph.D Computer Science', 'Database Systems', 15),
(2, 'GV002', 'M.S Software Engineering', 'Web Development', 8),
(3, 'GV003', 'Ph.D Computer Science', 'Data Structures & Algorithms', 12),
(4, 'GV004', 'M.S Economics', 'Microeconomics', 10),
(5, 'GV005', 'M.A English Literature', 'Language teaching', 7),
(6, 'GV006', 'M.S Mechanical Engineering', 'Machine Design', 9),
(7, 'GV007', 'Ph.D Electrical Engineering', 'Circuit Analysis', 11);

-- Insert course
INSERT INTO course (course_id, department_id, course_name, course_code, description, credits) VALUES
(1, 1, 'Lập trình căn bản', 'IT101', 'Môn học cơ bản về lập trình với ngôn ngữ C/C++', 3),
(2, 1, 'Cấu trúc dữ liệu và giải thuật', 'IT201', 'Học về các cấu trúc dữ liệu và thuật toán cơ bản', 4),
(3, 1, 'Cơ sở dữ liệu', 'IT301', 'Thiết kế và quản trị cơ sở dữ liệu', 3),
(4, 1, 'Phát triển ứng dụng Web', 'IT401', 'Phát triển ứng dụng web với HTML, CSS, JavaScript, PHP', 4),
(5, 1, 'Trí tuệ nhân tạo', 'IT501', 'Giới thiệu về AI và machine learning', 3),
(6, 2, 'Kinh tế vi mô', 'EC101', 'Nguyên lý cơ bản của kinh tế vi mô', 3),
(7, 2, 'Kinh tế vĩ mô', 'EC201', 'Nguyên lý cơ bản của kinh tế vĩ mô', 3),
(8, 2, 'Quản trị kinh doanh', 'BA301', 'Các nguyên lý quản trị doanh nghiệp', 4),
(9, 2, 'Marketing căn bản', 'MK201', 'Giới thiệu về marketing và nghiên cứu thị trường', 3),
(10, 3, 'Tiếng Anh cơ bản', 'EN101', 'Tiếng Anh giao tiếp cơ bản', 2),
(11, 3, 'Tiếng Anh nâng cao', 'EN201', 'Tiếng Anh nâng cao cho sinh viên', 3),
(12, 3, 'Tiếng Nhật cơ bản', 'JP101', 'Tiếng Nhật cơ bản', 2),
(13, 4, 'Vẽ kỹ thuật', 'ME101', 'Cơ bản về vẽ kỹ thuật cơ khí', 3),
(14, 4, 'Cơ học vật rắn', 'ME201', 'Nghiên cứu về cơ học vật rắn', 4),
(15, 5, 'Mạch điện cơ bản', 'EE101', 'Phân tích mạch điện cơ bản', 3),
(16, 5, 'Điện tử số', 'EE201', 'Cơ bản về điện tử số và logic', 4);

-- Insert open_course
INSERT INTO open_course (open_course_id, course_id, max_student, term, year, registation_start, registation_end) VALUES
(1, 1, 30, 1, 2025, '2025-02-01 08:00:00', '2025-02-15 17:00:00'),
(2, 2, 25, 1, 2025, '2025-02-01 08:00:00', '2025-02-15 17:00:00'),
(3, 3, 35, 1, 2025, '2025-02-01 08:00:00', '2025-02-15 17:00:00'),
(4, 6, 40, 1, 2025, '2025-02-01 08:00:00', '2025-02-15 17:00:00'),
(5, 10, 50, 1, 2025, '2025-02-01 08:00:00', '2025-02-15 17:00:00'),
(6, 13, 20, 1, 2025, '2025-02-01 08:00:00', '2025-02-15 17:00:00'),
(7, 15, 25, 1, 2025, '2025-02-01 08:00:00', '2025-02-15 17:00:00'),
(8, 4, 30, 2, 2025, '2025-06-01 08:00:00', '2025-06-15 17:00:00'),
(9, 7, 35, 2, 2025, '2025-06-01 08:00:00', '2025-06-15 17:00:00'),
(10, 11, 40, 2, 2025, '2025-06-01 08:00:00', '2025-06-15 17:00:00');

-- Insert teaching_assignment (thêm role)
INSERT INTO teaching_assignment (assignment_id, open_course_id, teacher_id, role, created_at) VALUES
(1, 1, 2, 'Lý Thuyết', '2025-01-15 08:00:00'),
(2, 2, 3, 'Lý Thuyết', '2025-01-15 08:00:00'),
(3, 3, 2, 'Lý Thuyết', '2025-01-15 08:00:00'),
(4, 4, 4, 'Lý Thuyết', '2025-01-15 08:00:00'),
(5, 5, 5, 'Lý Thuyết', '2025-01-15 08:00:00'),
(6, 6, 6, 'Lý Thuyết', '2025-01-15 08:00:00'),
(7, 7, 7, 'Lý Thuyết', '2025-01-15 08:00:00'),
(8, 8, 3, 'Thực Hành', '2025-05-15 08:00:00'),
(9, 9, 4, 'Thực Hành', '2025-05-15 08:00:00'),
(10, 10, 5, 'Thực Hành', '2025-05-15 08:00:00');

-- Insert enrollment
INSERT INTO enrollment (enrollment_id, open_course_id, student_id, enrolled_at, status, theoretical_point, practical_point, midterm_point, endterm_point, final_point) VALUES
(1, 1, 8, '2025-02-16 09:00:00', 'pass', 8.5, 7.0, 7.5, 8.0, 7.75),
(2, 1, 9, '2025-02-16 10:00:00', 'pass', 9.0, 8.5, 8.8, 9.2, 8.88),
(3, 1, 10, '2025-02-16 11:00:00', 'fail', 6.5, 7.0, 6.8, 4.2, 4.88),
(4, 1, 16, '2025-02-16 14:00:00', 'pass', 8.0, 7.5, 7.8, 8.5, 7.95),
(5, 2, 8, '2025-02-16 09:30:00', 'enrolled', NULL, NULL, NULL, NULL, NULL),
(6, 2, 9, '2025-02-16 10:30:00', 'pass', 9.5, 9.0, 9.2, 9.5, 9.3),
(7, 2, 10, '2025-02-16 11:30:00', 'fail', 5.5, 6.0, 5.8, 3.5, 4.25),
(8, 3, 8, '2025-02-16 15:00:00', 'pass', 8.0, 8.5, 8.2, 8.8, 8.38),
(9, 3, 16, '2025-02-16 15:30:00', 'enrolled', NULL, NULL, NULL, NULL, NULL),
(10, 4, 11, '2025-02-16 08:00:00', 'pass', 8.5, NULL, 8.0, 8.5, 8.33),
(11, 4, 12, '2025-02-16 08:30:00', 'fail', 7.5, NULL, 7.8, 4.0, 4.93),
(12, 4, 17, '2025-02-16 09:00:00', 'enrolled', NULL, NULL, NULL, NULL, NULL),
(13, 5, 13, '2025-02-16 13:00:00', 'pass', 8.0, 8.5, 8.2, 8.3, 8.2),
(14, 5, 8, '2025-02-16 13:30:00', 'fail', 7.0, 7.5, 7.2, 3.8, 4.83),
(15, 5, 11, '2025-02-16 14:00:00', 'enrolled', NULL, NULL, NULL, NULL, NULL),
(16, 3, 16, '2025-08-12 15:30:00', 'pending', NULL, NULL, NULL, NULL, NULL),
(17, 4, 17, '2025-08-12 09:00:00', 'pending', NULL, NULL, NULL, NULL, NULL),
(18, 5, 11, '2025-08-12 14:00:00', 'pending', NULL, NULL, NULL, NULL, NULL);

-- Insert resource
INSERT INTO resource (resource_id, teacher_id, open_course_id, name, type, filepath) VALUES
(1, 2, 1, 'Slide bài giảng 1 - Giới thiệu lập trình', 'presentation', '/resource/it101/slide1.pptx'),
(2, 2, 1, 'Bài tập tuần 1', 'exercise', '/resource/it101/exercise1.pdf'),
(3, 2, 1, 'Code mẫu Hello World', 'code', '/resource/it101/hello.cpp'),
(4, 3, 2, 'Slide Stack và Queue', 'presentation', '/resource/it201/stack_queue.pptx'),
(5, 3, 2, 'Bài tập về Stack', 'exercise', '/resource/it201/stack_exercise.pdf'),
(6, 2, 3, 'Thiết kế ERD - Hướng dẫn', 'document', '/resource/it301/erd_guide.docx'),
(7, 4, 4, 'Tài liệu Kinh tế vi mô', 'document', '/resource/ec101/micro_economics.pdf'),
(8, 5, 5, 'English Grammar Basics', 'document', '/resource/en101/grammar_basics.pdf'),
(9, 6, 6, 'Bản vẽ kỹ thuật mẫu', 'drawing', '/resource/me101/sample_drawing.dwg'),
(10, 7, 7, 'Sơ đồ mạch điện', 'diagram', '/resource/ee101/circuit_diagram.pdf');

-- Insert notification
INSERT INTO notification (notification_id, teacher_id, open_course_id, title, content, created_at) VALUES
(1, 2, 1, 'Chào mừng', 'Chào mừng các bạn đến với môn Lập trình căn bản. Buổi học đầu tiên sẽ diễn ra vào thứ 2 tuần tới.', '2025-02-20 08:00:00'),
(2, 2, 1, 'Nhắc nhở nộp bài tập', 'Nhắc nhở: Bài tập tuần 1 cần nộp trước 17h ngày thứ 6 tuần này.', '2025-02-28 16:00:00'),
(3, 3, 2, 'Thông báo kiểm tra giữa kỳ', 'Thông báo: Kiểm tra giữa kỳ sẽ diễn ra vào tuần 8, các bạn chuẩn bị kỹ.', '2025-03-15 10:00:00'),
(4, 2, 3, 'Thông báo bài lab', 'Bài lab tuần này sẽ thực hành thiết kế database cho một ứng dụng thực tế.', '2025-03-20 14:00:00'),
(5, 4, 4, 'Tài liệu bổ sung', 'Tài liệu bổ sung về chương 3 đã được upload, các bạn tham khảo thêm.', '2025-03-10 11:00:00'),
(6, 5, 5, 'English speaking practice', 'English speaking practice session will be held every Friday at 2 PM.', '2025-02-25 13:00:00'),
(7, 6, 6, 'Lưu ý dụng cụ vẽ', 'Lưu ý: Cần mang đầy đủ dụng cụ vẽ cho buổi thực hành tuần tới.', '2025-03-05 09:00:00'),
(8, 7, 7, 'Thông báo thí nghiệm', 'Thí nghiệm tuần này sẽ đo đạc các thông số mạch RLC, chuẩn bị báo cáo.', '2025-03-12 15:00:00');

-- Insert assignment
INSERT INTO assignment (assignment_id, teacher_id, open_course_id, title, start_date, due_date, max_score, filepath, description) VALUES
(1, 2, 1, 'Bài tập 1: Hello World và biến', '2025-03-01 08:00:00', '2025-03-08 23:59:59', 10.0, '/assignments/it101/assignment1.pdf', 'Viết chương trình Hello World và thực hành với các loại biến cơ bản'),
(2, 2, 1, 'Bài tập 2: Cấu trúc điều khiển', '2025-03-15 08:00:00', '2025-03-22 23:59:59', 10.0, '/assignments/it101/assignment2.pdf', 'Sử dụng if-else, switch-case, và các vòng lặp'),
(3, 3, 2, 'Project: Cài đặt Stack bằng Array', '2025-03-10 08:00:00', '2025-03-24 23:59:59', 20.0, '/assignments/it201/stack_project.pdf', 'Cài đặt cấu trúc dữ liệu Stack và các phép toán cơ bản'),
(4, 2, 3, 'Thiết kế ERD cho hệ thống thư viện', '2025-04-01 08:00:00', '2025-04-15 23:59:59', 25.0, '/assignments/it301/library_erd.pdf', 'Phân tích yêu cầu và thiết kế ERD cho hệ thống quản lý thư viện'),
(5, 4, 4, 'Bài tập về Cung và Cầu', '2025-03-05 08:00:00', '2025-03-12 23:59:59', 15.0, '/assignments/ec101/supply_demand.pdf', 'Giải các bài tập về đường cung và đường cầu'),
(6, 5, 5, 'Writing assignment: My Future Career', '2025-03-20 08:00:00', '2025-03-27 23:59:59', 10.0, '/assignments/en101/career_essay.pdf', 'Write a 300-word essay about your future career plans');

-- Insert submission_history
INSERT INTO submission_history (submission_id, student_id, assignment_id, filepath, submitted_at, score) VALUES
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

SET FOREIGN_KEY_CHECKS = 1;
COMMIT;