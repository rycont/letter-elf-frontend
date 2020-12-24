import { database } from './database.js'

const sendLetter = async () => {
    const content = document.getElementById('content').value
    const sender = document.getElementById('sender').value
    const target = document.getElementById('target').value
    await database.add({
        content,
        sender,
        target
    })
}

document.getElementById('send').addEventListener('click', sendLetter)
