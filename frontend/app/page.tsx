"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  BookOpen, 
  Users, 
  GraduationCap, 
  Award, 
  Clock, 
  Target,
  PlayCircle,
  CheckCircle,
  Star,
  ArrowRight,
  Menu,
  X
} from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-blue-600 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">EduSmart</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600">Tính năng</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600">Giới thiệu</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600">Bảng giá</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Liên hệ</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login">
                <Button variant="outline">Đăng nhập</Button>
              </Link>
              <Link href="/register">
                <Button>Đăng ký</Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-600">Tính năng</a>
              <a href="#about" className="block px-3 py-2 text-gray-600">Giới thiệu</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-600">Bảng giá</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600">Liên hệ</a>
              <div className="pt-4 pb-2 border-t">
                <Link href="/login" className="block px-3 py-2">
                  <Button variant="outline" className="w-full">Đăng nhập</Button>
                </Link>
                <Link href="/register" className="block px-3 py-2 mt-2">
                  <Button className="w-full">Đăng ký</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Nền tảng học tập
              <span className="text-blue-600"> thông minh</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              EduSmart là hệ thống quản lý học tập hiện đại, giúp sinh viên và giáo viên 
              kết nối, học tập và giảng dạy hiệu quả hơn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="text-lg px-8 py-3">
                  Bắt đầu miễn phí
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                <PlayCircle className="mr-2 h-5 w-5" />
                Xem demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tính năng nổi bật
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Khám phá những tính năng mạnh mẽ giúp nâng cao trải nghiệm học tập
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardHeader>
                <div className="mx-auto bg-blue-100 p-3 rounded-full w-fit">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Quản lý khóa học</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tạo và quản lý khóa học dễ dàng với giao diện trực quan
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="mx-auto bg-green-100 p-3 rounded-full w-fit">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Tương tác trực tuyến</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Thảo luận, chia sẻ tài liệu và hỗ trợ học tập 24/7
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="mx-auto bg-yellow-100 p-3 rounded-full w-fit">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle>Đánh giá & chấm điểm</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Hệ thống đánh giá tự động và theo dõi tiến độ học tập
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="mx-auto bg-purple-100 p-3 rounded-full w-fit">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Lịch học thông minh</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Quản lý thời gian biểu và nhắc nhở deadline hiệu quả
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="mx-auto bg-red-100 p-3 rounded-full w-fit">
                  <Target className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle>Báo cáo chi tiết</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Thống kê và phân tích kết quả học tập chi tiết
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="mx-auto bg-indigo-100 p-3 rounded-full w-fit">
                  <CheckCircle className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle>Dễ sử dụng</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Giao diện thân thiện, dễ sử dụng cho mọi đối tượng
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Được tin tưởng bởi hàng nghìn người dùng
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Sinh viên</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Giáo viên</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1,000+</div>
              <div className="text-blue-100">Khóa học</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Trường học</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Người dùng nói gì về chúng tôi
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "EduSmart giúp tôi quản lý các khóa học một cách hiệu quả. 
                  Giao diện thân thiện và dễ sử dụng."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div className="ml-3">
                    <div className="font-medium">Nguyễn Văn A</div>
                    <div className="text-sm text-gray-500">Giáo viên</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Tôi có thể theo dõi tiến độ học tập và nộp bài tập một cách 
                  thuận tiện. Rất hài lòng với nền tảng này."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    B
                  </div>
                  <div className="ml-3">
                    <div className="font-medium">Trần Thị B</div>
                    <div className="text-sm text-gray-500">Sinh viên</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Hệ thống báo cáo chi tiết giúp tôi nắm bắt được tình hình 
                  học tập của từng sinh viên."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    C
                  </div>
                  <div className="ml-3">
                    <div className="font-medium">Lê Văn C</div>
                    <div className="text-sm text-gray-500">Quản trị viên</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sẵn sàng bắt đầu?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Tham gia cùng hàng nghìn giáo viên và sinh viên đang sử dụng EduSmart
          </p>
          <Link href="/register">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Đăng ký miễn phí
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold">EduSmart</span>
              </div>
              <p className="text-gray-400">
                Nền tảng học tập thông minh cho tương lai giáo dục
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Sản phẩm</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Quản lý khóa học</a></li>
                <li><a href="#" className="hover:text-white">Đánh giá online</a></li>
                <li><a href="#" className="hover:text-white">Báo cáo thống kê</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Hỗ trợ</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Trung tâm trợ giúp</a></li>
                <li><a href="#" className="hover:text-white">Liên hệ</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Công ty</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Về chúng tôi</a></li>
                <li><a href="#" className="hover:text-white">Tuyển dụng</a></li>
                <li><a href="#" className="hover:text-white">Chính sách</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduSmart. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}