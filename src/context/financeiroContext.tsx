import { createContext, ReactNode, useContext, useReducer } from "react";
import { addNewLancamento, ILancamento } from "../reducers/actions";
import { FinanceiroReducer } from "../reducers/reducer";

interface IFinanceiroContextProvider {
  lancamentos: ILancamento[];
  handleAddNewLancamento: (data: ILancamento) => void;
}

interface IFinanceiroContextProviderProps {
  children: ReactNode;
}

const FinanceiroContext = createContext({} as IFinanceiroContextProvider);

export const FinanceiroContextProvider = ({
  children,
}: IFinanceiroContextProviderProps) => {
  const [financeiroState, dispatch] = useReducer(FinanceiroReducer, {
    lancamentos: [
      {
        classificacao: "alimentacao",
        dataLancamento: "20/11/2022",
        descricaoLancamento: "teste",
        tipo: "despesa",
        tituloLancamento: "teste",
        valorLancamento: 5,
      },
    ],
  });

  const { lancamentos } = financeiroState;

  const handleAddNewLancamento = (newLancamento: ILancamento) => {
    dispatch(addNewLancamento(newLancamento));
  };

  return (
    <FinanceiroContext.Provider value={{ lancamentos, handleAddNewLancamento }}>
      {children}
    </FinanceiroContext.Provider>
  );
};

export const useFinanceiroContext = () => {
  return useContext(FinanceiroContext);
};
