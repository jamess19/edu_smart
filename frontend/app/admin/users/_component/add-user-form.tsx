"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { TeacherBaseInfo } from "@/types/teacher";
import { StudentBaseInfo } from "@/types/student";
import { toast } from "sonner";
import DetailForm from "./detail-form";

export function AddUserForm() {
  const [formData, setFormData] = useState<StudentBaseInfo | TeacherBaseInfo>({
    username: "",
    password: "",
    email: "",
    fullname: "",
    address: "",
    birthday: undefined,
    department_id: 0,
    role: "",
    // StudentBaseInfo fields
    student_code: "",
    major: "",
    student_type: "Chính quy",
    // TeacherBaseInfo fields
    teacher_code: "",
    research_field: "",
    experience_years: 0,
    degree: "",
  });

  // Gọi api lấy danh sách department
  const departments = [
    "Khoa Công nghệ thông tin",
    "Khoa Kinh tế",
    "Khoa Ngoại ngữ",
    "Khoa Kỹ thuật",
    "Khoa Y học",
    "Khoa Luật",
  ];

  const canAccessDetailedInfo = () => {
    return (
      formData?.username !== "" &&
      formData.password !== "" &&
      formData.email !== "" &&
      formData.fullname !== "" &&
      formData.department_id !== null &&
      formData.role !== ""
    );
  };

  const handleInputChange = (
    field: keyof (StudentBaseInfo & TeacherBaseInfo),
    value: any
  ) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // Handle form submission here
    toast.success("add new user success!");
  };

  return (
    <div>
    <Card>
          <CardHeader className="items-center text-center">
            <CardTitle>Thông tin chung</CardTitle>
            <CardDescription>
              Điền thông tin cơ bản và chọn vai trò
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tên đăng nhập */}
              <div className="space-y-2">
                <Label htmlFor="username">Tên đăng nhập *</Label>
                <Input
                  id="username"
                  value={formData.username}
                  onChange={(e) =>
                    handleInputChange("username", e.target.value)
                  }
                  placeholder="Nhập tên đăng nhập"
                  required
                />
              </div>
              {/* Mật khẩu */}
              <div className="space-y-2">
                <Label htmlFor="password">Mật khẩu *</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  placeholder="Nhập mật khẩu"
                  required
                />
              </div>
              {/* Email */}
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
              {/* Fullname */}
              <div className="space-y-2">
                <Label htmlFor="fullname">Họ và tên *</Label>
                <Input
                  id="fullname"
                  value={formData.fullname}
                  onChange={(e) =>
                    handleInputChange("fullname", e.target.value)
                  }
                  placeholder="Nhập họ và tên đầy đủ"
                  required
                />
              </div>
              {/* Address */}
              <div className="space-y-2 md:col-span-2 ">
                <Label htmlFor="address">Địa chỉ</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="Nhập địa chỉ"
                  rows={2}
                />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Birthday */}
              <div className="space-y-2">
                <Label>Ngày sinh</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !formData.birthday && "text-muted-foreground"
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
                      onSelect={(date) =>
                        handleInputChange("birthday", date || new Date())
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              {/* Department */}
              <div className="space-y-2">
                <Label htmlFor="department">Khoa *</Label>
                <Select 
                  value={
                    formData.department_id
                      ? formData.department_id.toString()
                      : departments[0]
                  }
                  onValueChange={(value) =>
                    handleInputChange("department_id", value)
                  }
                >
                  <SelectTrigger className="w-full">
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
              {/* Role */}
              <div className="space-y-2">
                <Label htmlFor="role"> Vai trò * </Label>
                <Select
                  value={formData.role}
                  onValueChange={(value) => handleInputChange("role", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Chọn vai trò của người dùng" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="teacher">
                      <div className="flex flex-col items-start">
                        <span className="font-medium">Giáo viên</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="student">
                      <div className="flex flex-col items-start">
                        <span className="font-medium">Học sinh</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
          </div>

          {!canAccessDetailedInfo() && (
            <p className="text-sm text-orange-600">
                * Vui lòng điền đầy đủ thông tin bắt buộc và chọn vai trò để
                tiếp tục
              </p>
            )}
          
          {canAccessDetailedInfo() ? (
            <div className="gap-6">
              <DetailForm
                formData={formData}
                onChange={(data) => setFormData(data)}
              />
            </div>
            ) : null}
            <div className="flex justify-between space-x-4 mt-8">
              <Link href={"/admin/users"}>
                <Button
                  type="button"
                  variant="outline"
                >
                  Quay lại
                </Button>
              </Link>
              <div className="flex space-x-4">
                <Link href="/admin/users">
                  <Button type="button" variant="outline">
                    Hủy
                  </Button>
                </Link>
                <Button onClick={handleSubmit} type="submit">
                  Tạo người dùng
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
</div>
  )
}
