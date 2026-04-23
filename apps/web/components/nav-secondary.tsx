"use client"

import * as React from "react"

import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
    IconSettings
} from "@tabler/icons-react"
import { Help } from "./Help"

export function NavSecondary({
    ...props
}: {
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
    return (
        <SidebarGroup {...props}>
            <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarMenuItem key='IconSettings'>
                        <SidebarMenuButton>
                            <IconSettings />
                            <span>设置</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem key={'IconHelp'}>
                        <Help />
                        {/* <SidebarMenuButton>
                            <IconHelp />
                            <span>帮助</span>
                        </SidebarMenuButton> */}
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}
