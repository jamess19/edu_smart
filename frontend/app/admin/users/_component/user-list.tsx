"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { userInfo } from "@/types/user"

interface userListProps {
  users: userInfo[]
}
export function UserList({users}: userListProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredUsers = users.filter(
    (user) =>
      user.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      {/* Header with search and add button */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Tìm kiếm người dùng..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Lọc
          </Button>
          <Button asChild>
            <Link href="/admin/users/add">
              <Plus className="h-4 w-4 mr-2" />
              Thêm người dùng mới
            </Link>
          </Button>
        </div>
      </div>

      {/* Users grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.map((user) => (
          <Card key={user.id.toString()} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{user.fullname}</CardTitle>
                  <p className="text-sm text-muted-foreground">@{user.username}</p>
                </div>
                <Badge variant={user.user_type === "teacher" ? "default" : "secondary"}>
                  {user.user_type === "teacher" ? "Giáo viên" : "Học sinh"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Khoa</p>
                <p className="text-sm text-muted-foreground">{user.departmentName}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Điạ chỉ</p>
                <p className="text-sm text-muted-foreground">{user.address}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Không tìm thấy người dùng nào.</p>
        </div>
      )}
    </div>
  )
}
