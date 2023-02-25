import {makeAutoObservable} from "mobx";
import {ICategory, INote} from "../modules/notes/models";
import { toJS } from 'mobx'


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
                    title:'Wordpress',
                    description:'lorem ipsum',
                    date:'13/34/34'
                },
                {
                    title:'React',
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



    setNotesArray(note: ICategory){
        this.notesArray = [...this.notesArray, note]
    }

    setNote(newNote: INote){
        const temp = [...this.notesArray]
        const indexCategory = temp.findIndex((e)=>{
            return(
            toJS(e).name.toLowerCase() == newNote.parent
            )
        })
        temp[indexCategory].notes.push(newNote)
        this.notesArray = temp
    }

}

export default new NotesStore()
