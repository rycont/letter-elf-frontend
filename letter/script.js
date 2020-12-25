import { database } from '../database.js'
(async () => {
    document.getElementById('article_content').appendChild(document.createTextNode((await database.doc(location.hash.slice(1)).get()).data().content))
})()
