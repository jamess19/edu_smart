import { UserList } from "./_component/user-list";

export default function UsersPage() {
  return (
      <div className="p-6">
        <h1 className="text-3xl font-bold text-foreground mb-6">Quản lý người dùng</h1>
        <UserList />
      </div>
  )
}
