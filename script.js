import { database } from './database.js'
import { open } from './modal.js'

const emailValidate =  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i

const sendLetter = async () => {
    const content = document.getElementById('content').value
    const target = document.getElementById('target').value
    open(`
    <div class="success_modal">
        <h1>좋은 편지에요✌</h1>
        <p>곧 요정이 확인하고 전달해줄거에요.
        아래에 이메일을 적어주시면 전달 상황을 알려줄게요.</p>
        <input placeholder="이메일을 입력해주세요" id="email">
        <div class="button" id="registerEmail">
            등록하기
            <img src="./next.svg">
        </div>
    </div>
    `)
    const letterDoc = await database.add({
        content,
        target
    })

    const emailInput = document.getElementById('email')
    const setNoticeText = (text) => {
        emailInput.previousElementSibling.removeChild(emailInput.previousElementSibling.childNodes[0])
        emailInput.previousElementSibling.appendChild(document.createTextNode(text))
    }
    document.getElementById('registerEmail').addEventListener('click', async () => {
        if(emailInput.value && emailValidate.test(emailInput.value)){
            await database.doc(letterDoc.id).set({
                sender: emailInput.value
            }, { merge: true })
            return setNoticeText('이메일이 등록되었습니다 :)')
        }
        
        setNoticeText('올바른 이메일을 입력해주세요')
    })
}

document.getElementById('send').addEventListener('click', sendLetter)
