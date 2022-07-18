import { UseCart } from "../hooks/useCart";
import { CoffeeCartCard } from "./CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";

export function SelectedCoffees() {
    const { cartItems } = UseCart()

    return (
        <div className="flex flex-col gap-3 lg:w-[40rem]">
            <h1 className="text-title-title-xs mx-2 lg:mx-0 font-bold text-base-subtitle font-regular">
                Cafés selecionados
            </h1>

            <div className="section rounded-tl-[6px] rounded-r-[44px] rounded-br-[6px] rounded-l-[44px] flex flex-col">
                {cartItems.map((item) => (
                    <CoffeeCartCard key={item.id} coffee={item} />
                ))}

                <ConfirmationSection />
            </div>
        </div>
    )
}