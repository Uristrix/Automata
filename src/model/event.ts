export interface Event {
  id?: number;
  length: number;
  test_num: number;
  description: string;
  date: string;
}

export interface exEvent extends Event {
  users: Array<{ user_id: number }>;
}
