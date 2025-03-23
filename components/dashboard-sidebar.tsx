"use client";

import { Award, BookOpen, Calendar, LayoutDashboard, LogOut, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"; // Verify this import matches your Shadcn UI setup
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface DashboardSidebarProps {
  onSectionClick?: (sectionId: string) => void;
}

export function DashboardSidebar({ onSectionClick }: DashboardSidebarProps) {
  const sidebarVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", type: "spring", stiffness: 120 },
    },
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", sectionId: "dashboard", active: true },
    { icon: BookOpen, label: "Courses", sectionId: "courses" },
    { icon: Calendar, label: "Study Plan", sectionId: "study-plan" },
    { icon: Award, label: "Badges", sectionId: "badges" },
  ];

  const footerItems = [
    { icon: Settings, label: "Settings", sectionId: "settings" },
    { icon: LogOut, label: "Logout", sectionId: "logout" },
  ];

  const handleClick = (sectionId: string) => {
    if (onSectionClick) {
      onSectionClick(sectionId);
    }
  };

  return (
    <motion.div
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      className="h-screen"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <Sidebar
        className="
          bg-gradient-to-b from-white/95 to-gray-100/95 dark:from-[#1A1F3A]/95 dark:to-[#141830]/95 
          border-r border-[#00C4B4]/20 shadow-lg w-64 rounded-r-2xl overflow-hidden 
          transition-all duration-300 hover:shadow-[#00C4B4]/30"
      >
        {/* Header */}
        <SidebarHeader
          className="
            py-8 px-4 bg-gradient-to-br from-[#00C4B4]/10 to-[#FF7043]/10 
            dark:from-[#00C4B4]/20 dark:to-[#FF7043]/20 border-b border-[#00C4B4]/30"
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
            {/* Mobile Logo */}
            <div className="md:hidden flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="
                  h-12 w-12 rounded-xl bg-gradient-to-br from-[#00C4B4] to-[#FF7043] 
                  flex items-center justify-center shadow-md"
              >
                <span className="text-white font-extrabold text-2xl">L</span>
              </motion.div>
              <span className="font-bold text-xl text-gray-800 dark:text-gray-100 tracking-tight">
                LearnHub
              </span>
            </div>
            {/* Desktop User Info */}
            <div className="hidden md:flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Avatar
                  className="
                    h-20 w-20 mb-3 border-3 border-[#00C4B4]/40 dark:border-[#FF7043]/40 
                    shadow-md rounded-full"
                >
                  <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Alex" />
                  <AvatarFallback
                    className="
                      bg-gradient-to-br from-[#00C4B4] to-[#FF7043] text-white text-2xl font-bold"
                  >
                    A
                  </AvatarFallback>
                </Avatar>
              </motion.div>
              <div className="text-center">
                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 tracking-tight">
                  Hi, Alex!
                </h3>
                <Badge
                  className="
                    mt-2 bg-[#00C4B4]/20 text-[#00C4B4] dark:bg-[#FF7043]/20 dark:text-[#FF7043] 
                    hover:bg-[#00C4B4]/30 dark:hover:bg-[#FF7043]/30 rounded-full px-2.5 py-0.5 
                    font-medium text-xs shadow-sm"
                >
                  Level 3 Learner
                </Badge>
              </div>
            </div>
          </motion.div>
        </SidebarHeader>

        {/* Content */}
        <SidebarContent className="px-3 py-6">
          <SidebarMenu>
            {menuItems.map((item, index) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative"
              >
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={item.active}
                    tooltip={item.label}
                    onClick={() => handleClick(item.sectionId)}
                    className={`
                      w-full flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-300 
                      ${
                        item.active
                          ? "bg-gradient-to-r from-[#00C4B4] to-[#FF7043] text-white shadow-md hover:shadow-lg"
                          : "text-gray-700 dark:text-gray-200 hover:bg-[#00C4B4]/10 dark:hover:bg-[#FF7043]/10 hover:text-[#00C4B4] dark:hover:text-[#FF7043]"
                      }
                    `}
                  >
                    <motion.div
                      whileHover={{ rotate: item.active ? 0 : 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <item.icon
                        className={`h-5 w-5 ${
                          item.active ? "text-white" : "text-[#00C4B4] dark:text-[#FF7043]"
                        }`}
                      />
                    </motion.div>
                    <span className="font-semibold text-sm">{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                {index < menuItems.length - 1 && (
                  <motion.hr
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="my-2 border-t border-[#00C4B4]/20 dark:border-[#FF7043]/20"
                  />
                )}
              </motion.div>
            ))}
          </SidebarMenu>
        </SidebarContent>

        {/* Footer */}
        <SidebarFooter
          className="
            px-3 py-6 border-t border-[#00C4B4]/30 
            bg-gradient-to-t from-gray-50/70 to-transparent dark:from-[#141830]/70"
        >
          <SidebarMenu>
            {footerItems.map((item, index) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative"
              >
                <SidebarMenuItem>
                  <SidebarMenuButton
                    tooltip={item.label}
                    onClick={() => handleClick(item.sectionId)}
                    className="
                      w-full flex items-center gap-3 py-3 px-4 rounded-xl 
                      text-gray-700 dark:text-gray-200 hover:bg-[#00C4B4]/10 dark:hover:bg-[#FF7043]/10 
                      hover:text-[#00C4B4] dark:hover:text-[#FF7043] transition-all duration-300"
                  >
                    <motion.div whileHover={{ rotate: 10 }} transition={{ duration: 0.3 }}>
                      <item.icon className="h-5 w-5 text-[#00C4B4] dark:text-[#FF7043]" />
                    </motion.div>
                    <span className="font-semibold text-sm">{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                {index < footerItems.length - 1 && (
                  <motion.hr
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="my-2 border-t border-[#00C4B4]/20 dark:border-[#FF7043]/20"
                  />
                )}
              </motion.div>
            ))}
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </motion.div>
  );
}

export default DashboardSidebar;