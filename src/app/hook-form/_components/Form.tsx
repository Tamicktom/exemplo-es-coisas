"use client";
//* Libraries imports
import type { ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

//* Components imports
import { FormInput } from '@/components/Inputs';
import { Button } from '@/components/ui/button';

//* Local imports
import { getCep } from '@/services/viaCep';
import { type Address, type States, addressSchema } from '@/schemas/address';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';

//* Hooks imports
import { useSaveAddress } from "../_hooks";


export function Form() {
  const saveAddress = useSaveAddress();

  const { toast, dismiss } = useToast();

  const form = useForm<Address>({
    resolver: zodResolver(addressSchema),
  });

  const handleCep = async (cep: string) => {
    try {
      const data = await getCep(cep);
      form.setValue('street', data.logradouro);
      form.setValue('neighborhood', data.bairro);
      form.setValue('city', data.localidade);
      form.setValue('state', data.uf as States);
      form.clearErrors('zip');
    } catch (error) {
      form.setError('zip', {
        type: 'manual',
        message: 'Cep inválido',
      });
      form.setValue('street', '');
      form.setValue('neighborhood', '');
      form.setValue('city', '');
      form.setValue('state', '' as States);
    }
  }

  const handleSubmit = (data: Address) => {
    console.log(data);

    const banana = toast({
      title: 'Enviando endereço',
      description: 'Estamos enviando seu endereço, aguarde um momento...',
      duration: 5000,
    })

    saveAddress.mutate(data, {
      onSuccess: () => {
        banana.dismiss();
        toast({
          title: 'Endereço enviado',
          description: 'Seu endereço foi enviado com sucesso!',
          duration: 5000,
        });
      },
      onError: () => {
        banana.dismiss();
        toast({
          title: 'Erro ao enviar endereço',
          description: 'Houve um erro ao enviar seu endereço, tente novamente!',
          action: <ToastAction
            altText='Tentar denovo'
            onClick={() => {
              dismiss();
              console.log('Tentando denovo');
            }}
          >
            Tentar denovo
          </ToastAction>,
          duration: 5000,
        });
      }
    });
  }

  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className='flex flex-col gap-12 w-full justify-center items-center'
    >
      <div className='flex flex-col justify-center items-center w-full'>
        <div className='flex flex-row gap-2 w-full'>
          <FormInput
            label="CEP"
            id="zip"
            error={form.formState.errors.zip?.message}
            {...form.register("zip", {
              required: true,
              onChange: (e: ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value;
                const removeNonDigits = value.replace(/\D/g, "");
                const masked = removeNonDigits.replace(/(\d{5})(\d{3})/, "$1-$2");
                const removeExtraDigits = masked.slice(0, 9);
                if (removeExtraDigits.length === 9)
                  handleCep(removeExtraDigits.replace('-', ''));
                form.setValue("zip", removeExtraDigits);
              }
            })}
          />
          <FormInput
            label="Número"
            id="number"
            error={form.formState.errors.number?.message}
            {...form.register("number", {
              required: true,
              min: 1,
              max: 10000,
              onChange: (e: ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value;
                const removeNonDigits = value.replace(/\D/g, "");
                const removeExtraDigits = removeNonDigits.slice(0, 4);
                form.setValue("number", removeExtraDigits);
              }
            })}
          />
        </div>
        <FormInput
          label="Rua"
          id="street"
          error={form.formState.errors.street?.message}
          {...form.register("street")}
        />
        <FormInput
          label="Bairro"
          id="neighborhood"
          error={form.formState.errors.neighborhood?.message}
          {...form.register("neighborhood")}
        />
        <div className='flex flex-row gap-2 w-full'>
          <FormInput
            label="Cidade"
            id="city"
            error={form.formState.errors.city?.message}
            {...form.register("city")}
          />
          <FormInput
            label="Estado"
            id="state"
            error={form.formState.errors.state?.message}
            {...form.register("state")}
          />
        </div>
      </div>
      <Button
        type="submit"
        className='w-full'
        disabled={saveAddress.isPending}
      >
        {saveAddress.isPending ? 'Enviando...' : 'Enviar'}
      </Button>
    </form>
  );
}