import { ActionTypes, ILancamento } from "./actions";
import { produce } from "immer";

interface IFinanceiroState {
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
}

export const FinanceiroReducer = (state: IFinanceiroState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_NEW_LANCAMENTO: {
      return produce(state, (draft) => {
        draft.lancamentos.push(action.payload.newLancamento);
      });
    }

    case ActionTypes.ALTERAR_TIPO_FORMULARIO: {
      return produce(state, (draft) => {
        draft.tipoFormulario = action.payload.newValueTipo;
      });
    }

    case ActionTypes.ALTERAR_CLASSIFICACAO_FORMULARIO: {
      return produce(state, (draft) => {
        draft.classificacaoFormulario = action.payload.newValueClassificacao;
      });
    }

    default: {
      return state;
    }
  }
};
