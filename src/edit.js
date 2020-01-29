import { initialiseEditPage, lastEdited } from './views'
import { updateNote, removeNote } from './notes'

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const lastEditedElement = document.querySelector('#last-edited')

const noteID = location.hash.substring(1)

initialiseEditPage(noteID)

titleElement.addEventListener('input', (e) => {
    const note = updateNote(noteID, {
        title: e.target.value
    })
    lastEditedElement.textContent = lastEdited(note.updatedAt)
})

bodyElement.addEventListener('input', (e) => {
    const note = updateNote(noteID, {
        body: e.target.value
    })
    lastEditedElement.textContent = lastEdited(note.updatedAt)
})

removeElement.addEventListener('click', () => {
    removeNote(noteID)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === notes) {
        initialiseEditPage(noteID)
    }
})