import * as React from "react";

export interface Itask {
    id: number,
    status: boolean,
    title: string,
    body: string,
    date: string
}

export interface ItaskItem {
    title?: string,
    children: React.ReactNode,
    id?: any,
    status:boolean
}