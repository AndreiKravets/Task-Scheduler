export interface IBodyItem {
    variant: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline",
    content: string,
    color?:string
}

export interface IBody{
    body: IBodyItem[],
    color: string,
    category: string | undefined,
    name: string,
}
export interface INote {
    parent:string | undefined,
    title: string,
    body: IBodyItem[],
    date: string
}
export interface ICategory {
    name: string,
    icon: number,
    color: string,
    notes: INote[]
}