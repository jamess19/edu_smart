"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText, Download, Bell, Calendar, Upload, Eye, Clock, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function StudentCourseDetail() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isSubmissionDialogOpen, setIsSubmissionDialogOpen] = useState(false)
  const [selectedAssignment, setSelectedAssignment] = useState<any>(null)

  // Mock data cho khóa học
  const course = {
    id: 1,
    name: "Lập trình Web",
    code: "IT3080",
    semester: "HK1 2024",
    teacher: "TS. Nguyễn Văn A",
    description: "Khóa học về phát triển ứng dụng web sử dụng HTML, CSS, JavaScript và các framework hiện đại",
    progress: 75,
    grade: "8.5",
  }

  // Tài liệu
  const materials = [
    {
      id: 1,
      name: "Bài giảng 1 - Giới thiệu HTML",
      type: "PDF",
      size: "2.5 MB",
      uploadDate: "2024-12-01",
      downloaded: true,
    },
    {
      id: 2,
      name: "Slide CSS Fundamentals",
      type: "PPTX",
      size: "5.2 MB",
      uploadDate: "2024-12-03",
      downloaded: false,
    },
    {
      id: 3,
      name: "Lab 1 - HTML Forms",
      type: "ZIP",
      size: "1.8 MB",
      uploadDate: "2024-12-05",
      downloaded: true,
    },
    {
      id: 4,
      name: "JavaScript Basics",
      type: "PDF",
      size: "3.1 MB",
      uploadDate: "2024-12-08",
      downloaded: false,
    },
  ]

  // Thông báo
  const announcements = [
    {
      id: 1,
      title: "Thông báo lịch thi giữa kỳ",
      content:
        "Lịch thi giữa kỳ sẽ diễn ra vào ngày 20/12/2024 tại phòng A101. Sinh viên cần mang theo thẻ sinh viên và dụng cụ học tập.",
      date: "2024-12-10",
      priority: "high",
      read: true,
    },
    {
      id: 2,
      title: "Cập nhật tài liệu bài giảng",
      content: "Đã cập nhật tài liệu bài giảng về JavaScript. Các em vui lòng tải về và ôn tập.",
      date: "2024-12-08",
      priority: "medium",
      read: false,
    },
    {
      id: 3,
      title: "Hướng dẫn làm bài tập lớn",
      content: "File hướng dẫn chi tiết về bài tập lớn đã được upload. Deadline nộp bài là 25/12/2024.",
      date: "2024-12-05",
      priority: "high",
      read: true,
    },
  ]

  // Bài tập và Deadline
  const assignments = [
    {
      id: 1,
      title: "Bài tập lớn - Website bán hàng",
      description: "Xây dựng website bán hàng hoàn chỉnh với giỏ hàng và thanh toán",
      dueDate: "2024-12-25",
      status: "pending",
      type: "project",
      submissionDate: null,
      grade: null,
      feedback: null,
    },
    {
      id: 2,
      title: "Lab 2 - CSS Responsive",
      description: "Thực hành tạo layout responsive với CSS Grid và Flexbox",
      dueDate: "2024-12-20",
      status: "submitted",
      type: "lab",
      submissionDate: "2024-12-18",
      grade: 8.5,
      feedback: "Bài làm tốt, layout responsive đúng yêu cầu.",
    },
    {
      id: 3,
      title: "Bài tập JavaScript DOM",
      description: "Thực hành thao tác DOM với JavaScript",
      dueDate: "2024-12-15",
      status: "graded",
      type: "homework",
      submissionDate: "2024-12-14",
      grade: 9.0,
      feedback: "Xuất sắc! Code sạch và logic rõ ràng.",
    },
  ]

  // Danh sách sinh viên trong lớp
  const classmates = [
    { id: 1, mssv: "20210001", name: "Nguyễn Văn A", email: "nguyenvana@email.com" },
    { id: 2, mssv: "20210002", name: "Trần Thị B", email: "tranthib@email.com" },
    { id: 3, mssv: "20210003", name: "Lê Văn C", email: "levanc@email.com" },
    { id: 4, mssv: "20210004", name: "Phạm Thị D", email: "phamthid@email.com" },
    { id: 5, mssv: "20210005", name: "Hoàng Văn E", email: "hoangvane@email.com" },
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return "📄"
      case "PPTX":
        return "📊"
      case "ZIP":
        return "📦"
      default:
        return "📄"
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">Quan trọng</Badge>
      case "medium":
        return <Badge variant="secondary">Bình thường</Badge>
      default:
        return <Badge variant="outline">Thông tin</Badge>
    }
  }

  const getAssignmentTypeBadge = (type: string) => {
    switch (type) {
      case "project":
        return <Badge variant="default">Đồ án</Badge>
      case "lab":
        return <Badge variant="secondary">Thực hành</Badge>
      default:
        return <Badge variant="outline">Bài tập</Badge>
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "submitted":
      case "graded":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "overdue":
        return <AlertCircle className="h-5 w-5 text-red-600" />
      default:
        return <Clock className="h-5 w-5 text-orange-600" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "graded":
        return <Badge variant="default">Đã chấm điểm</Badge>
      case "submitted":
        return <Badge variant="secondary">Đã nộp</Badge>
      case "overdue":
        return <Badge variant="destructive">Quá hạn</Badge>
      default:
        return <Badge variant="outline">Chưa nộp</Badge>
    }
  }

  const getDaysUntilDue = (dueDate: string) => {
    const due = new Date(dueDate)
    const now = new Date()
    const diffTime = due.getTime() - now.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const handleSubmitAssignment = (assignment: any) => {
    setSelectedAssignment(assignment)
    setIsSubmissionDialogOpen(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {course.name} ({course.code})
              </h1>
              <p className="text-gray-600">
                {course.teacher} • {course.semester}
              </p>
            </div>
            <div className="flex gap-2">
              <Link href="/student/courses">
                <Button variant="outline">Về danh sách khóa học</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Tổng quan</TabsTrigger>
            <TabsTrigger value="announcements">Thông báo</TabsTrigger>
            <TabsTrigger value="assignments">Bài tập & Deadline</TabsTrigger>
            <TabsTrigger value="classmates">Danh sách lớp</TabsTrigger>
          </TabsList>

          {/* Tổng quan */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="w-full">
                <CardHeader>
                  <CardTitle className="text-xl">Thông tin khóa học</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg">
                    <div>
                      <span className="text-sm text-gray-600">Giảng viên:</span>
                      <p className="font-medium">{course.teacher}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Học kỳ:</span>
                      <p className="font-medium">{course.semester}</p>
                    </div>
                    <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Hoàn thành khóa học</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-3" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Điểm hiện tại:</span>
                        <div className="font-bold text-lg">{course.grade}/10</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Xếp loại:</span>
                        <div className="font-bold text-lg text-green-600">Giỏi</div>
                      </div>
                    </div>
                  </div>
                  </div>
                </CardContent>
              </Card>
            <div className="gap-2">
              <Card className="mb-2">
                <CardContent className="px-6">
                  <div className="flex items-center">
                    <FileText className="h-8 w-8 text-blue-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Tài liệu</p>
                      <p className="text-2xl font-bold text-gray-900">{materials.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-2">
                <CardContent className="px-6 py-2">
                  <div className="flex items-center">
                    <Bell className="h-8 w-8 text-green-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Thông báo mới</p>
                      <p className="text-2xl font-bold text-gray-900">{announcements.filter((a) => !a.read).length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-2">
                <CardContent className="px-6 py-2">
                  <div className="flex items-center">
                    <Calendar className="h-8 w-8 text-purple-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Bài tập chưa nộp</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {assignments.filter((a) => a.status === "pending").length}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            </div>
            <Card>
              <CardHeader>
                <CardTitle>Tài liệu khóa học</CardTitle>
                <CardDescription>Tải về các tài liệu học tập do giảng viên cung cấp</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {materials.map((material) => (
                    <div key={material.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl">{getTypeIcon(material.type)}</span>
                        <div>
                          <h3 className="font-medium">{material.name}</h3>
                          <p className="text-sm text-gray-600">
                            {material.type} • {material.size} • {material.uploadDate}
                            {material.downloaded && <span className="ml-2 text-green-600">• Đã tải</span>}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Tải về
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Thông báo */}
          <TabsContent value="announcements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Thông báo từ giảng viên</CardTitle>
                <CardDescription>Các thông báo quan trọng về khóa học</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {announcements.map((announcement) => (
                    <Card
                      key={announcement.id}
                      className={`border-l-4 ${
                        announcement.read ? "border-l-gray-300" : "border-l-blue-500 bg-blue-50"
                      }`}
                    >
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg flex items-center gap-2">
                              {announcement.title}
                              {!announcement.read && <Badge variant="default">Mới</Badge>}
                            </CardTitle>
                            <CardDescription>{new Date(announcement.date).toLocaleDateString("vi-VN")}</CardDescription>
                          </div>
                          {getPriorityBadge(announcement.priority)}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{announcement.content}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Bài tập & Deadline */}
          <TabsContent value="assignments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Bài tập & Deadline</CardTitle>
                <CardDescription>Quản lý và nộp bài tập được giao</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {assignments.map((assignment) => (
                    <Card key={assignment.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div className="flex items-start gap-3">
                            {getStatusIcon(assignment.status)}
                            <div>
                              <CardTitle className="text-lg flex items-center gap-2">
                                {assignment.title}
                                {getAssignmentTypeBadge(assignment.type)}
                              </CardTitle>
                              <CardDescription>{assignment.description}</CardDescription>
                            </div>
                          </div>
                          {getStatusBadge(assignment.status)}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              Hạn nộp: {new Date(assignment.dueDate).toLocaleDateString("vi-VN")}
                            </div>
                            {assignment.status === "pending" && (
                              <div className="flex items-center text-orange-600">
                                <Clock className="h-4 w-4 mr-1" />
                                Còn {getDaysUntilDue(assignment.dueDate)} ngày
                              </div>
                            )}
                            {assignment.submissionDate && (
                              <div className="flex items-center text-green-600">
                                <CheckCircle className="h-4 w-4 mr-1" />
                                Đã nộp: {new Date(assignment.submissionDate).toLocaleDateString("vi-VN")}
                              </div>
                            )}
                          </div>

                          {assignment.grade && (
                            <div className="p-3 bg-green-50 rounded-lg">
                              <div className="flex justify-between items-center mb-2">
                                <span className="font-medium text-green-800">Điểm: {assignment.grade}/10</span>
                              </div>
                              {assignment.feedback && <p className="text-sm text-green-700">{assignment.feedback}</p>}
                            </div>
                          )}

                          <div className="flex gap-2">
                            {assignment.status === "pending" && (
                              <Button onClick={() => handleSubmitAssignment(assignment)}>
                                <Upload className="h-4 w-4 mr-2" />
                                Nộp bài
                              </Button>
                            )}
                            {(assignment.status === "submitted" || assignment.status === "graded") && (
                              <Button variant="outline">
                                <Download className="h-4 w-4 mr-2" />
                                Tải bài đã nộp
                              </Button>
                            )}
                            <Button variant="outline">
                              <Eye className="h-4 w-4 mr-2" />
                              Xem chi tiết
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Danh sách lớp */}
          <TabsContent value="classmates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Danh sách sinh viên lớp ({classmates.length})</CardTitle>
                <CardDescription>Thông tin liên hệ các bạn cùng lớp</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>MSSV</TableHead>
                        <TableHead>Họ và tên</TableHead>
                        <TableHead>Email</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {classmates.map((classmate) => (
                        <TableRow key={classmate.id}>
                          <TableCell className="font-medium">{classmate.mssv}</TableCell>
                          <TableCell>{classmate.name}</TableCell>
                          <TableCell>{classmate.email}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Thông tin giảng viên</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium">{course.teacher}</h3>
                  <p className="text-sm text-gray-600">Giảng viên khóa học {course.name}</p>
                  <p className="text-sm text-gray-600">Email: nguyenvana@university.edu.vn</p>
                  <p className="text-sm text-gray-600">Phòng làm việc: A101</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Dialog nộp bài */}
        <Dialog open={isSubmissionDialogOpen} onOpenChange={setIsSubmissionDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Nộp bài tập</DialogTitle>
              <DialogDescription>
                {selectedAssignment?.title} - Hạn nộp:{" "}
                {selectedAssignment && new Date(selectedAssignment.dueDate).toLocaleDateString("vi-VN")}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div>
                <label className="text-sm font-medium">File bài tập</label>
                <Input type="file" className="mt-1" multiple />
                <p className="text-xs text-gray-500 mt-1">
                  Chấp nhận các file: .zip, .rar, .pdf, .doc, .docx (Tối đa 50MB)
                </p>
              </div>
              <div>
                <label className="text-sm font-medium">Ghi chú (tùy chọn)</label>
                <Textarea placeholder="Thêm ghi chú cho bài nộp..." className="mt-1" rows={3} />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsSubmissionDialogOpen(false)}>
                Hủy
              </Button>
              <Button onClick={() => setIsSubmissionDialogOpen(false)}>Nộp bài</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
