export interface userSignup {
  user_name: string;
  email: string;
  cellphone: number;
  fullname: string;
  sex: number;
  dob: string;
  address: string;
  address2: string;
  password: string;
}

export interface userSignin {
  user_name: string | null;
  password: string;
}
