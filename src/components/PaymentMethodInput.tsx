import { forwardRef, InputHTMLAttributes, ReactNode } from "react"

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
    icon: ReactNode;
    label: string;
}

export const PaymentMethodInput = forwardRef<HTMLInputElement, PaymentMethodInputProps>(({ id, icon, label, ...props }, ref) => {
    return (
        <div>
            <input
                id={id}
                type="radio"
                name="paymentMethod"
                ref={ref}
                className="hidden appearance-none checked:bg-brand-purple checked:border-brand-purple"
                {...props}
            />
            <label htmlFor={id} className="group">
                <div className="py-0 px-4 bg-base-button text-base-text flex items-center justify-start gap-3 text-xs uppercase rounded-md h-12 border border-solid border-base-button transition-colors duration-150 hover:bg-base-hover select-none">
                    {icon}
                    {label}
                </div>
            </label>
        </div>
    )
})