import { QuantityInput } from "./QuantityInput"

import { ShoppingCart } from "phosphor-react"
import { formatMoney } from "../utils/formatMoney";
import { UseCart } from "../hooks/useCart";
import { useState } from "react";

export interface Coffee {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
}

interface CoffeeProps {
    coffee: Coffee;
}

export function CoffeCard({ coffee }: CoffeeProps) {
    const [quantity, setQuantity] = useState(1);
    const formattedPrice = formatMoney(coffee.price);
    const { addCoffeeToCart } = UseCart();

    function handleAddToCart() {
        const coffeeToAdd = {
            ...coffee,
            quantity
        }

        addCoffeeToCart(coffeeToAdd)
    }

    function handleIncrease() {
        setQuantity(state => state + 1);
    }

    function handleDecrease() {
        setQuantity(state => state - 1);
    }

    return (
        <div className="w-full bg-base-card p-5 pt-0 flex flex-col items-center text-center rounded-tl-[6px] rounded-r-[36px] rounded-br-[6px] rounded-l-[36px]">
            <img src={`${coffee.photo}`} className="w-[7.5rem] h-[7.5rem] mt-[-1.25rem]" />
            <div className="w-full flex flex-wrap items-center justify-center gap-1 mt-4 mb-5">
                {coffee.tags.map(tag => (
                    <span
                        key={`${coffee.id}${tag}`}
                        className="bg-brand-yellow-light text-brand-yellow-dark font-bold text-components-tag uppercase pt-1 px-2 rounded-full">
                            {tag}
                    </span>
                ))}
            </div>

            <h1 className="text-title-title-s font-bold text-base-subtitle font-title mb-3">
                {coffee.name}
            </h1>

            <span className="text-components-button-s text-base-label font-regular mb-2">
                {coffee.description}
            </span>

            <div className="w-full flex items-center justify-between pt-6">
                <div className="flex items-center gap-[3px]">
                    <p className="text-text-regular-s leading-4 font-regular">
                        R$
                    </p>
                    <h1 className="text-title-title-m text-base-text font-title font-bold">
                        {formattedPrice}
                    </h1>
                </div>

                <div className="w-[7.5rem] flex">
                    <QuantityInput
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease}
                        quantity={quantity}
                    />
                    <button
                        className="w-[2.375rem] h-[2.375rem] border-none flex items-center justify-center bg-brand-purple-dark text-base-card rounded-md ml-[0.3rem] transition-colors duration-150 hover:bg-brand-purple"
                        onClick={handleAddToCart}
                    >
                        <ShoppingCart size={22} weight="fill" />
                    </button>
                </div>
            </div>
        </div>
    )
}
