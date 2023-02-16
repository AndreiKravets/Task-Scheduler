import {makeAutoObservable} from "mobx";

export interface INote {
    title: string,
    description: string,
    date: string
}

export interface ICategory {
    name: string,
    icon: number,
    color: string,
    notes: INote[],

}
 class NotesStore{
    constructor() {
        makeAutoObservable(this)
    }

    notesArray: ICategory[] = [
        {
            name:'Expenses',
            icon: 4,
            color:'#80A3FF',
            notes:[
                {
                    title:'title',
                    description:'lorem ipsum',
                    date:'13/34/34'
                }
            ]
        },
        {
            name:'Work',
            icon:3,
            color:'#FDBE7E',
            notes:[
                {
                    title:'title',
                    description:'lorem ipsum',
                    date:'13/34/34'
                },
                {
                    title:'title',
                    description:'lorem ipsum',
                    date:'13/34/34'
                },

            ]
        },
        {
            name:'Music',
            icon:6,
            color:'#F9A090',
            notes:[
                {
                    title:'title',
                    description:'lorem ipsum',
                    date:'13/34/34'
                },
                {
                    title:'title',
                    description:'lorem ipsum',
                    date:'13/34/34'
                },

            ]
        },
        {
            name:'Travel',
            icon:13,
            color:'#6DD28C',
            notes:[
                {
                    title:'title',
                    description:'lorem ipsum',
                    date:'13/34/34'
                },
                {
                    title:'title',
                    description:'lorem ipsum',
                    date:'13/34/34'
                },

            ]
        },
        {
            name:'Study',
            icon:1,
            color:'#A59FDB',
            notes:[
                {
                    title:'title',
                    description:'lorem ipsum',
                    date:'13/34/34'
                },
                {
                    title:'title',
                    description:'lorem ipsum',
                    date:'13/34/34'
                },

            ]
        }
    ]

    setNotesArray(notes: any){
        this.notesArray = notes
    }
}

export default new NotesStore()