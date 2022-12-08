import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import "twin.macro";
import * as z from "zod";
import { useFinanceiroContext } from "../../context/financeiroContext";
import { FormComponent } from "./components/formComponent";

const Financial: React.FC = () => {
  const { lancamentos, handleAddNewLancamento } = useFinanceiroContext();

  const schema = z.object({
    dataLancamento: z.string(),
    tituloLancamento: z.string().min(1, { message: "Titulo é necessário." }),
    descricaoLancamento: z
      .string()
      .min(1, { message: "Descrição é necessária." }),
    valorLancamento: z
      .number()
      .min(0.01, { message: "Valor mínimo é de 1 centavo." }),
    tipoFormulario: z.string(),
    classificacaoFormulario: z.string(),
  });

  interface IForm {
    tituloLancamento: string;
    descricaoLancamento: string;
    valorLancamento: number;
  }

  const methods = useForm<IForm>({
    resolver: zodResolver(schema),
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: IForm) => {
    console.log(data);
    // if (dataDeLancamentoValida) {
    //   console.log(data);
    //   console.log(dataDeLancamentoString);
    // }
    handleAddNewLancamento({
      classificacao: "alimentacao",
      dataLancamento: "20/11/2022",
      descricaoLancamento: "teste",
      tipo: "despesa",
      tituloLancamento: "teste",
      valorLancamento: 5,
    });
  };

  const error = (e: any) => {
    console.log(e);
  };

  return (
    <div tw="flex flex-col px-3 mx-5 py-4 w-[750px] mb-[92.8px]">
      <h1 tw="md:text-2xl text-[1rem] font-bold mb-3 text-gray-900 text-justify">
        Lançamentos
      </h1>
      <p tw="md:text-base text-[0.85rem] text-gray-900 text-justify indent-8 my-2">
        Aqui você fará o cadastro de seus lançamentos financeiros, como ganhos e
        despesas, realizando também suas classificações.
      </p>
      <form
        tw="flex flex-col px-4 py-3 space-y-5 h-full w-full"
        onSubmit={handleSubmit(onSubmit, error)}
      >
        <FormProvider {...methods}>
          <FormComponent />
        </FormProvider>
      </form>
    </div>
  );
};

export default Financial;
