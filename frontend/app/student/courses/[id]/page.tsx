"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
  BookOpen,
  Clock,
  Users,
  FileText,
  Download,
  Upload,
  Calendar,
  Bell,
  MessageCircle,
  Star,
  Play,
  CheckCircle,
  AlertCircle,
  Send,
  Eye,
  Edit,
  Trash2,
  Plus,
  File,
  X,
} from "lucide-react"
import { useParams } from "next/navigation"
import { CourseService } from "@/services/courseService"
import { CourseInDetail } from "@/types/course"
import { ResourceInCourse } from "@/types/resource"


export default function CourseDetail() {
  const [activeTab, setActiveTab] = useState("overview")
  const [userRole] = useState("student") // "teacher" or "student"
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [submissionNote, setSubmissionNote] = useState("")
  const [isSubmissionOpen, setIsSubmissionOpen] = useState(false)
  const [isViewSubmissionOpen, setIsViewSubmissionOpen] = useState(false)
  const [selectedAssignment, setSelectedAssignment] = useState<any>(null)
  const params = useParams();
  const [resources, setResources] = useState<ResourceInCourse[]>([])
  const [courseData, setCourseData] = useState<CourseInDetail|null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // lấy thông tin khoá học theo ID
  const course_id = params.id;
  useEffect(() => {
    const fetchCourse = async () => {
      const res = await CourseService.getMyCourseById(Number(course_id))
      const courseDetail = res.data
      console.log(courseDetail)
      setResources(courseDetail.resources)
      setCourseData(courseDetail)
    }
    fetchCourse()
  }, [])
  // Mock data


  const assignments = [
    {
      id: 1,
      title: "Bài tập 1: Tạo Component cơ bản",
      description: "Tạo các component React cơ bản và sử dụng props",
      dueDate: "2024-01-15",
      status: "submitted",
      grade: 8.5,
      submissions: 42,
      pdfUrl: "/assignments/bai-tap-1-component-co-ban.pdf",
      mySubmission: {
        files: ["component-basic.zip", "readme.txt"],
        submittedAt: "2024-01-14",
        note: "Đã hoàn thành tất cả yêu cầu trong bài tập",
      },
    },
    {
      id: 2,
      title: "Bài tập 2: State Management",
      description: "Xây dựng ứng dụng Todo với useState và useEffect",
      dueDate: "2024-01-22",
      status: "pending",
      submissions: 38,
      pdfUrl: "/assignments/bai-tap-2-state-management.pdf",
    },
    {
      id: 3,
      title: "Project cuối kỳ: E-commerce App",
      description: "Xây dựng ứng dụng thương mại điện tử hoàn chỉnh",
      dueDate: "2024-02-15",
      status: "not_started",
      submissions: 0,
      pdfUrl: "/assignments/project-cuoi-ky-ecommerce.pdf",
    },
  ]

  // File handling functions
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    setSelectedFiles((prev) => [...prev, ...files])
  }

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmission = () => {
    // Handle submission logic here
    console.log("Submitting:", { files: selectedFiles, note: submissionNote })
    setIsSubmissionOpen(false)
    setSelectedFiles([])
    setSubmissionNote("")
  }

  const openSubmissionModal = (assignment: any) => {
    setSelectedAssignment(assignment)
    setIsSubmissionOpen(true)
  }

  const openViewSubmissionModal = (assignment: any) => {
    setSelectedAssignment(assignment)
    setIsViewSubmissionOpen(true)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "submitted":
        return "green"
      case "pending":
        return "yellow"
      case "not_started":
        return "gray"
      default:
        return "gray"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "submitted":
        return "Đã nộp"
      case "pending":
        return "Chưa nộp"
      case "not_started":
        return "Chưa bắt đầu"
      default:
        return "Không xác định"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "red"
      case "medium":
        return "yellow"
      case "low":
        return "green"
      default:
        return "gray"
    }
  }

  return (
    <div className="space-y-6 w-full">
      {/* Course Header */}
      <div className="border-b pb-4">
        <h1 className="text-2xl font-bold">{courseData?.course_name}</h1>
        {/* <p className="text-gray-600">{course.instructor}</p> */}
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Thông tin chung</TabsTrigger>
          <TabsTrigger value="assignments">Bài tập</TabsTrigger>
          <TabsTrigger value="announcements">Thông báo</TabsTrigger>
          <TabsTrigger value="chatbot">Chatbot</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Tài liệu học tập
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {courseData?.resources.map((resource) => (
                    <div
                      key={resource.resource_id.toString()}
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <FileText className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">{resource.name}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                            <Download className="w-4 h-4 mr-1" />
                            Tải về
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Thông tin khóa học</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Số sinh viên:</span>
                    <span className="font-medium">{courseData?.students.length}</span>
                  </div>
                  {/* <div className="flex justify-between">
                    <span className="text-gray-600">Thời lượng:</span>
                    <span className="font-medium">{course.duration}</span>
                  </div> */}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Giảng viên</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        name: "TS. Nguyễn Văn B",
                        email: "nguyenb@university.edu.vn",
                        phone: "0123 456 789",
                        avatar: "/diverse-classroom-teacher.png",
                        department: "Khoa Công nghệ thông tin",
                      },
                      {
                        name: "ThS. Trần Thị C",
                        email: "tranc@university.edu.vn",
                        phone: "0987 654 321",
                        avatar: "/teacher-female.png",
                        department: "Khoa Công nghệ thông tin",
                      },
                    ].map((instructor, idx) => (
                      <div key={instructor.email} className="flex items-start gap-3 border-b pb-3 last:border-b-0 last:pb-0">
                        <Avatar>
                          <AvatarFallback>
                            {instructor.name
                              .split(" ")
                              .map((w) => w[0])
                              .join("")
                              .toUpperCase()
                              .slice(0, 3)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{instructor.name}</p>
                          <p className="text-sm text-gray-600">Email: <span className="font-mono">{instructor.email}</span></p>
                          <p className="text-sm text-gray-600">Điện thoại: {instructor.phone}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Assignments Tab */}
        <TabsContent value="assignments" className="space-y-6">
          {userRole === "teacher" && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Tạo bài tập mới
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Tiêu đề bài tập" />
                <Textarea placeholder="Mô tả bài tập" />
                <div className="flex gap-4">
                  <Input type="date" placeholder="Hạn nộp" />
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Tạo bài tập
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="grid gap-4">
            {assignments.map((assignment) => (
              <Card key={assignment.id} className="p-4">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {assignment.status === "submitted" ? (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      ) : assignment.status === "pending" ? (
                        <AlertCircle className="w-4 h-4 text-yellow-600" />
                      ) : (
                        <Clock className="w-4 h-4 text-gray-400" />
                      )}
                      <h3 className="font-semibold text-sm">{assignment.title}</h3>
                      <Badge
                        variant="outline"
                        className={`text-xs text-${getStatusColor(assignment.status)}-600 border-${getStatusColor(assignment.status)}-200`}
                      >
                        {getStatusText(assignment.status)}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{assignment.description}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>Hạn: {new Date(assignment.dueDate).toLocaleDateString("vi-VN")}</span>
                      </div>
                      {userRole === "teacher" && (
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>{assignment.submissions} bài nộp</span>
                        </div>
                      )}
                      {assignment.grade && (
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          <span>Điểm: {assignment.grade}/10</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button size="sm" variant="outline" className="text-xs bg-transparent">
                      <FileText className="w-3 h-3 mr-1" />
                      PDF
                    </Button>
                    {userRole === "student" ? (
                      assignment.status === "submitted" ? (
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs bg-transparent"
                          onClick={() => openViewSubmissionModal(assignment)}
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          Xem bài
                        </Button>
                      ) : (
                        <Button size="sm" className="text-xs" onClick={() => openSubmissionModal(assignment)}>
                          <Upload className="w-3 h-3 mr-1" />
                          Nộp bài
                        </Button>
                      )
                    ) : (
                      <>
                        <Button size="sm" variant="outline" className="text-xs bg-transparent">
                          <Eye className="w-3 h-3 mr-1" />
                          Xem ({assignment.submissions})
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs bg-transparent">
                          <Edit className="w-3 h-3 mr-1" />
                          Sửa
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Announcements Tab */}
        <TabsContent value="announcements" className="space-y-6">
          <div className="space-y-4">
            {courseData?.notifications.map((notification) => (
              <Card key={notification.notification_id.toString()}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Bell/>
                        {notification.title}
                      </CardTitle>
                      <p className="text-sm text-gray-600 mt-1">
                        {notification.teacher_posted} • {new Date(notification.created_at).toLocaleDateString("vi-VN")}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{notification.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Chatbot Tab */}
        <TabsContent value="chatbot" className="space-y-6">
          <Card className="h-96">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Trợ lý AI cho khóa học
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center h-full">
              <div className="text-center space-y-4">
                <MessageCircle className="w-16 h-16 text-gray-400 mx-auto" />
                <h3 className="text-lg font-medium text-gray-600">Chatbot sẽ được cài đặt sau</h3>
                <p className="text-gray-500">Tính năng trợ lý AI sẽ giúp bạn trả lời các câu hỏi về khóa học</p>
                <Button disabled>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Đang phát triển
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Submission Modal */}
      <Dialog open={isSubmissionOpen} onOpenChange={setIsSubmissionOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Nộp bài tập</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-sm mb-2">{selectedAssignment?.title}</h4>
              <p className="text-xs text-gray-600">{selectedAssignment?.description}</p>
            </div>

            <div>
              <Label htmlFor="files" className="text-sm font-medium">
                Tải lên file bài tập
              </Label>
              <Input id="files" type="file" multiple onChange={handleFileSelect} className="mt-1" />
            </div>

            {selectedFiles.length > 0 && (
              <div className="space-y-2">
                <Label className="text-sm font-medium">File đã chọn:</Label>
                {selectedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div className="flex items-center gap-2">
                      <File className="w-4 h-4" />
                      <span className="text-sm">{file.name}</span>
                    </div>
                    <Button size="sm" variant="ghost" onClick={() => removeFile(index)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            <div>
              <Label htmlFor="note" className="text-sm font-medium">
                Ghi chú (tùy chọn)
              </Label>
              <Textarea
                id="note"
                placeholder="Thêm ghi chú về bài tập của bạn..."
                value={submissionNote}
                onChange={(e) => setSubmissionNote(e.target.value)}
                className="mt-1"
              />
            </div>

            <div className="flex gap-2 pt-4">
              <Button variant="outline" onClick={() => setIsSubmissionOpen(false)}>
                Hủy
              </Button>
              <Button onClick={handleSubmission} disabled={selectedFiles.length === 0}>
                <Upload className="w-4 h-4 mr-2" />
                Nộp bài
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* View Submission Modal */}
      <Dialog open={isViewSubmissionOpen} onOpenChange={setIsViewSubmissionOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Bài tập đã nộp</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-sm mb-2">{selectedAssignment?.title}</h4>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Đã nộp vào {selectedAssignment?.mySubmission?.submittedAt}</span>
              </div>
            </div>

            {selectedAssignment?.mySubmission?.files && (
              <div className="space-y-2">
                <Label className="text-sm font-medium">File đã nộp:</Label>
                {selectedAssignment.mySubmission.files.map((fileName: string, index: number) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div className="flex items-center gap-2">
                      <File className="w-4 h-4" />
                      <span className="text-sm">{fileName}</span>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {selectedAssignment?.mySubmission?.note && (
              <div>
                <Label className="text-sm font-medium">Ghi chú:</Label>
                <p className="text-sm text-gray-600 mt-1 p-2 bg-gray-50 rounded">
                  {selectedAssignment.mySubmission.note}
                </p>
              </div>
            )}

            {selectedAssignment?.grade && (
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-green-600" />
                  <span className="font-medium text-green-800">Điểm: {selectedAssignment.grade}/10</span>
                </div>
              </div>
            )}

            <div className="flex justify-end pt-4">
              <Button variant="outline" onClick={() => setIsViewSubmissionOpen(false)}>
                Đóng
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
