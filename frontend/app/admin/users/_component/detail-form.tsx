import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { StudentBaseInfo } from "@/types/student";
import { TeacherBaseInfo } from "@/types/teacher";
import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";

interface DetailInfoFormProps {
  formData: StudentBaseInfo | TeacherBaseInfo;
  onChange: (data: StudentBaseInfo | TeacherBaseInfo) => void;
}
export default function DetailForm({
  formData,
  onChange,
}: DetailInfoFormProps) 
{
  const studentTypes = ["Chính quy", "CTDA", "Từ xa"];

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Thông tin chi tiết -{" "}
          {formData.role === "teacher" ? "Giáo viên" : "Học sinh"}
        </CardTitle>
        <CardDescription>
          Điền thông tin đặc thù cho{" "}
          {formData.role === "teacher" ? "giáo viên" : "học sinh"}
        </CardDescription>
      </CardHeader>
      {formData.role === "student" ? (
      <div>
        <div className="mx-3">
          <Label className="m-2" htmlFor="studentId">MSSV *</Label>
          <Input
            id="studentId"
            value={(formData as StudentBaseInfo).student_code}
            onChange={(e) =>
              onChange({
                ...formData,
                student_code: e.target.value,
              } as StudentBaseInfo)
            }
            placeholder="Nhập mã số sinh viên"
            required
          />
        </div>

        <div className="m-3">
          <Label htmlFor="major">Chuyên ngành</Label>
          <Input
            value={(formData as StudentBaseInfo).major}
            onChange={(e) =>
              onChange({
                ...formData,
                major: e.target.value,
              } as StudentBaseInfo)
            }
          ></Input>
        </div>

        <div className="m-3 md:col-span-2">
          <Label htmlFor="studentType">Loại học sinh</Label>
          <Select
            value={
              (formData as StudentBaseInfo).student_type || studentTypes[0]
            }
            onValueChange={(value) =>
              onChange({
          ...formData,
          student_type: value,
              } as StudentBaseInfo)
            }
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
      </div>
      ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2 mx-3">
          <Label htmlFor="teacherCode">Mã giáo viên *</Label>
          <Input
            id="teacherCode"
            value={(formData as TeacherBaseInfo).teacher_code || ""}
            onChange={(e) =>
              onChange({
                ...formData,
                teacher_code: e.target.value,
              } as TeacherBaseInfo)
            }
            placeholder="Nhập mã giáo viên"
            required
          />
        </div>

        <div className="space-y-2 mx-3">
          <Label htmlFor="experience">Số năm kinh nghiệm</Label>
          <Input
            id="experience"
            type="number"
            value={(formData as TeacherBaseInfo).experience_years}
            onChange={(e) =>
              onChange({
                ...formData,
                experience_years: Number(e.target.value),
              } as TeacherBaseInfo)
            }
            placeholder="Nhập số năm kinh nghiệm"
            min="0"
          />
        </div>

        <div className="space-y-2 mx-3">
          <Label htmlFor="degree">Bằng cấp</Label>
          <Input
            id="degree"
            value={(formData as TeacherBaseInfo).degree || ""}
            onChange={(e) =>
              onChange({
                ...formData,
                degree: e.target.value,
              } as TeacherBaseInfo)
            }
            placeholder="Nhập chứng chỉ"
            required
          ></Input>
        </div>

        <div className="mx-3 space-y-2 md:col-span-2">
          <Label htmlFor="researchField">Lĩnh vực nghiên cứu</Label>
          <Textarea
            id="researchField"
            value={(formData as TeacherBaseInfo).research_field}
            onChange={(e) =>
              onChange({
                ...formData,
                research_field: e.target.value,
              } as TeacherBaseInfo)
            }
            placeholder="Nhập lĩnh vực nghiên cứu"
            rows={3}
          />
        </div>
      </div>
      )}
    </Card>
  );
}
