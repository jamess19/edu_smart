"use client"
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { BookOpen, Users } from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle, XCircle, Calendar, FileText } from "lucide-react";
import { MyCourse } from "@/types/course";

export default function MyCourses({ coursesData }: { coursesData: MyCourse[] }) {
  const completedCourses = coursesData.filter(
    (course) =>
      course.status?.toLowerCase() === "pass" ||
      course.status?.toLowerCase() === "fail"
  );
  const currentCourses = coursesData.filter(
    (course) => course.status?.toLowerCase() === "enrolled"
  );

  return (
    <div>
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
                          <Link href={`/student/courses/${course.course_id}`}>
                            <Button
                              variant="outline"
                              className="flex-1 text-sm w-full"
                            >
                              <FileText className="w-4 h-4 mr-1" />
                              Chi tiết
                            </Button>
                          </Link>
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