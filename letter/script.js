import { database } from '../database.js'
(async () => {
    const letter = database.doc(location.hash.slice(1))
    document.getElementById('article_content').appendChild(document.createTextNode((await letter.get()).data().content))
    letter.set({
        target: 'SENDED',
        sender: 'SENDED'
    }, {merge: true})
})()
