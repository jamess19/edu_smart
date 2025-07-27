"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Users, Download, Eye, User, GraduationCap, BookOpen, Trophy, CheckCircle, Calendar, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function StudentCourses() {
  // Thông tin sinh viên
  const studentInfo = {
    name: "Nguyễn Văn A",
    studentId: "20210001",
    email: "student@edusmart.edu",
    avatar: "/placeholder.svg?height=80&width=80",
    gpa: 3.65,
    totalCredits: 120,
    completedCredits: 85,
    major: "Khoa học máy tính",
  }

  // Khóa học hiện tại (đang học)
  const currentCourses = [
    {
      id: 1,
      name: "Lập trình Web",
      code: "IT3080",
      teacher: "TS. Nguyễn Văn A",
      credits: 3,
      progress: 75,
      semester: "HK1 - 2024",
      status: "Đang học",
      schedule: "Thứ 2, 4 (08:00-09:30)",
      room: "TC-205"
    },
    {
      id: 2,
      name: "Cơ sở dữ liệu",
      code: "IT3090",
      teacher: "PGS. Trần Thị B",
      credits: 3,
      progress: 60,
      semester: "HK1 - 2024",
      status: "Đang học",
      schedule: "Thứ 3, 5 (14:00-15:30)",
      room: "TC-101",
    },
    {
      id: 3,
      name: "Mạng máy tính",
      code: "IT3070",
      teacher: "TS. Lê Văn C",
      credits: 4,
      progress: 45,
      semester: "HK1 - 2024",
      status: "Đang học",
      schedule: "Thứ 6 (08:00-11:30)",
      room: "TC-304",
    },
  ]

  // Khóa học đã hoàn thành
  const completedCourses = [
    {
      id: 4,
      name: "Lập trình hướng đối tượng",
      code: "IT3020",
      teacher: "TS. Phạm Văn D",
      credits: 3,
      grade: "A",
      gradePoint: 4.0,
      semester: "HK2 - 2023",
      status: "Hoàn thành",
      finalScore: 8.5,
      completedDate: "2023-12-15",
    },
    {
      id: 5,
      name: "Cấu trúc dữ liệu và giải thuật",
      code: "IT3010",
      teacher: "PGS. Hoàng Thị E",
      credits: 4,
      grade: "B+",
      gradePoint: 3.5,
      semester: "HK1 - 2023",
      status: "Hoàn thành",
      finalScore: 7.8,
      completedDate: "2023-06-20",
    },
    {
      id: 6,
      name: "Toán rời rạc",
      code: "MI1140",
      teacher: "TS. Nguyễn Văn F",
      credits: 3,
      grade: "A-",
      gradePoint: 3.7,
      semester: "HK2 - 2022",
      status: "Hoàn thành",
      finalScore: 8.2,
      completedDate: "2022-12-10",
    },
    {
      id: 7,
      name: "Lập trình C cơ bản",
      code: "IT1000",
      teacher: "ThS. Trần Văn G",
      credits: 3,
      grade: "B",
      gradePoint: 3.0,
      semester: "HK1 - 2022",
      status: "Hoàn thành",
      finalScore: 7.0,
      completedDate: "2022-06-15",
    },
  ]

  const getGPAColor = (gpa: number) => {
    if (gpa >= 3.6) return "text-green-600"
    if (gpa >= 3.0) return "text-blue-600"
    if (gpa >= 2.5) return "text-yellow-600"
    return "text-red-600"
  }

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return "text-green-600 bg-green-100"
    if (grade.startsWith('B')) return "text-blue-600 bg-blue-100"
    if (grade.startsWith('C')) return "text-yellow-600 bg-yellow-100"
    return "text-red-600 bg-red-100"
  }

  const getCurrentCredits = () => {
    return currentCourses.reduce((total, course) => total + course.credits, 0)
  }

  const getCompletedCredits = () => {
    return completedCourses.reduce((total, course) => total + course.credits, 0)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Tiến độ học tập</h1>
        <p className="text-gray-600 mt-2">Quản lý và theo dõi các khóa học đang tham gia</p>
      </div>

      {/* Student Info Card */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarFallback className="text-lg font-bold bg-blue-100 text-blue-600">
                {studentInfo.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <CardTitle className="text-xl text-gray-900">{studentInfo.name}</CardTitle>
              <CardDescription className="text-base text-gray-600">
                MSSV: {studentInfo.studentId} • {studentInfo.major}
              </CardDescription>
              <p className="text-sm text-gray-500 mt-1">{studentInfo.email}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Trophy className="h-5 w-5 text-yellow-600 mr-2" />
                <span className="text-sm font-medium text-gray-600">GPA</span>
              </div>
              <div className={`text-2xl font-bold ${getGPAColor(studentInfo.gpa)}`}>
                {studentInfo.gpa.toFixed(2)}
              </div>
              <div className="text-xs text-gray-500">/ 4.0</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-gray-600">Tín chỉ tích lũy</span>
              </div>
              <div className="text-2xl font-bold text-blue-600">
                {studentInfo.completedCredits}
              </div>
              <div className="text-xs text-gray-500">/ {studentInfo.totalCredits} tín chỉ</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <GraduationCap className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm font-medium text-gray-600">Tín chỉ học kỳ</span>
              </div>
              <div className="text-2xl font-bold text-green-600">
                {getCurrentCredits()}
              </div>
              <div className="text-xs text-gray-500">tín chỉ</div>
            </div>
          </div>
          
          {/* Progress Bar for Credits */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">Tiến độ tốt nghiệp</span>
              <span className="text-sm text-gray-500">
                {Math.round((studentInfo.completedCredits / studentInfo.totalCredits) * 100)}%
              </span>
            </div>
            <Progress 
              value={(studentInfo.completedCredits / studentInfo.totalCredits) * 100} 
              className="h-3"
            />
            <p className="text-xs text-gray-500 mt-1">
              Còn {studentInfo.totalCredits - studentInfo.completedCredits} tín chỉ để tốt nghiệp
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="">
          <CardHeader>
            <CardTitle>Khoá học của tôi</CardTitle>
          </CardHeader>
      {/* Courses Tabs */}
      <CardContent>
      <Tabs defaultValue="current" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="current">
            Khóa học hiện tại
          </TabsTrigger>
          <TabsTrigger value="completed">
            Khóa học đã hoàn thành
          </TabsTrigger>
        </TabsList>

        {/* Current Courses Tab */}
        <TabsContent value="current" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {currentCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{course.name}</CardTitle>
                      <CardDescription>
                        {course.code} • {course.teacher}
                      </CardDescription>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline">{course.credits} tín chỉ</Badge>
                        <Badge className="bg-green-100 text-green-800">{course.status}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Schedule Info */}
                    <div className="text-sm space-y-1">
                      <p className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {course.schedule}
                      </p>
                      <p className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {course.room}
                      </p>
                    </div>


                    <Link href={`/student/courses/${course.id}`}>
                      <Button className="w-full">Vào khóa học</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Completed Courses Tab */}
        <TabsContent value="completed" className="space-y-6">
          {/* Completed Courses Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {completedCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{course.name}</CardTitle>
                      <CardDescription>
                        {course.code} • {course.teacher}
                      </CardDescription>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline">{course.credits} tín chỉ</Badge>
                        <Badge variant="secondary">{course.semester}</Badge>
                      </div>
                    </div>
                    <Badge className={`${getGradeColor(course.grade)} border-0`}>
                      {course.grade}
                    </Badge>
                  </div>
                  <Badge className="bg-green-100 text-green-800 mt-2 text-sm">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {course.status}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">

                    {/* Grade Info */}
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Điểm tổng kết</span>
                        <span className="text-lg font-bold text-blue-600">
                          {course.gradePoint}/4.0
                        </span>
                      </div>
                    </div>

                    {/* Status */}
                    <div className="flex gap-2">
                      <Button variant="outline" className="w-full">
                        <FileText className="w-4 h-4 mr-2" />
                        Xem chi tiết
                      </Button>
                    </div>

                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      </CardContent>
      </Card>
    </div>
  )
}