import { makeAutoObservable } from "mobx";


class ProfileStore {
  constructor() {
    makeAutoObservable(this)
  }

  countNones = 6

  user = localStorage.getItem('user') == null
    ?
    'fill name'
    :
    JSON.parse(localStorage.getItem('user') || '')

  avatar = localStorage.getItem('avatar') == null
    ?
    'AA'
    :
    JSON.parse(localStorage.getItem('avatar') || '')


  saveUser(first: string, last: string) {
    this.user = first + ' ' + last
    this.avatar = first.trim()[0] + last.trim()[0]
    localStorage.setItem('user', JSON.stringify(this.user))
    localStorage.setItem('avatar', JSON.stringify(this.avatar))
  }
}

const profileStore = new ProfileStore()
export { profileStore }