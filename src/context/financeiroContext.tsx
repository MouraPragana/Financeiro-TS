import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { addNewLancamento, ILancamento } from "../reducers/actions";
import { FinanceiroReducer } from "../reducers/reducer";
import { useLocalStorage } from "../hooks/useLocalStorage";

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
  const [localStorageLancamentos, setLocalStorageLancamentos] = useLocalStorage(
    "@FinanceiroTS",
    []
  );

  const [financeiroState, dispatch] = useReducer(FinanceiroReducer, {
    lancamentos: localStorageLancamentos,
  });

  const { lancamentos } = financeiroState;

  useEffect(() => {
    setLocalStorageLancamentos(lancamentos);
  }, [lancamentos]);

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
