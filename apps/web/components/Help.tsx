import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog"
import customerService from '@/public/wx.png'
import { IconHelp } from "@tabler/icons-react"
import Image from "next/image"
import { SidebarMenuButton } from "./ui/sidebar"

export function Help() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <SidebarMenuButton >
                    <IconHelp />
                    <span>帮助</span>
                </SidebarMenuButton>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>遇到问题如何群求帮助?</AlertDialogTitle>
                    <AlertDialogDescription className="text-red-700 font-bold">
                        1. 建议优先使用工单，详细描述您的问题，我们会在24小时之内回复工单，请耐心等待.
                    </AlertDialogDescription>
                    <AlertDialogDescription>
                        2. 添加客服微信(1-5个工作日内验证)，请备注您遇到的问题，否则验证不通过.
                    </AlertDialogDescription>
                    <Image
                        src={customerService}
                        alt="客服微信"
                        width={500}
                    />
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>知晓</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
