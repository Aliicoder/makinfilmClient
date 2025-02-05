export interface ICounter {
  prev: number;
  curPage: number;
  next: number;
  pagesLen: number;
}
export interface IVideo  {
  _id: string;
  image:{
    url: string;
  }
  video:{
    url:string;
  }
  title:{
    ar: string;
    en: string;
  },
  description:{
    ar: string;
    en: string;
  }
}
export interface IPhoto  {
  _id: string;
  image:{
    url: string;
  }
  description:{
    ar: string;
    en: string;
  }
}
export interface IQueryParams {
  searchValue: string
  curPage:number
  perPage:number
}

export interface AuthResponse {
  user:{
    name: string
    avatar: string
    roles: number[]
    accessToken:string
  }
}
export interface IResetPasswordForm {
  className?: string
}