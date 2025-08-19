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
import {toast} from "sonner"
export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await authService.login(username, password);
      console.log("data:", res.data.token)
      if(res) {
        toast.dismiss("login-loading")
        localStorage.setItem("token", res.data.token);
                toast.success(`Chào mừng ${res.data.fullname || username}! 🎉`, {
            description: `Đăng nhập thành công với vai trò ${res.data.role === 'student' ? 'Sinh viên' : 'Giảng viên'}`,
            duration: 2000,
          })

        // ✅ Delay navigation để user thấy toast
        setTimeout(() => {
          switch (res.data.role) {
            case "student":
              router.push("/student/mylearning")
              break
            case "teacher":
              router.push("/teacher")
              break
            default:
              router.push("/")
            }
          }, 1500) // 1.5s delay
      }
      else {
          toast.dismiss("login-loading")
          toast.error("Đăng nhập thất bại!", {
            description: "Thông tin đăng nhập không chính xác"
          })
        }
    }
    catch (error: any) {
      console.error("Login error:", error)
      toast.dismiss("login-loading")
      
      // ✅ Handle different error types
      const errorMessage = error.response?.data?.message || 
                          error.message || 
                          "Có lỗi xảy ra khi đăng nhập"
      
      toast.error("Đăng nhập thất bại!", {
        description: errorMessage,
        action: {
          label: "Thử lại",
          onClick: () => {
            setUsername("")
            setPassword("")
          }
        }}
      )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent>
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">EduPlatform</h1>
          <p className="text-gray-600 mt-2">Hệ thống quản lý học tập</p>
        </div>
            <form onSubmit={handleLogin} className="space-y-4">

                <div className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Nhập tài khoản"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                </div>

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
  )
}
