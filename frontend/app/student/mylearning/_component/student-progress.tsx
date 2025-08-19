"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { StudentInfo } from "@/types/student";
import { User, Trophy, GraduationCap } from "lucide-react";
import React from "react";

export default function StudentProgress({studentInfo} : {
  studentInfo: StudentInfo | null
}) {
  const token = typeof window === "undefined" ? null : localStorage.getItem("token");
    if(!token) {
        window.location.href = "/login";
      }
  const getGPAColor = (gpa: number) => {
    if (gpa >= 3.6) return "text-green-600";
    if (gpa >= 3.0) return "text-blue-600";
    if (gpa >= 2.5) return "text-yellow-600";
    return "text-red-600";
  };

  return (
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
                {studentInfo?.completed_credits} / {studentInfo?.total_credits}
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
  );
}
