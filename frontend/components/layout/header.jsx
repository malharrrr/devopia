// import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle"
import { cn } from "@/lib/utils"
import { MobileSidebar } from "./mobile-sidebar"
import { UserNav } from "./user-nav"
import Link from "next/link"

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
      <nav className="flex items-center justify-between px-4">
        
        <div className={cn("block lg:!hidden")}>
          <MobileSidebar />
        </div>

       
      </nav>
    </div>
  )
}
