import { forwardRef, InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
    rightText?: string;
    hasError?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ error, className, hasError, rightText, ...props}, ref) => {
        return (
            <div className={`inputWrapper ${className}`}>
                <div className={`input ${hasError && "border-base-error"}`}>
                    <input
                        className="flex-1 h-full bg-none border-none bg-base-input text-base-text text-xs py-0 px-3 placeholder:text-base-label"
                        {...props}
                        ref={ref}
                    />
                    {rightText && <p className="text-xs mr-3 italic text-base-label">{rightText}</p>}
                </div>
                {error && (
                    <span className="inputWrapperSpan text-text-regular-s font-regular">
                        {error}
                    </span>
                )}
            </div>
        )
    }
)