export enum ActionTypes {
  ADD_NEW_LANCAMENTO = "ADD_NEW_LANCAMENTO",
  ALTERAR_TIPO_FORMULARIO = "ALTERAR_TIPO_FORMULARIO",
  ALTERAR_CLASSIFICACAO_FORMULARIO = "ALTERAR_CLASSIFICACAO_FORMULARIO",
}

export interface ILancamento {
  dataLancamento: string;
  tituloLancamento: string;
  descricaoLancamento: string;
  tipo: "default" | "ganho" | "despesa";
  classificacao:
    | "default"
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

export const altTipoFormulario = (
  newValueTipo: "default" | "ganho" | "despesa"
) => {
  return {
    type: ActionTypes.ALTERAR_TIPO_FORMULARIO,
    payload: {
      newValueTipo,
    },
  };
};

export const altClassificacaoFormulario = (
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
  return {
    type: ActionTypes.ALTERAR_CLASSIFICACAO_FORMULARIO,
    payload: {
      newValueClassificacao,
    },
  };
};
