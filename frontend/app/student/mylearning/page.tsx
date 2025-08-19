import { StudentInfo } from "@/types/student"
import { UserService } from "@/services/userService"
import { CourseService } from "@/services/courseService"
import { MyCourse } from "@/types/course"
import StudentProgress from "./_component/student-progress"
import MyCourses from "./_component/my-courses"

export default async function StudentCourses() {
  
  try {
      const [studentResponse, coursesResponse] = await Promise.all([
        UserService.getCurrentUser(),
        CourseService.getMyCourses()
      ])

      console.log("User data:", studentResponse);
      console.log("Courses data:", coursesResponse);

      const studentInfo: StudentInfo | null = studentResponse ? studentResponse.data : null;
      const coursesData: MyCourse[] = coursesResponse ? coursesResponse.data : [];

      return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Tiến độ học tập</h1>
        <p className="text-gray-600 mt-2">
          Quản lý và theo dõi các khóa học đang tham gia
        </p>
      </div>
        {/* Student Info Section */}
        <StudentProgress studentInfo={studentInfo}/>
        {/* my courses Section */}
        <MyCourses coursesData={coursesData}/>
      </div>
    );

    } catch (error: any) {
      console.error("Error fetching data:", error);
    }


}
