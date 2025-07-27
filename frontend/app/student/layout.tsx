import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
        <main className="flex-1 p-4">
          <div className="w-full">
            <SidebarTrigger className="-ml-1" />
            {children}
          </div>
        </main>
    </SidebarProvider>
  )
}