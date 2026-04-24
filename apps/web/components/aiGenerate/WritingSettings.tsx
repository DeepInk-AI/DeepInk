import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { getQualityControl } from "@/hooks/ai"
import { useRef, useState } from "react"

export function WritingSettings() {
    // 打断流式输出
    const abortRef = useRef(() => { });
    // AI生成内容
    const [content, setContent] = useState();
    // 等待响应
    const [loading, setLoading] = useState(false);
    const onSuccess = (message: any) => {
        console.log('onSuccess', message);
    };
    const onError = (message: any) => {
        console.log('onError', message);
    };
    const onUpdate = (message: any) => {
        console.log('AI内容', message)
        // setContent(md.render(message));
        setContent(message);
    };

    const handleAi = () => {
        const messageAi = "你是什么模型直接回答"
        getQualityControl(
            messageAi,
            onSuccess,
            onUpdate,
            onError,
            abortRef,
            setLoading,
        );
    }

    return (
        <div className="w-full max-w-md">
            <form>
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>写作设定</FieldLegend>
                        <FieldDescription>
                            填写论文标题、选择语言等基本信息，这将帮助我们更好地理解您的需求
                        </FieldDescription>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                                    标题
                                </FieldLabel>
                                <Input
                                    id="checkout-7j9-card-name-43j"
                                    placeholder="请填写您的题目"
                                    required
                                />
                                <FieldDescription>
                                    额外的描述
                                </FieldDescription>
                            </Field>
                            <div className="grid grid-cols-2 gap-4">
                                <Field>
                                    <FieldLabel htmlFor="checkout-exp-month-ts6">
                                        论文类型
                                    </FieldLabel>
                                    <Select defaultValue="">
                                        <SelectTrigger id="checkout-exp-month-ts6">
                                            <SelectValue placeholder="选择一个论文类型" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="journal_paper">期刊论文</SelectItem>
                                                <SelectItem value="business_plan">创业计划书</SelectItem>
                                                <SelectItem value="internship_log">实习日志</SelectItem>
                                                <SelectItem value="philosophy">哲学</SelectItem>
                                                <SelectItem value="economics">经济学</SelectItem>
                                                <SelectItem value="law">法学</SelectItem>
                                                <SelectItem value="education">教育学</SelectItem>
                                                <SelectItem value="literature">文学</SelectItem>
                                                <SelectItem value="history">历史学</SelectItem>
                                                <SelectItem value="science">理学</SelectItem>
                                                <SelectItem value="engineering">工学</SelectItem>
                                                <SelectItem value="agriculture">农学</SelectItem>
                                                <SelectItem value="medicine">医学</SelectItem>
                                                <SelectItem value="management">管理学</SelectItem>
                                                <SelectItem value="arts">艺术学</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                                        论文语言
                                    </FieldLabel>
                                    <Select defaultValue="">
                                        <SelectTrigger id="checkout-7j9-exp-year-f59">
                                            <SelectValue placeholder="未指定则是中文" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="2024">中文</SelectItem>
                                                <SelectItem value="2025">英文</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </Field>
                            </div>
                        </FieldGroup>
                    </FieldSet>
                    <FieldSeparator />
                    <FieldSet>
                        <FieldLegend variant="label">
                            风格特点
                        </FieldLegend>
                        <FieldGroup className="gap-3">
                            <Field orientation="horizontal">
                                <Checkbox id="finder-pref-9k2-hard-disks-ljj" />
                                <FieldLabel
                                    htmlFor="finder-pref-9k2-hard-disks-ljj"
                                    className="font-normal"
                                    defaultChecked
                                >
                                    严肃严谨
                                </FieldLabel>
                            </Field>
                            <Field orientation="horizontal">
                                <Checkbox id="finder-pref-9k2-external-disks-1yg" />
                                <FieldLabel
                                    htmlFor="finder-pref-9k2-external-disks-1yg"
                                    className="font-normal"
                                >
                                    文笔优美
                                </FieldLabel>
                            </Field>
                            <Field orientation="horizontal">
                                <Checkbox id="finder-pref-9k2-cds-dvds-fzt" />
                                <FieldLabel
                                    htmlFor="finder-pref-9k2-cds-dvds-fzt"
                                    className="font-normal"
                                >
                                    善用古文
                                </FieldLabel>
                            </Field>
                            <Field orientation="horizontal">
                                <Checkbox id="finder-pref-9k2-connected-servers-6l2" />
                                <FieldLabel
                                    htmlFor="finder-pref-9k2-connected-servers-6l2"
                                    className="font-normal"
                                >
                                    抛砖引玉
                                </FieldLabel>
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                    <FieldSeparator />
                    <FieldSet className="w-full max-w-xs">
                        <FieldLegend variant="label">生成长度</FieldLegend>
                        <RadioGroup defaultValue="monthly">
                            <Field orientation="horizontal">
                                <RadioGroupItem value="6000" id="plan-6000" />
                                <FieldLabel htmlFor="plan-monthly" className="font-normal">
                                    6000字 (￥9.99)
                                </FieldLabel>
                            </Field>
                            <Field orientation="horizontal">
                                <RadioGroupItem value="10000" id="plan-10000" />
                                <FieldLabel htmlFor="plan-yearly" className="font-normal">
                                    10000字 (￥19.99)
                                </FieldLabel>
                            </Field>
                            <Field orientation="horizontal">
                                <RadioGroupItem value="15000" id="plan-15000" />
                                <FieldLabel htmlFor="plan-lifetime" className="font-normal">
                                    15000字 (￥29.99)
                                </FieldLabel>
                            </Field>
                        </RadioGroup>
                    </FieldSet>
                    <Field orientation="horizontal">
                        <Button type="submit">Submit</Button>
                        <Button variant="outline" type="button">
                            Cancel
                        </Button>
                    </Field>
                </FieldGroup>
            </form>
            <Button onClick={handleAi}>测试</Button>
        </div >
    )
}
