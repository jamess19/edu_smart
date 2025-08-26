import { useEffect, useState } from "react";
import { UserList } from "./_component/user-list";
import { AdminService } from "@/services/adminService";

export default async function UsersPage() {
  const users = await AdminService.GetAllUsers()
  return (
      <div className="p-6">
        <h1 className="text-3xl font-bold text-foreground mb-6">Quản lý người dùng</h1>
        <UserList users={users}/>
      </div>
  )
}
