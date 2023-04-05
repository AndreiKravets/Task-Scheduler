import {makeAutoObservable} from "mobx";
import {IBodyItem, ICategory, INote} from "../modules/notes/models";
import { toJS } from 'mobx'
import notes from "../modules/notes";



 class NotesStore{
    constructor() {
        makeAutoObservable(this)
    }

    notesArray: ICategory[] = []
        // [
        // {
        //     name:'Expenses',
        //     icon: 4,
        //     color:'#80A3FF',
        //     notes:[
        //         {
        //             parent:'Expenses',
        //             title:'title',
        //             body:[],
        //             date:'13/34/34'
        //         }
        //     ]
        // },
        // {
        //     name:'Work',
        //     icon:3,
        //     color:'#FDBE7E',
        //     notes:[
        //         {
        //             parent:'Work',
        //             title:'Wordpress',
        //             body:[
        //                 {
        //                     variant: "h1",
        //                     content: 'lorem ipsum'
        //                 },
        //                 {
        //                     variant: "h3",
        //                     content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
        //                 },
        //                 {
        //                     variant: "h6",
        //                     content: 'hjgvh hghgh hhgh'
        //                 }
        //             ],
        //             date:'13/34/34'
        //         },
        //         {
        //             parent:'Work',
        //             title:'React',
        //             body:[],
        //             date:'13/34/34'
        //         },
        //     ]
        // },
        // {
        //     name:'Music',
        //     icon:6,
        //     color:'#F9A090',
        //     notes:[
        //         {
        //             parent:'Music',
        //             title:'title',
        //             body:[],
        //             date:'13/34/34'
        //         },
        //         {
        //             parent:'Music',
        //             title:'title',
        //             body:[],
        //             date:'13/34/34'
        //         },
        //
        //     ]
        // },
        // {
        //     name:'Travel',
        //     icon:13,
        //     color:'#6DD28C',
        //     notes:[
        //         {
        //             parent:'Travel',
        //             title:'title',
        //             body:[],
        //             date:'13/34/34'
        //         },
        //         {
        //             parent:'Travel',
        //             title:'title',
        //             body:[],
        //             date:'13/34/34'
        //         },
        //
        //     ]
        // },
        // {
        //     name:'Study',
        //     icon:1,
        //     color:'#A59FDB',
        //     notes:[
        //         {
        //             parent:'Study',
        //             title:'title',
        //             body:[],
        //             date:'13/34/34'
        //         },
        //         {
        //             parent:'Study',
        //             title:'title',
        //             body:[],
        //             date:'13/34/34'
        //         },
        //
        //     ]
        // }
    // ]

   initNotesArray(){
        this.notesArray = JSON.parse(localStorage.getItem('notes')|| '')
   }

    setNotesArray(note: ICategory){
        this.notesArray = [...this.notesArray, note]
        localStorage.setItem('notes', JSON.stringify(this.notesArray))
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
        localStorage.setItem('notes', JSON.stringify(this.notesArray))
    }

    saveNote(category:string | undefined, name:string, body:IBodyItem[]){
       const newNote = [...this.notesArray]
        newNote.map((e:ICategory, indexCategory:number) => e.name.toLowerCase() == category ?
            e.notes.map((e:INote, indexNote:number) => e.title == name ?
                newNote[indexCategory].notes[indexNote].body = body : '')
            : '')
        this.notesArray = newNote
        localStorage.setItem('notes', JSON.stringify(this.notesArray))
    }

}

export default new NotesStore()
