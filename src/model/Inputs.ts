export interface Inputs {
  [keys: string]: {
    [keys: string]: string | null;
  };
}

export interface InputsArr {
  [keys: string]: Array<{
    [keys: string]: string | null;
  }>;
}

export interface InputsCode {
  [keys: string]: {
    straight?: string | null;
    back?: string | null;
    additional?: string | null;
  };
}
