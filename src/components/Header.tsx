import { NavLink, Outlet } from "react-router-dom"

import coffeLogo from "../assets/images/coffee-delivery-logo.svg"
import { MapPin, ShoppingCart } from "phosphor-react"
import { UseCart } from "../hooks/useCart"

export function Header() {
    const { cartQuantity } = UseCart()

    return (
        <>
            <div className="w-full h-[6.5rem] bg-base-background flex items-center justify-center sticky top-0 left-0 z-10">
                <div className="container flex items-center justify-between mx-4 lg:mx-0">
                    <NavLink to="/">
                        <img src={coffeLogo} />
                    </NavLink>

                    <div className="flex items-center gap-3">
                        <button className="flex bg-brand-purple-light text-brand-purple-dark items-center justify-center gap-1 min-w-[2.3rem] h-[2.3rem] rounded-md border-none py-0 px-2 relative text-sm">
                            <MapPin className="text-brand-purple" size={20} weight="fill" />
                            Porto Alegre, RS
                        </button>

                        <NavLink
                            to="/completeOrder"
                            className="flex bg-brand-yellow-light text-brand-yellow-dark items-center justify-center gap-1 min-w-[2.3rem] h-[2.3rem] rounded-md border-none py-0 px-2 relative text-sm"
                        >
                            {cartQuantity >= 1 && 
                                <span className="absolute w-5 h-5 rounded-[50%] top-[calc(-1.25rem_/_2)] right-[calc(-1.25rem_/_2)] text-base-white flex items-center justify-center text-xs font-bold bg-brand-yellow-dark">
                                    {cartQuantity}
                                </span>
                            }
                            <ShoppingCart size={20} weight="fill" />
                        </NavLink>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}