"use client"
import { WritingSettings } from "@/components/aiGenerate/WritingSettings"
import { Badge } from "@/components/reui/badge"
import {
    Stepper,
    StepperContent,
    StepperIndicator,
    StepperItem,
    StepperNav,
    StepperPanel,
    StepperSeparator,
    StepperTitle,
    StepperTrigger,
} from "@/components/reui/stepper"
import { Button } from "@/components/ui/button"
import { BookUserIcon, CheckIcon, CreditCardIcon, LoaderCircleIcon, LockIcon } from 'lucide-react'
import { useState } from "react"
const steps = [
    {
        title: "写作设定",
        type: "write",
        icon: (
            <BookUserIcon className="size-4" />
        ),
    },
    {
        title: "段落撰写",
        type: "Paragraphs",
        icon: (
            <CreditCardIcon className="size-4" />
        ),
    },
    {
        title: "下载支付",
        type: "Payment",
        icon: (
            <LockIcon className="size-4" />
        ),
    },
]
export default function Page() {
    const [currentStep, setCurrentStep] = useState(1)
    return (
        <Stepper
            value={currentStep}
            onValueChange={setCurrentStep}
            indicators={{
                completed: (
                    <CheckIcon className="size-3.5" />
                ),
                loading: (
                    <LoaderCircleIcon className="size-3.5 animate-spin" />
                ),
            }}
            className="w-full p-28 flex flex-col min-h-[calc(100vh-100px)]"
        >
            {/* AI生成步骤 */}
            <StepperNav className="gap-3">
                {steps.map((step, index) => (
                    <StepperItem
                        key={index}
                        step={index + 1}
                        className="relative"
                    >
                        <StepperTrigger
                            className="flex grow flex-col items-start justify-center gap-2.5"
                            asChild
                        >
                            <StepperIndicator className="data-[state=inactive]:border-border data-[state=inactive]:text-muted-foreground data-[state=completed]:bg-success size-8 border-2 data-[state=completed]:text-white data-[state=inactive]:bg-transparent">
                                {step.icon}
                            </StepperIndicator>
                            <div className="flex flex-col items-start gap-1">
                                <div className="text-muted-foreground text-[10px] font-semibold uppercase">
                                    Step {index + 1}
                                </div>
                                <StepperTitle className="group-data-[state=inactive]/step:text-muted-foreground text-start text-base font-semibold">
                                    {step.title}
                                </StepperTitle>
                                <div>
                                    <Badge
                                        size="sm"
                                        variant="primary-light"
                                        className="hidden group-data-[state=active]/step:inline-flex"
                                    >
                                        进行中
                                    </Badge>
                                    <Badge
                                        variant="success-light"
                                        size="sm"
                                        className="hidden group-data-[state=completed]/step:inline-flex"
                                    >
                                        已完成
                                    </Badge>
                                    <Badge
                                        variant="secondary"
                                        size="sm"
                                        className="text-muted-foreground hidden group-data-[state=inactive]/step:inline-flex"
                                    >
                                        等待
                                    </Badge>
                                </div>
                            </div>
                        </StepperTrigger>
                        {steps.length > index + 1 && (
                            <StepperSeparator className="group-data-[state=completed]/step:bg-success absolute inset-x-0 inset-s-9 top-4 m-0 group-data-[orientation=horizontal]/stepper-nav:w-[calc(100%-2rem)] group-data-[orientation=horizontal]/stepper-nav:flex-none" />
                        )}
                    </StepperItem>
                ))}
            </StepperNav>
            {/* 创作步骤内容 */}
            <StepperPanel className="flex-1 text-sm">
                <StepperContent
                    value={currentStep}
                    className="flex items-center justify-center pt-14"
                >
                    {currentStep === 1 && <WritingSettings />}
                </StepperContent>
            </StepperPanel>

            <div className="flex items-center justify-between gap-2.5">
                <Button
                    variant="outline"
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                    disabled={currentStep === 1}
                >
                    上一步
                </Button>
                <Button
                    variant="outline"
                    onClick={() => setCurrentStep((prev) => prev + 1)}
                    disabled={currentStep === steps.length}
                >
                    下一步
                </Button>
            </div>
        </Stepper>
    );
}
