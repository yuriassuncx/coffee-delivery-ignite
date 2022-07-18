import { coffees } from "../datas/coffes";
import { CoffeCard } from "./CoffeCard";

export function OurCoffes() {
    return (
        <section className="w-full mt-8 mb-[9.8rem] container">
            <h1 className="text-title-title-l font-bold text-base-subtitle font-regular">
                Nossos cafés
            </h1>

            <div className="w-full grid lg:grid-cols-4 gap-x-8 gap-y-10 mt-14">
                {coffees.map((coffee) => (
                    <CoffeCard key={coffee.id} coffee={coffee} />
                ))}
            </div>
        </section>
    )
}