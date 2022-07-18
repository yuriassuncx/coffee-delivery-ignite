import { QuantityInput } from "./QuantityInput"

import { Trash } from "phosphor-react"
import { CartItem } from "../contexts/CartContext"
import { formatMoney } from "../utils/formatMoney";
import { UseCart } from "../hooks/useCart";

interface CoffeeCartCardProps {
    coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
    const coffeeTotal = coffee.price * coffee.quantity;
    const formattedPrice = formatMoney(coffeeTotal);

    const { changeCartItemQuantity, removeCartItem } = UseCart();

    function handleIncrease() {
        changeCartItemQuantity(coffee.id, "increase");
    }

    function handleDecrease() {
        changeCartItemQuantity(coffee.id, "decrease");
    }

    function handleRemove() {
        removeCartItem(coffee.id);
    }

    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-between border-b border-solid border-base-button pb-6 mb-6">
            <div className="flex items-center gap-5">
                <img src={`${coffee.photo}`} className="w-16 h-16" />
                <div className="mt-2 h-8 items-center gap-2 space-y-1">
                    <h1 className="text-base lg:text-text-regular-m text-base-subtitle font-regular">{coffee.name}</h1>
                    <div className="flex max-w-[12rem] space-x-1 gap-2 h-full">
                        <QuantityInput
                            size="small"
                            quantity={coffee.quantity}
                            onDecrease={handleDecrease}
                            onIncrease={handleIncrease}
                        />

                        <button
                            className="flex items-center gap-1 text-base-text text-xs h-full border-none bg-base-button py-0 px-2 rounded-md transition-colors duration-150 hover:bg-base-hover"
                            onClick={handleRemove}
                        >
                            <Trash size={16} className="text-brand-purple" />
                            Remover
                        </button>
                    </div>
                </div>
            </div>

            <p className="font-bold self-start">R$ {formattedPrice}</p>
        </div>
    )
}
