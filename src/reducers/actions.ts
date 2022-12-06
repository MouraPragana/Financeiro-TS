export enum ActionTypes {
  ADD_NEW_LANCAMENTO = "ADD_NEW_LANCAMENTO",
}

export interface ILancamento {
  dataLancamento: string;
  tituloLancamento: string;
  descricaoLancamento: string;
  tipo: "ganho" | "despesa";
  classificacao:
    | "investimento"
    | "salario"
    | "rendaExtra"
    | "lazer"
    | "transporte"
    | "alimentacao"
    | "conta";
  valorLancamento: number;
}

export const addNewLancamento = (newLancamento: ILancamento) => {
  return {
    type: ActionTypes.ADD_NEW_LANCAMENTO,
    payload: {
      newLancamento,
    },
  };
};
