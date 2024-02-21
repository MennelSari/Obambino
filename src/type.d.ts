export interface IuserData {
    id: number;
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    roles: string[];
  }

 export interface IChild {
    id: number;
    firstname: string;
    lastname: string;
    birthday: string;
    gender: string;
    diet: string;
    user: {
        id: number;
        firstname: string;
        lastname: string;
        email: string;
       
    } | null;  //because for api test, some children are not linked to a user
}