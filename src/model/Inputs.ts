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
    str?: string | null;
    rev?: string | null;
    dop?: string | null;
  };
}
