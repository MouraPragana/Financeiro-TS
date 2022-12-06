import { ActionTypes, ILancamento } from "./actions";
import { produce } from "immer";

interface IFinanceiroState {
  lancamentos: ILancamento[];
}

export const FinanceiroReducer = (state: IFinanceiroState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_NEW_LANCAMENTO: {
      return produce(state, (draft) => {
        draft.lancamentos.push(action.payload.newLancamento);
      });
    }

    default: {
      return state;
    }
  }
};
