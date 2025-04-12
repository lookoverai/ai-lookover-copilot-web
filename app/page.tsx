import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import Chat from "@/components/chat_interface/chat"
export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-1 flex-col gap-4 p-8">
          <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
            <Chat />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
