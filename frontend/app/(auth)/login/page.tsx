"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Users, GraduationCap } from "lucide-react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userType, setUserType] = useState("student")
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    // Mock login - in real app, this would call your Java backend
    const mockUser = {
      id: userType === "teacher" ? "teacher1" : "student1",
      email,
      name: userType === "teacher" ? "Nguyễn Văn A" : "Trần Thị B",
      role: userType,
    }

    localStorage.setItem("user", JSON.stringify(mockUser))

    if (userType === "teacher") {
      router.push("/dashboard")
    } else {
      router.push("/student")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">EduPlatform</h1>
          <p className="text-gray-600 mt-2">Hệ thống quản lý học tập</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Đăng nhập</CardTitle>
            <CardDescription>Chọn loại tài khoản và đăng nhập vào hệ thống</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Tabs value={userType} onValueChange={setUserType}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="student" className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Sinh viên
                  </TabsTrigger>
                  <TabsTrigger value="teacher" className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Giáo viên
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="student" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="student-email">Email sinh viên</Label>
                    <Input
                      id="student-email"
                      type="email"
                      placeholder="student@university.edu.vn"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </TabsContent>

                <TabsContent value="teacher" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="teacher-email">Email giáo viên</Label>
                    <Input
                      id="teacher-email"
                      type="email"
                      placeholder="teacher@university.edu.vn"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </TabsContent>
              </Tabs>

              <div className="space-y-2">
                <Label htmlFor="password">Mật khẩu</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Đăng nhập
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
