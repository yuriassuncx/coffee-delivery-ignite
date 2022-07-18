import { Bank, CreditCard, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { PaymentMethodInput } from "./PaymentMethodInput";

export const paymentMethods = {
    credit: {
        label: "Cartão de Crédito",
        icon: <CreditCard size={16} className="text-brand-purple" />,
    },
    debit: {
        label: "Cartão de Débito",
        icon: <Bank size={16} className="text-brand-purple" />,
    },
    money: {
        label: "Dinheiro",
        icon: <Money size={16} className="text-brand-purple" />
    }
}

export function PaymentMethod() {
    const { register, formState: { errors } } = useFormContext();

    const paymentMethodError = errors?.paymentMethod?.message as unknown as string;

    return (
        <div className="grid lg:grid-cols-3 gap-3">
            {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
                <PaymentMethodInput
                    key={label}
                    id={key}
                    icon={icon}
                    label={label}
                    value={key}
                    {...register("paymentMethod")}
                />
            ))}
            {paymentMethodError && 
                <h1 className="text-text-regular-s text-base-error col-span-3 font-regular">
                    {paymentMethodError}
                </h1>
            }
        </div>
    )
}