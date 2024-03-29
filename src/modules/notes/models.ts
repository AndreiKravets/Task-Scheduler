export interface INote {
  parent:string,
  noteUrl:string,
  title:string,
  body:string,
  date:string
}

export interface ICategory {
  icon: number,
  categoryUrl: string,
  name: string,
  color: string,
  notes: INote[]
}

export interface IBody{
  color?: string,
  body: string,
  category: string,
  name:string
}