"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  BookOpen,
  Clock,
  GraduationCap,
  Bell,
  Users,
  CheckCircle,
  Trophy,
  Video,
  MapPin,
  Star,
} from "lucide-react"

export default function StudentDashboard() {
  return (
    <div className="mx-2 space-y-3 w-full">
      <div>
        <h2 className="text-3xl font-bold">Chào mừng trở lại, Nguyễn Văn A!</h2>
        <p className="text-gray-600 mt-2">Hãy tiếp tục hành trình học tập của bạn</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: "Khóa học đang học", value: "3", icon: BookOpen, color: "blue" },
          { title: "Bài tập chưa nộp", value: "1", icon: Clock, color: "orange" },
          { title: "Điểm trung bình", value: "8.5", icon: GraduationCap, color: "green" },
          { title: "Thông báo mới", value: "2", icon: Bell, color: "purple" },
        ].map((stat, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              <div className={`p-2 rounded-lg bg-${stat.color}-100`}>
                <stat.icon className={`w-4 h-4 text-${stat.color}-600`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Hoạt động gần đây</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                title: "Nộp bài tập React Todo App",
                desc: "Lập trình Web",
                time: "2 giờ trước",
                icon: CheckCircle,
                color: "green",
              },
              {
                title: "Thông báo mới từ ML",
                desc: "Thay đổi lịch học",
                time: "4 giờ trước",
                icon: Bell,
                color: "blue",
              },
              {
                title: "Điểm bài tập Database",
                desc: "Điểm: 8.0/10",
                time: "1 ngày trước",
                icon: Trophy,
                color: "yellow",
              },
            ].map((activity, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50">
                <div className={`p-2 rounded-lg bg-${activity.color}-100`}>
                  <activity.icon className={`w-4 h-4 text-${activity.color}-600`} />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{activity.title}</p>
                  <p className="text-sm text-gray-600">{activity.desc}</p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lịch học hôm nay</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { title: "Lập trình Web", time: "09:00 - 11:00", location: "Phòng A101", type: "offline" },
              { title: "Machine Learning", time: "14:00 - 16:00", location: "Zoom Meeting", type: "online" },
            ].map((schedule, i) => (
              <div key={i} className="border rounded-lg p-4 space-y-2">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium">{schedule.title}</h4>
                  <Badge variant={schedule.type === "online" ? "default" : "secondary"}>
                    {schedule.type === "online" ? "Trực tuyến" : "Trực tiếp"}
                  </Badge>
                </div>
                <div className="text-sm text-gray-600">
                  <p className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {schedule.time}
                  </p>
                  <p className="flex items-center gap-1">
                    {schedule.type === "online" ? <Video className="w-3 h-3" /> : <MapPin className="w-3 h-3" />}
                    {schedule.location}
                  </p>
                </div>
                <Button size="sm" className="w-full">
                  {schedule.type === "online" ? "Tham gia" : "Xem chi tiết"}
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}