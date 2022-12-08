import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { format, isValid } from "date-fns";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { GrCurrency } from "react-icons/gr";
import "twin.macro";
import { useFinanceiroContext } from "../../../../context/financeiroContext";

const FormComponent: React.FC = () => {
  const { register } = useFormContext();
  const {
    tipoFormulario,
    classificacaoFormulario,
    handleAltTipoFormulario,
    handleAltClassificacaoFormulario,
  } = useFinanceiroContext();

  const [dataLancamento, setDataLancamento] = useState<Date>(new Date());
  const dataDeLancamentoValida = isValid(dataLancamento);
  const dataDeLancamentoString = format(dataLancamento, "dd/MM/yyyy");

  const handleChangeTipo = (event: SelectChangeEvent) => {
    handleAltTipoFormulario(
      event.target.value as "default" | "ganho" | "despesa"
    );
  };

  const handleChangeClassificacao = (event: SelectChangeEvent) => {
    handleAltClassificacaoFormulario(
      event.target.value as
        | "default"
        | "investimento"
        | "salario"
        | "rendaExtra"
        | "lazer"
        | "transporte"
        | "alimentacao"
        | "conta"
    );
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          tw="w-full"
          label="Data do lançamento"
          inputFormat="dd/MM/yyyy"
          value={dataLancamento}
          {...register("dataLancamento")}
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
            value={tipoFormulario}
            {...register("tipoFormulario")}
            label="Tipo"
            onChange={handleChangeTipo}
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
            value={classificacaoFormulario}
            {...register("classificacaoFormulario")}
            label="Classificação"
            onChange={handleChangeClassificacao}
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
        {...register("valorLancamento", { valueAsNumber: true })}
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

      <Button variant="contained" type="submit" sx={{ py: 1.45, zIndex: -1 }}>
        Cadastrar lançamento
      </Button>
    </>
  );
};

export { FormComponent };
