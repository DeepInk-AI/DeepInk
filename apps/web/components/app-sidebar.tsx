"use client"

import {
    IconArrowBigUpLines,
    IconChartBar,
    IconDashboard,
    IconFileWord,
    IconFolder,
    IconInnerShadowTop,
    IconListDetails
} from "@tabler/icons-react"
import * as React from "react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useRouter } from "next/navigation"
import { NavDocuments } from "./nav-documents"
import { NavMain } from "./nav-main"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"

const data = {
    user: {
        name: "红烧罗非鱼",
        email: "zxl17339811909@163.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "仪表板",
            url: "/Dashboard",
            icon: IconDashboard,
        },
        {
            title: "降AIGC/降重",
            url: "#",
            icon: IconChartBar,
        },
        {
            title: "图表生成",
            url: "#",
            icon: IconListDetails,
        },
        {
            title: "订单记录",
            url: "#",
            icon: IconFolder,
        },
        {
            title: "提交工单",
            url: "#",
            icon: IconArrowBigUpLines,
        }
    ],
    documents: [
        {
            name: "基于python的鸢尾花分类学习",
            url: "#",
            icon: IconFileWord,
        },
        {
            name: "基于java的图书管理系统",
            url: "#",
            icon: IconFileWord,
        },
        {
            name: "新疆地区空气质量分析",
            url: "#",
            icon: IconFileWord,
        },
    ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const router = useRouter();
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:p-1.5!"
                            onClick={() => router.push('/')}
                        >
                            <a href="#">
                                <IconInnerShadowTop className="size-5!" />
                                <span className="text-base font-semibold">深墨 (DeepInk)</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavDocuments items={data.documents} />
                <NavSecondary className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    )
}
