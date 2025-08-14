"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, GraduationCap, BookOpen, Trophy, CheckCircle, Calendar, User, Users, XCircle } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { StudentService } from "@/services/studentService"
import { StudentInfo } from "@/types/student"
import { UserService } from "@/services/userService"
import { CourseService } from "@/services/courseService"
import { MyCourse } from "@/types/course"

export default function StudentCourses() {
  const [studentInfo, setStudentInfo] = useState<StudentInfo | null>(null);
  const [completedCourses, setCompletedCourses] = useState<MyCourse[]>([]);
  const [currentCourses, setCurrentCourses] = useState<MyCourse[]>([])
  
  useEffect(() => {
    const fetchStudentInfo = async () => {
    try {
      var token = localStorage.getItem("token");
      if(!token) {
        window.location.href = "/login";
      }

      const [studentResponse, coursesResponse] = await Promise.all([
        UserService.getCurrentUser(),
        CourseService.getMyCourses()
      ])

      console.log("User data:", studentResponse);
      console.log("Courses data:", coursesResponse);

      if(studentResponse) {
        setStudentInfo(studentResponse.data)
      }
      if(coursesResponse) {
        const courses: MyCourse[] = coursesResponse.data;
        const completed = courses.filter(course => 
          course.status?.toLowerCase() === 'pass' || 
          course.status?.toLowerCase() === 'fail' 
        )
        console.log("completed:", completed);
        setCompletedCourses(completed);
        console.log(" completed Courses:", completedCourses);

        const current = courses.filter(course => 
          course.status?.toLowerCase() === 'enrolled'  
        )
        console.log(" current:", current);
        setCurrentCourses(current);
        console.log(" current Courses:", currentCourses);

      }
    } catch (error: any) {
      console.error("Error fetching data:", error);
    }
    }
    fetchStudentInfo();
  }, [])

  const getGPAColor = (gpa: number) => {
    if (gpa >= 3.6) return "text-green-600"
    if (gpa >= 3.0) return "text-blue-600"
    if (gpa >= 2.5) return "text-yellow-600"
    return "text-red-600"
  }


  const getCurrentCredits = () => {
    return currentCourses.reduce((total, course) => total + Number(course.credits), 0)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Tiến độ học tập</h1>
        <p className="text-gray-600 mt-2">
          Quản lý và theo dõi các khóa học đang tham gia
        </p>
      </div>
      {/* Student Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Info */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 h-full">
          <CardHeader>
            <div className="flex items-center gap-2">
              <User className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-bold text-gray-900">
                Thông tin sinh viên
              </span>
            </div>
          </CardHeader>
          <CardContent className="">
          <div className="grid grid-cols-3">
            <div className="col-span-2 flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarFallback className="text-lg font-bold bg-blue-100 text-blue-600">
                  {studentInfo?.fullname
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="text-xl font-bold text-gray-900">
                  {studentInfo?.fullname}
                </div>
                <div className="text-base text-gray-600">
                  <p className="text-sm text-gray-500">{studentInfo?.email}</p>
                  <p className="text-sm text-gray-500">
                    {studentInfo?.student_code} • {studentInfo?.major}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center items-center">
                <div className="flex justify-center mb-2">
                  <Trophy className="h-5 w-5 text-yellow-600 mr-2" />
                  <span className="text-sm font-medium text-gray-600">GPA</span>
                </div>
                <div
                  className={`text-2xl font-bold ${getGPAColor(
                    studentInfo?.gpa ?? 0
                  )}`}
                >
                  {studentInfo?.gpa?.toFixed(2) ?? "0.00"}
                </div>
                <div className="text-xs text-gray-500">/ 4.0</div>
              </div>
          </div>
          </CardContent>
        </Card>

        {/* Progress Info */}
        <Card className="bg-gradient-to-r from-green-50 to-green-50 border-green-200 h-full">
          <CardHeader>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-green-600" />
              <span className="text-lg font-bold text-gray-900">
                Tiến độ tốt nghiệp
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-600">
                  Tín chỉ tích lũy
                </span>
                <span className="text-sm text-gray-500">
                  {studentInfo?.completed_credits} /{" "}
                  {studentInfo?.total_credits}
                </span>
              </div>
              <Progress
                value={
                  ((studentInfo?.completed_credits ?? 0) /
                    (studentInfo?.total_credits ?? 1)) *
                  100
                }
                className="h-3 bg-gray-300 [&>div]:bg-gradient-to-r [&>div]:from-green-900 [&>div]:to-emerald-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Còn{" "}
                {(studentInfo?.total_credits ?? 0) -
                  (studentInfo?.completed_credits ?? 0)}{" "}
                tín chỉ để tốt nghiệp
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Tiến độ</span>
              <span className="text-sm text-gray-500">
                {studentInfo?.completed_credits
                  ? Math.round(
                      (studentInfo.completed_credits /
                        studentInfo.total_credits) *
                        100
                    )
                  : 0}
                %
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card className="">
        <CardHeader>
          <CardTitle>Khoá học của tôi</CardTitle>
        </CardHeader>
        {/* Courses Tabs */}
        <CardContent>
          <Tabs defaultValue="current" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="current">Khóa học hiện tại</TabsTrigger>
              <TabsTrigger value="completed">
                Khóa học đã hoàn thành
              </TabsTrigger>
            </TabsList>

            {/* Current Courses Tab */}
            <TabsContent value="current" className="space-y-6">
              {currentCourses.length === 0 ? (
                <div className="text-center py-12">
                  <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Chưa có khóa học hiện tại
                  </h3>
                  <p className="text-gray-500">
                    Bạn chưa đăng ký khóa học nào trong học kỳ này
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {currentCourses.map((course) => (
                    <Card
                      key={course.course_code}
                      className="hover:shadow-lg transition-all duration-200 border-l-4 border-l-blue-500"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <CardTitle className="text-lg font-semibold text-gray-900 mb-1">
                              {course.course_name}
                            </CardTitle>
                            <CardDescription className="text-sm text-gray-600 font-medium">
                              {course.course_code}
                            </CardDescription>
                          </div>
                          <Badge className="bg-green-100 text-green-700 border-green-200">
                            {course.status}
                          </Badge>
                        </div>

                        {/* Teachers Section */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-1 text-xs font-medium text-gray-600 uppercase tracking-wide">
                            <Users className="w-3 h-3" />
                            Giảng viên
                          </div>
                          <div className="space-y-2">
                            {Array.isArray(course.teachers) ? (
                              course.teachers.map((teacher, index) => (
                                <div
                                  key={teacher.teacher_code || index}
                                  className="flex items-center gap-2"
                                >
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                      {teacher.fullname
                                        ? `${teacher.fullname} - ${teacher.role}`
                                        : teacher.role}
                                    </p>
                                    {teacher.email && (
                                      <p className="text-xs text-gray-500 truncate">
                                        {teacher.email}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              ))
                            ) : (
                              // Fallback for string format
                              <div className="flex items-center gap-2">
                                <Avatar className="h-6 w-6">
                                  <AvatarFallback className="text-xs bg-blue-100 text-blue-600">
                                    GV
                                  </AvatarFallback>
                                </Avatar>
                                <p className="text-sm font-medium text-gray-900">
                                  {course.teachers}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <div className="space-y-4">
                          {/* Course Info */}
                          <div className="grid grid-cols-2 gap-4 p-3 bg-gray-50 rounded-lg">
                            <div className="text-center">
                              <div className="text-lg font-bold text-blue-600">{`${course.credits}`}</div>
                              <div className="text-xs text-gray-600">
                                Tín chỉ
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-green-600">
                                {Array.isArray(course.teachers)
                                  ? course.teachers.length
                                  : 1}
                              </div>
                              <div className="text-xs text-gray-600">
                                Giảng viên
                              </div>
                            </div>
                          </div>

                          {/* Action Button */}
                          <Link href={`/student/courses/${course.course_id}`}>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700">
                              <BookOpen className="w-4 h-4 mr-2" />
                              Vào khóa học
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            {/* Completed Courses Tab */}
            <TabsContent value="completed" className="space-y-6">
              {/* Completed Courses Grid */}
              {completedCourses.length === 0 ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Chưa có khóa học đã hoàn thành
                  </h3>
                  <p className="text-gray-500">
                    Bạn chưa hoàn thành khóa học nào
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {completedCourses.map((course) => (
                    <Card
                      key={course.course_code}
                      className="hover:shadow-lg transition-all duration-200 border-l-4 border-l-green-500"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <CardTitle className="text-lg font-semibold text-gray-900 mb-1">
                              {course.course_name}
                            </CardTitle>
                            <CardDescription className="text-sm text-gray-600 font-medium">
                              {course.course_code}
                            </CardDescription>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            {course.status?.toLowerCase() === "pass" ? (
                              <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                {course.status}
                              </Badge>
                            ) : (
                              <Badge className="bg-red-100 text-red-700 border-red-200 text-xs">
                                <XCircle className="w-3 h-3 mr-1" />
                                {course.status}
                              </Badge>
                            )}
                          </div>
                        </div>

                        {/* Teachers Section - THÊM MỚI */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-1 text-xs font-medium text-gray-600 uppercase tracking-wide">
                            <Users className="w-3 h-3" />
                            Giảng viên
                          </div>
                          <div className="space-y-1">
                            {Array.isArray(course.teachers) ? (
                              course.teachers
                                .slice(0, 2)
                                .map((teacher, index) => (
                                  <div
                                    key={teacher.teacher_code || index}
                                    className="flex items-center gap-2"
                                  >
                                    <Avatar className="h-5 w-5">
                                      <AvatarFallback className="text-xs bg-gray-100 text-gray-600">
                                        {teacher.fullname
                                          ? teacher.fullname
                                              .split(" ")
                                              .map((n) => n[0])
                                              .join("")
                                          : "GV"}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 min-w-0">
                                      <p className="text-sm text-gray-700 truncate">
                                        {teacher.fullname
                                          ? `${teacher.fullname} - ${teacher.role}`
                                          : teacher.role}
                                      </p>
                                      {teacher.email && (
                                        <p className="text-xs text-gray-500 truncate">
                                          {teacher.email}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                ))
                            ) : (
                              // Fallback for string format
                              <div className="flex items-center gap-2">
                                <Avatar className="h-5 w-5">
                                  <AvatarFallback className="text-xs bg-gray-100 text-gray-600">
                                    GV
                                  </AvatarFallback>
                                </Avatar>
                                <p className="text-sm text-gray-700">
                                  {course.teachers}
                                </p>
                              </div>
                            )}
                            {Array.isArray(course.teachers) &&
                              course.teachers.length > 2 && (
                                <p className="text-xs text-gray-500 ml-7">
                                  +{course.teachers.length - 2} giảng viên khác
                                </p>
                              )}
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <div className="space-y-4">
                          {/* Course Info */}
                          <div className="grid grid-cols-2 gap-2">
                            <div className="text-center p-2 bg-blue-50 rounded-lg">
                              <div className="text-sm font-bold text-blue-600">{`${course.credits}`}</div>
                              <div className="text-xs text-gray-600">
                                Tín chỉ
                              </div>
                            </div>
                            <div className="text-center p-2 bg-gray-50 rounded-lg">
                              <div className="text-sm font-bold text-gray-600">
                                {Array.isArray(course.teachers)
                                  ? course.teachers.length
                                  : 1}
                              </div>
                              <div className="text-xs text-gray-600">GV</div>
                            </div>
                          </div>

                          {/* Semester Info */}
                          <div className="p-2 bg-yellow-50 rounded-lg">
                            <div className="text-sm text-yellow-800 flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {`HK${course.term} - ${course.year}`}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              className="flex-1 text-sm"
                            >
                              <FileText className="w-4 h-4 mr-1" />
                              Chi tiết
                            </Button>
                            <Button
                              variant="outline"
                              className="flex-1 text-sm"
                            >
                              <Trophy className="w-4 h-4 mr-1" />
                              Kết quả
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}