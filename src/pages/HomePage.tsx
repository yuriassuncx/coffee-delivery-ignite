import { InfoWithIcon } from "../components/InfoWithIcon"

import introImg from "../assets/images/intro-img.png"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import { OurCoffes } from "../components/OurCoffes"

export function HomePage() {
    return (
        <>
            <section className="w-full h-[34rem] mt-24 mb-44 lg:mb-0 lg:mt-0 flex flex-col lg:flex-row items-center justify-center bg-background bg-cover bg-opacity-5 bg-blend-hard-light bg-bottom">
                <div className="container pt-12 lg:pt-0">
                    <div className="flex flex-col mx-4 lg:mx-0 lg:flex-row items-center justify-between gap-14">
                        <section className="space-y-3">
                            <h1 className="text-4xl lg:text-title-title-xl font-bold text-base-title font-regular">
                                Encontre o café perfeito para qualquer hora do dia.
                            </h1>
                            <h3 className="lg:text-title-title-m font-title text-base-subtitle">
                                Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                            </h3>
                            <div className="w-full grid lg:grid-cols-2 gap-y-5 pt-[4.125rem]">
                                <InfoWithIcon
                                    icon={<ShoppingCart weight="fill" />}
                                    iconColor="bg-brand-yellow-dark"
                                    text="Compra simples e segura"
                                />
                                <InfoWithIcon
                                    icon={<Package weight="fill" />}
                                    iconColor="bg-base-text"
                                    text="Embalagem mantém o café intacto"
                                />
                                <InfoWithIcon
                                    icon={<Timer weight="fill" />}
                                    iconColor="bg-brand-yellow"
                                    text="Entrega rápida e rastreada"
                                />
                                <InfoWithIcon
                                    icon={<Coffee weight="fill" />}
                                    iconColor="bg-brand-purple"
                                    text="O café chega fresquinho até você"
                                />
                            </div>
                        </section>
                        <img src={introImg} />
                    </div>
                </div>
            </section>

            <OurCoffes />
        </>
    )
}