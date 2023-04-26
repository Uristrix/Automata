export interface Schedules {
  day?: Array<Days>;
  semester?: number | null;
  year?: number | null;
  teacher?: string | null;
}

export interface Days {
  name?: string | null;
  number?: number | null;
  pairList?: Array<PairList>;
  special_day?: boolean | false;
}

export interface PairList {
  pair?: Array<Pair>;
  pairnumber?: number | null;
  pairtime?: string | null;
  groups?: Array<string>;
}

export interface Pair {
  aud?: string | null;
  group?: Array<string>;
  subgroup?: string | null;
  subject?: string | null;
  week?: number | null;
}
