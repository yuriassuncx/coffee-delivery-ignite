import { ReactNode } from "react";

interface InfoWithIconProps {
    icon: ReactNode;
    text: string | ReactNode;
    iconColor: string;
} 

export function InfoWithIcon({ icon, text, iconColor }: InfoWithIconProps) {
    return (
        <div className="flex items-center gap-3">
            <div className={`${iconColor} w-8 h-8 rounded-[50%] text-base-white flex items-center justify-center`}>
                {icon}
            </div>
            {typeof text === "string" ? <p>{text}</p> : text}
        </div>
    )
}