"use client"

import { Bell, Moon, Sun, User, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"

export function DashboardHeader() {
  const { setTheme, theme } = useTheme()

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  }

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="border-b border-gray-200/40 dark:border-[#00C4B4]/10 bg-white/90 dark:bg-[#1A1F3A]/90 backdrop-blur-md sticky top-0 z-30 w-full shadow-sm transition-colors duration-300"
    >
      <div className="container flex h-16 items-center px-4 md:px-6">
        {/* Left Section - Logo and Sidebar Trigger */}
        <div className="flex items-center gap-3 md:gap-4">
          <SidebarTrigger className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-[#252B48] hover:bg-gray-200 dark:hover:bg-[#00C4B4]/20 transition-colors" />
          <motion.div
            className="hidden md:flex items-center gap-3"
            variants={itemVariants}
          >
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#00C4B4] to-[#FF7043] flex items-center justify-center shadow-md">
              <span className="text-white font-extrabold text-xl">L</span>
            </div>
            <span className="font-bold text-xl text-gray-800 dark:text-gray-100 tracking-tight">
              LearnHub
            </span>
          </motion.div>
        </div>

        {/* Right Section - XP, Notifications, Theme, Profile */}
        <div className="ml-auto flex items-center gap-4">
          {/* XP Badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-[#252B48] dark:to-[#2F3555] px-4 py-2 rounded-full shadow-inner"
          >
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#00C4B4] to-[#FF7043] flex items-center justify-center">
              <span className="text-white text-xs font-bold">XP</span>
            </div>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              250 XP
            </span>
          </motion.div>

          {/* Notification Button */}
          <motion.div variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-full bg-gray-100 dark:bg-[#252B48] hover:bg-gray-200 dark:hover:bg-[#00C4B4]/20 transition-all"
            >
              <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#FF7043] flex items-center justify-center text-[10px] text-white animate-pulse">
                3
              </span>
            </Button>
          </motion.div>

          {/* Theme Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-gray-100 dark:bg-[#252B48] hover:bg-gray-200 dark:hover:bg-[#00C4B4]/20 transition-all"
                >
                  {theme === "dark" ? (
                    <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  ) : (
                    <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  )}
                </Button>
              </motion.div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white/95 dark:bg-[#252B48]/95 backdrop-blur-md border-gray-200/50 dark:border-[#00C4B4]/20 shadow-lg"
            >
              <DropdownMenuItem
                onClick={() => setTheme("light")}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#00C4B4]/10"
              >
                <Sun className="h-4 w-4" />
                <span>Light</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTheme("dark")}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#00C4B4]/10"
              >
                <Moon className="h-4 w-4" />
                <span>Dark</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0">
                  <Avatar className="h-10 w-10 border-2 border-[#00C4B4]/20 dark:border-[#FF7043]/20 shadow-md">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Alex" />
                    <AvatarFallback className="bg-gradient-to-br from-[#00C4B4] to-[#FF7043] text-white font-bold">
                      A
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </motion.div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white/95 dark:bg-[#252B48]/95 backdrop-blur-md border-gray-200/50 dark:border-[#00C4B4]/20 shadow-lg"
            >
              <DropdownMenuItem className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#00C4B4]/10">
                <User className="h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#00C4B4]/10">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#00C4B4]/10">
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.header>
  )
}