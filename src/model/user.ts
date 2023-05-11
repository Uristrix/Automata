export interface User {
  id: number;
  login: string;
  password: string;
  name: string;
  group_id: number | null;
  role: boolean;
}

// export interface exUser extends User {
//   groupName: string | null;
// }
