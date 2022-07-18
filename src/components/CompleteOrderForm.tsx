import { SectionTitle } from "./SectionTitle";

import { MapPinLine, CurrencyDollar } from "phosphor-react";
import { AdressForm } from "./AdressForm";
import { PaymentMethod } from "./PaymentMethod";

export function CompleteOrderForm() {
    return (
        <div className="flex flex-col gap-3 lg:w-[40rem]">
            <h1 className="text-title-title-xs mx-2 lg:mx-0 font-bold text-base-subtitle font-regular">
                Complete seu pedido
            </h1>

            <div className="section flex flex-col gap-8">
                <SectionTitle
                    title="Endereço de Entrega"
                    subtitle="Informe o endereço onde deseja receber seu pedido"
                    icon={<MapPinLine size={22} className="text-brand-yellow-dark" />}
                />

                <AdressForm />
            </div>

            <div className="section flex flex-col gap-8">
                <SectionTitle
                    title="Pagamento"
                    subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                    icon={<CurrencyDollar size={22} className="text-brand-purple" />}
                />

                <PaymentMethod />
            </div>
        </div>
    )
}