"use client"

import type React from "react"

import { useContext, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Users, GraduationCap } from "lucide-react"
import { useRouter } from "next/navigation"
import { authService } from "@/services/authService"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [userType, setUserType] = useState("student")
  const router = useRouter()
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const data = await authService.login(username, password, userType);
    if(data) {
      localStorage.setItem("token", data.token);
      switch (userType) {
        case "student":
          router.push("/student/home");
          break;
        case "teacher":
          router.push("/teacher");
          break;
      }
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
                      type="text"
                      placeholder="student@university.edu.vn"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
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
                      placeholder="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
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
