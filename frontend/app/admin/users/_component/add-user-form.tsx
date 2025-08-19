"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { vi } from "date-fns/locale"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Link from "next/link"

interface UserFormData {
  // Basic info
  username: string
  password: string
  email: string
  fullname: string
  address: string
  birthday: Date | undefined
  department: string
  role: "teacher" | "student" | ""

  // Teacher specific
  teacherCode: string
  researchField: string
  experience: string
  degree: string

  // Student specific
  studentId: string
  major: string
  studentType: string
}

export function AddUserForm() {
  const [formData, setFormData] = useState<UserFormData>({
    username: "",
    password: "",
    email: "",
    fullname: "",
    address: "",
    birthday: undefined,
    department: "",
    role: "",
    teacherCode: "",
    researchField: "",
    experience: "",
    degree: "",
    studentId: "",
    major: "",
    studentType: "",
  })

  const [activeTab, setActiveTab] = useState("basic-info")

  const departments = [
    "Khoa Công nghệ thông tin",
    "Khoa Kinh tế",
    "Khoa Ngoại ngữ",
    "Khoa Kỹ thuật",
    "Khoa Y học",
    "Khoa Luật",
  ]

  const degrees = ["Cử nhân", "Thạc sĩ", "Tiến sĩ", "Giáo sư", "Phó giáo sư"]

  const majors = [
    "Công nghệ phần mềm",
    "Hệ thống thông tin",
    "An toàn thông tin",
    "Trí tuệ nhân tạo",
    "Khoa học máy tính",
  ]

  const studentTypes = ["Chính quy", "Liên thông", "Vừa làm vừa học", "Từ xa"]

  const canAccessDetailedInfo = () => {
    return (
      formData.username !== "" &&
      formData.password !== "" &&
      formData.email !== "" &&
      formData.fullname !== "" &&
      formData.department !== "" &&
      formData.role !== ""
    )
  }

  const handleInputChange = (field: keyof UserFormData, value: string | Date) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleTabChange = (value: string) => {
    if (value === "detailed-info" && !canAccessDetailedInfo()) {
      return // Prevent tab change if basic info is not complete
    }
    setActiveTab(value)
  }

  const handleContinue = () => {
    if (canAccessDetailedInfo()) {
      setActiveTab("detailed-info")
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form data:", formData)
    // Handle form submission here
  }

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="basic-info">Thông tin chung</TabsTrigger>
        <TabsTrigger
          value="detailed-info"
          disabled={!canAccessDetailedInfo()}
          className={cn(!canAccessDetailedInfo() && "opacity-50 cursor-not-allowed")}
        >
          Thông tin chi tiết
        </TabsTrigger>
      </TabsList>

      <TabsContent value="basic-info" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Thông tin chung người dùng</CardTitle>
            <CardDescription>Điền thông tin cơ bản và chọn vai trò của người dùng</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="username">Tên đăng nhập *</Label>
                <Input
                  id="username"
                  value={formData.username}
                  onChange={(e) => handleInputChange("username", e.target.value)}
                  placeholder="Nhập tên đăng nhập"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Mật khẩu *</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  placeholder="Nhập mật khẩu"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Nhập địa chỉ email"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fullname">Họ và tên *</Label>
                <Input
                  id="fullname"
                  value={formData.fullname}
                  onChange={(e) => handleInputChange("fullname", e.target.value)}
                  placeholder="Nhập họ và tên đầy đủ"
                  required
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address">Địa chỉ</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="Nhập địa chỉ"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>Ngày sinh</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !formData.birthday && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.birthday ? (
                        format(formData.birthday, "dd/MM/yyyy", { locale: vi })
                      ) : (
                        <span>Chọn ngày sinh</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.birthday}
                      onSelect={(date) => handleInputChange("birthday", date || new Date())}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="department">Khoa/Phòng ban *</Label>
                <Select value={formData.department} onValueChange={(value) => handleInputChange("department", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn khoa/phòng ban" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept}>
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="role" className="text-base font-medium">
                  Vai trò *
                </Label>
                <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Chọn vai trò của người dùng" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="teacher">
                      <div className="flex flex-col items-start">
                        <span className="font-medium">Giáo viên</span>
                        <span className="text-sm text-muted-foreground">Cán bộ giảng dạy, nghiên cứu</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="student">
                      <div className="flex flex-col items-start">
                        <span className="font-medium">Học sinh</span>
                        <span className="text-sm text-muted-foreground">Sinh viên, học viên</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>

                {!canAccessDetailedInfo() && (
                  <p className="text-sm text-orange-600">
                    * Vui lòng điền đầy đủ thông tin bắt buộc và chọn vai trò để tiếp tục
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-6">
              <Link href="/admin/users">
              <Button type="button" variant="outline">
                Hủy
              </Button>
              </Link>
              <Button type="button" onClick={handleContinue} disabled={!canAccessDetailedInfo()}>
                Tiếp tục
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="detailed-info" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Thông tin chi tiết - {formData.role === "teacher" ? "Giáo viên" : "Học sinh"}</CardTitle>
            <CardDescription>
              Điền thông tin đặc thù cho {formData.role === "teacher" ? "giáo viên" : "học sinh"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formData.role === "teacher" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="teacherCode">Mã giáo viên *</Label>
                      <Input
                        id="teacherCode"
                        value={formData.teacherCode}
                        onChange={(e) => handleInputChange("teacherCode", e.target.value)}
                        placeholder="Nhập mã giáo viên"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Số năm kinh nghiệm</Label>
                      <Input
                        id="experience"
                        type="number"
                        value={formData.experience}
                        onChange={(e) => handleInputChange("experience", e.target.value)}
                        placeholder="Nhập số năm kinh nghiệm"
                        min="0"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="degree">Bằng cấp</Label>
                      <Select value={formData.degree} onValueChange={(value) => handleInputChange("degree", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn bằng cấp" />
                        </SelectTrigger>
                        <SelectContent>
                          {degrees.map((degree) => (
                            <SelectItem key={degree} value={degree}>
                              {degree}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="researchField">Lĩnh vực nghiên cứu</Label>
                      <Textarea
                        id="researchField"
                        value={formData.researchField}
                        onChange={(e) => handleInputChange("researchField", e.target.value)}
                        placeholder="Nhập lĩnh vực nghiên cứu"
                        rows={3}
                      />
                    </div>
                  </>
                )}

                {formData.role === "student" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="studentId">MSSV *</Label>
                      <Input
                        id="studentId"
                        value={formData.studentId}
                        onChange={(e) => handleInputChange("studentId", e.target.value)}
                        placeholder="Nhập mã số sinh viên"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="major">Chuyên ngành</Label>
                      <Select value={formData.major} onValueChange={(value) => handleInputChange("major", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn chuyên ngành" />
                        </SelectTrigger>
                        <SelectContent>
                          {majors.map((major) => (
                            <SelectItem key={major} value={major}>
                              {major}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="studentType">Loại học sinh</Label>
                      <Select
                        value={formData.studentType}
                        onValueChange={(value) => handleInputChange("studentType", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn loại học sinh" />
                        </SelectTrigger>
                        <SelectContent>
                          {studentTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}
              </div>

              <div className="flex justify-between space-x-4 mt-8">
                <Button type="button" variant="outline" onClick={() => setActiveTab("basic-info")}>
                  Quay lại
                </Button>
                <div className="flex space-x-4">
                  <Link href="/admin/users">
                    <Button type="button" variant="outline">
                      Hủy
                    </Button>
                  </Link>
                  <Button type="submit">Tạo người dùng</Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
