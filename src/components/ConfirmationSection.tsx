import { UseCart } from "../hooks/useCart"
import { formatMoney } from "../utils/formatMoney";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
    const { cartItemsTotal, cartQuantity } = UseCart();
    const cartTotal = DELIVERY_PRICE + cartItemsTotal;

    const formattedItemsTotal = formatMoney(cartItemsTotal);
    const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);
    const formattedCartTotal = formatMoney(cartTotal);

    return (
        <section className="flex flex-col gap-[0.8rem]">
            <div className="flex items-center justify-between">
                <h1 className="text-text-regular-m text-base-subtitle font-regular">
                    Total de itens
                </h1>
                <h1 className="text-text-regular-m text-base-subtitle font-regular">
                    R$ {formattedItemsTotal}
                </h1>
            </div>
            <div className="flex items-center justify-between">
                <h1 className="text-text-regular-m text-base-subtitle font-regular">
                    Entrega
                </h1>
                <h1 className="text-text-regular-m text-base-subtitle font-regular">
                    R$ {formattedDeliveryPrice}
                </h1>
            </div>
            <div className="flex items-center justify-between">
                <h1 className="text-text-bold-l font-bold text-base-subtitle font-regular">
                    Total de itens
                </h1>
                <h1 className="text-text-bold-l font-bold text-base-subtitle font-regular">
                    R$ {formattedCartTotal}
                </h1>
            </div>
            <button
                className="py-3 px-[2.8rem] mt-[0.7rem] text-base-white font-bold bg-brand-yellow text-components-button-g border-none rounded-md uppercase transition-colors duration-150 leading-[1.3rem] disabled:opacity-70 disabled:cursor-not-allowed hover:bg-brand-yellow-dark"
                disabled={cartQuantity <= 0}
                type="submit"
            >
                Confirmar pedido
            </button>
        </section>
    )
}