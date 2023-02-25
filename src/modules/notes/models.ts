export interface INote {
    parent?:string,
    title: string,
    description: string,
    date: string
}
export interface ICategory {
    name: string,
    icon: number,
    color: string,
    notes: INote[]
}