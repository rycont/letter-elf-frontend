const modal = ({
    content
}) => {
    const el = document.createElement('div')
    el.classList.add('MODAL')
    el.innerHTML = `
        <div>
            ${content.outerHTML || content}
        </div>
    `
    return el
}

export const open = (content) => {
    document.body.appendChild(modal({ content }))
}