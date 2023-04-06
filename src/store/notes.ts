import {makeAutoObservable} from "mobx";
import {IBodyItem, ICategory, INote} from "../modules/notes/models";
import { toJS } from 'mobx'
import notes from "../modules/notes";



 class NotesStore{
    constructor() {
        makeAutoObservable(this)
    }

    notesArray: ICategory[] = []

     markdownEditor:string = ''

     setMarkdownEditor(val:string){
        this.markdownEditor = val
     }
   initNotesArray(){
       (localStorage.getItem('notes')) == null ?
           localStorage.setItem('notes', '[{"name":"","icon":0,"color":"#80A3FF","notes":[]}]')
           :
        this.notesArray = JSON.parse(localStorage.getItem('notes') || '')
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

    saveNote(category:string | undefined, name:string, body:string){
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
