import { InfoWithIcon } from "../components/InfoWithIcon"
import { paymentMethods } from "../components/PaymentMethod"
import { OrderData } from "./CompleteOrder"

import { useLocation, useNavigate } from "react-router-dom"

import { Clock, CurrencyDollar, MapPin } from "phosphor-react"
import confirmedImg from "../assets/images/confirmed-order.svg"
import { useEffect } from "react"

interface LocationType {
    state: OrderData;
}

export function OrderConfimed() {
    const { state } = useLocation() as unknown as LocationType;

    const navigate = useNavigate();

    useEffect(() => {
        if (!state) {
            navigate("/")
        }
    }, []);

    if (!state) return <></>;

    return (
        <div className="container flex flex-col gap-10 mt-20">
            <div className="mx-2 lg:mx-0">
                <h1 className="text-3xl lg:text-title-title-l font-bold text-brand-yellow-dark font-regular">
                    Uhu! Pedido confirmado
                </h1>

                <h1 className="text-base lg:text-title-title-xs text-base-subtitle font-regular">
                    Agora é só aguardar que o café chegará até você
                </h1>

                <section className="flex items-center justify-center lg:justify-between pt-10">
                    <div className="p-10 rounded-tl-[6px] rounded-r-[36px] rounded-br-[6px] rounded-l-[36px] bg-base-background min-w-[16rem] lg:min-w-[32rem] flex flex-col gap-8 relative before:absolute before:inset-[-1px] before:rounded-tl-[7px] before:rounded-r-[37px] before:rounded-br-[7px] before:rounded-l-[37px] before:z-[-1] before:bg-gradient-to-r before:from-[#DBAC2C] before:via-[#8047F8] before:to-[#8047F8]">
                        <InfoWithIcon
                            icon={<MapPin weight="fill" />}
                            iconColor="bg-brand-purple"
                            text={
                                <h1 className="text-sm lg:text-text-regular-m font-regular">
                                    Entrega em <strong>{state.street}, {state.number}</strong>
                                    <br />
                                    {state.district} - {state.city}, {state.uf}
                                </h1>
                            }
                        />
                        <InfoWithIcon
                            icon={<Clock weight="fill" />}
                            iconColor="bg-brand-yellow"
                            text={
                                <h1 className="text-sm lg:text-text-regular-m font-regular">
                                    Previsão de entrega
                                    <br />
                                    <strong>20 min - 30 min</strong>
                                </h1>
                            }
                        />
                        <InfoWithIcon
                            icon={<CurrencyDollar weight="fill" />}
                            iconColor="bg-brand-yellow"
                            text={
                                <h1 className="text-sm lg:text-text-regular-m font-regular">
                                    Pagamento na entrega
                                    <br />
                                    <strong>{paymentMethods[state.paymentMethod].label}</strong>
                                </h1>
                            }
                        />
                    </div>

                    <img src={confirmedImg} className="hidden lg:block" />
                </section>
            </div>
        </div>
    )
}