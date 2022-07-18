import { useFormContext } from "react-hook-form";
import { Input } from "./Input";

interface ErrorsType {
    errors: {
        [key: string]: {
            message: string;
        }
    }
}

export function AdressForm() {
    const { register, formState } = useFormContext();

    const { errors } = formState as unknown as ErrorsType;

    return (
        <div className="w-full grid lg:grid-cols-[12.5rem 17.25rem 3.75rem] gap-x-3 gap-y-4 lg:grid-flow-dense">
            <Input
                placeholder="CEP"
                className="lg:col-span-3 lg:max-w-[12.5rem]"
                type="number"
                {...register("cep")}
                error={errors.cep?.message}
            />
            <Input
                placeholder="Rua"
                className="lg:col-span-3"
                {...register("street")}
                error={errors.street?.message}
            />
            <Input
                placeholder="Número"
                type="number"
                {...register("number")}
                error={errors.number?.message}
            />
            <Input 
                placeholder="Complemento"
                className="lg:col-span-2"
                {...register("complement")}
                error={errors.complement?.message}
                rightText="Opcional"
            />
            <Input
                placeholder="Bairro"
                {...register("district")}
                error={errors.district?.message}
            />
            <Input
                placeholder="Cidade"
                {...register("city")}
                error={errors.city?.message}
            
            />
            <Input
                placeholder="UF"
                {...register("uf")}
                error={errors.uf?.message}                
            />
        </div>
    )
}