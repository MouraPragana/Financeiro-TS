import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { format, isValid } from "date-fns";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "twin.macro";
import * as z from "zod";
import { GrCurrency } from "react-icons/gr";

const Settings: React.FC = () => {
  const [dataLancamento, setDataLancamento] = useState<Date>(new Date());
  const dataDeLancamentoValida = isValid(dataLancamento);
  const dataDeLancamentoString = format(dataLancamento, "dd/MM/yyyy");

  const schema = z.object({
    tituloLancamento: z.string().min(1, { message: "Titulo é necessário." }),
    descricaoLancamento: z
      .string()
      .min(1, { message: "Descrição é necessária." }),
    valorLancamento: z
      .number()
      .min(0.01, { message: "Valor mínimo é de 1 centavo." }),
  });

  interface IForm {
    tituloLancamento: string;
    descricaoLancamento: string;
    valorLancamento: number;
  }

  const { register, handleSubmit } = useForm<IForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: IForm) => {
    if (dataDeLancamentoValida) {
      console.log(data);
      console.log(dataDeLancamentoString);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <div tw="flex flex-col px-3 mx-5 py-4 w-[750px]">
      <h1 tw="md:text-2xl text-[1rem] font-bold mb-3 text-gray-900 text-justify">
        Configurações
      </h1>
      <p tw="md:text-base text-[0.85rem] text-gray-900 text-justify indent-8 my-2">
        Aqui você fará o cadastro de seus lançamentos financeiros, como ganhos e
        despesas, realizando também suas classificações.
      </p>
      <form
        tw="flex flex-col px-4 py-3 space-y-5 h-full w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            tw="w-full"
            label="Data do lançamento"
            inputFormat="dd/MM/yyyy"
            value={dataLancamento}
            onChange={(newValue) => {
              newValue && setDataLancamento(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} onKeyDown={onKeyDown} />
            )}
          />
        </LocalizationProvider>

        <TextField
          tw="w-full"
          id="outlined-basic"
          label="Título do Lançamento"
          variant="outlined"
          autoComplete="off"
          {...register("tituloLancamento")}
        />

        <TextField
          tw="w-full"
          id="outlined-basic"
          label="Descrição do Lançamento"
          variant="outlined"
          autoComplete="off"
          {...register("descricaoLancamento")}
        />

        <div tw="flex lg:flex-row flex-col lg:space-x-5 lg:space-y-0 space-y-5">
          <FormControl tw="w-full">
            <InputLabel id="tipo">Tipo</InputLabel>
            <Select
              labelId="tipo"
              id="tipo"
              value={"default"}
              label="Tipo"
              // onChange={handleChange}
            >
              <MenuItem value={"default"}>Selecione uma opção</MenuItem>
              <MenuItem value={"ganho"}>Ganho</MenuItem>
              <MenuItem value={"despesa"}>Despesa</MenuItem>
            </Select>
          </FormControl>

          <FormControl tw="w-full">
            <InputLabel id="classificacao">Classificação</InputLabel>
            <Select
              labelId="classificacao"
              id="classificacao"
              value={"default"}
              label="Classificação"
              // onChange={handleChange}
            >
              <MenuItem value={"default"}>Selecione uma opção</MenuItem>
              <MenuItem value={"investimento"}>Investimento</MenuItem>
              <MenuItem value={"salario"}>Salário</MenuItem>
              <MenuItem value={"rendaExtra"}>Renda Extra</MenuItem>
              <MenuItem value={"lazer"}>Lazer</MenuItem>
              <MenuItem value={"transporte"}>Transporte</MenuItem>
              <MenuItem value={"alimentacao"}>Alimentação</MenuItem>
              <MenuItem value={"conta"}>Conta</MenuItem>
            </Select>
          </FormControl>
        </div>

        <TextField
          tw="w-full"
          id="outlined-basic"
          label="Valor"
          variant="outlined"
          autoComplete="off"
          {...register("valorLancamento")}
          type="number"
          inputProps={{
            step: 0.01,
            min: 0,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <GrCurrency size={20} />
              </InputAdornment>
            ),
          }}
        />

        <Button variant="contained" type="submit" sx={{ py: 1.45 }}>
          Cadastrar lançamento
        </Button>
      </form>
    </div>
  );
};

export default Settings;
