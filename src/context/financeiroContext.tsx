import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import {
  addNewLancamento,
  altClassificacaoFormulario,
  altTipoFormulario,
  ILancamento,
} from "../reducers/actions";
import { FinanceiroReducer } from "../reducers/reducer";

interface IFinanceiroContextProvider {
  lancamentos: ILancamento[];
  tipoFormulario: "default" | "ganho" | "despesa";
  classificacaoFormulario:
    | "default"
    | "investimento"
    | "salario"
    | "rendaExtra"
    | "lazer"
    | "transporte"
    | "alimentacao"
    | "conta";
  handleAddNewLancamento: (data: ILancamento) => void;
  handleAltTipoFormulario: (data: "default" | "ganho" | "despesa") => void;
  handleAltClassificacaoFormulario: (
    data:
      | "default"
      | "investimento"
      | "salario"
      | "rendaExtra"
      | "lazer"
      | "transporte"
      | "alimentacao"
      | "conta"
  ) => void;
}

interface IFinanceiroContextProviderProps {
  children: ReactNode;
}

const FinanceiroContext = createContext({} as IFinanceiroContextProvider);

export const FinanceiroContextProvider = ({
  children,
}: IFinanceiroContextProviderProps) => {
  const [localStorageLancamentos, setLocalStorageLancamentos] = useLocalStorage(
    "@FinanceiroTS",
    []
  );

  const [financeiroState, dispatch] = useReducer(FinanceiroReducer, {
    lancamentos: localStorageLancamentos,
    tipoFormulario: "default",
    classificacaoFormulario: "default",
  });

  const { lancamentos, tipoFormulario, classificacaoFormulario } =
    financeiroState;

  useEffect(() => {
    setLocalStorageLancamentos(lancamentos);
  }, [lancamentos]);

  const handleAddNewLancamento = (newLancamento: ILancamento) => {
    dispatch(addNewLancamento(newLancamento));
  };

  const handleAltTipoFormulario = (
    newValueTipo: "default" | "ganho" | "despesa"
  ) => {
    dispatch(altTipoFormulario(newValueTipo));
  };

  const handleAltClassificacaoFormulario = (
    newValueClassificacao:
      | "default"
      | "investimento"
      | "salario"
      | "rendaExtra"
      | "lazer"
      | "transporte"
      | "alimentacao"
      | "conta"
  ) => {
    dispatch(altClassificacaoFormulario(newValueClassificacao));
  };

  return (
    <FinanceiroContext.Provider
      value={{
        lancamentos,
        tipoFormulario,
        classificacaoFormulario,
        handleAddNewLancamento,
        handleAltTipoFormulario,
        handleAltClassificacaoFormulario,
      }}
    >
      {children}
    </FinanceiroContext.Provider>
  );
};

export const useFinanceiroContext = () => {
  return useContext(FinanceiroContext);
};
