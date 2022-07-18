import { CompleteOrderForm } from "../components/CompleteOrderForm";
import { SelectedCoffees } from "../components/SelectedCoffees";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UseCart } from "../hooks/useCart";

enum PaymentMethods {
    credit = "credit",
    debit = "debit",
    money = "money"
}

const confirmOrderFormValidationSchema = zod.object({
    cep: zod.string().min(1, "Informe o CEP"),
    street: zod.string().min(1, "Informe a Rua"),
    number: zod.string().min(1, "Informe o Número"),
    complement: zod.string(),
    district: zod.string().min(1, "Informe o Bairro"),
    city: zod.string().min(1, "Informe a Cidade"),
    uf: zod.string().min(1, "Informe a UF"),
    paymentMethod: zod.nativeEnum(PaymentMethods, {
        errorMap: () => {
            return { message: "Informe o método de pagamento" }
        }
    })
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export function CompleteOrder() {
    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderFormValidationSchema)
    });

    const { handleSubmit } = confirmOrderForm;

    const navigate = useNavigate();
    const { cleanCart } = UseCart();

    function handleConfirmOrder(data: ConfirmOrderFormData) {
        navigate("/confirmedOrder", {
            state: data,
        });

        cleanCart();
    }

    return (
        <FormProvider {...confirmOrderForm}>
            <form
                className="container mt-10 flex flex-col lg:flex-row justify-between gap-8"
                onSubmit={handleSubmit(handleConfirmOrder)}
            >
                <CompleteOrderForm />
                <SelectedCoffees />
            </form>
        </FormProvider>
    )
}