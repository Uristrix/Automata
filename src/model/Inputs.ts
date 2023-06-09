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

export interface InputsDict {
  [keys: string]: {
    [keys: string]: Array<string | null>;
  };
}

export interface InputsMulti {
  [keys: string]: {
    [keys: string]: string | null | { [keys: string]: string };
  };
}

export interface InputsCode {
  [keys: string]: {
    str?: string | null;
    rev?: string | null;
    dop?: string | null;
  };
}
