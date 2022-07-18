import { Minus, Plus } from "phosphor-react";

interface QuantityInputProps {
    size?: "medium" | "small";
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void; 
}

export function QuantityInput({
    onIncrease,
    onDecrease,
    quantity,
    size = "medium"
}: QuantityInputProps) {
    return (
        <div className={`${size === "medium" ? 'p-2' : 'py-[0.3rem] px-2'} flex flex-1 bg-base-button items-center justify-between gap-1 rounded-md p-2`}>
            <button
                className="w-[0.875rem] h-[0.875rem] border-none bg-none text-brand-purple disabled:opacity-60 hover:text-brand-purple-dark transition-colors duration-100"
                onClick={onDecrease}
                disabled={quantity <= 1}
            >
                <Minus size={14} weight="fill" />
            </button>
            
            <input
                type={"number"}
                readOnly
                value={quantity}
                className="text-center w-full bg-none border-none text-base-title focus:outline-none"
                />
            
            <button
                className="w-[0.875rem] h-[0.875rem] border-none bg-none text-brand-purple disabled:opacity-5 hover:text-brand-purple-dark transition-colors duration-100"
                onClick={onIncrease}
            >
                <Plus size={14} weight="fill" />
            </button>
        </div>
    )
}