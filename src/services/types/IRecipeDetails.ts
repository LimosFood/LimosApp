export interface IRecipeDetails {
  ingredientes: IIngredients[];
  instrucoes: ISteps[];
}

export interface IIngredients {
  id_ingrediente: number;
  descricao: string;
  id_ingrediente_tipo: number;
  tipo_ingrediente: string;
  quantidade: number;
  unidade: string;
  simbolo_unidade: string;
}

export interface ISteps {
  instrucao: string;
  ordem: number;
}
