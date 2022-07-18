import { ReactNode } from "react";

interface SectionTitleProps {
    title: string;
    subtitle: string;
    icon: ReactNode;
}

export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
    return (
        <div className="flex gap-2">
            {icon}
            <div>
                <h1 className="text-title-title-xs text-base-subtitle font-regular">
                    {title}
                </h1>
                <h2 className="text-text-regular-s text-base-subtitle font-regular">
                    {subtitle}
                </h2>
            </div>
        </div>
    )
}