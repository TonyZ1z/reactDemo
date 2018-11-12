// ::String => ::Document
const createDOMFromString = (domString) => {
    const div = document.createElement('div')
    div.innerHTML = domString
    return div
}

class likeButton {
    constructor () {
        this.state = { isLike:false }
    }

    changeText () {
        const likeText = this.el.querySelector('.like_text')
        console.log(likeText)
        this.state.isLike = !this.state.isLike
        likeText.innerHTML = this.state.isLike ? 'cancel':'like'
    }

    // this func directly return a html code
    // render () {
    //     return `
    //         <button class="like_btn">
    //             <span class="like_text">like</span>
    //         </button>
    //     `
    // }

    // and now it will change the string into the dom element first
    render () {
        this.el = createDOMFromString(`
            <button class="like_btn">
                <span class="like_text">like</span>
            </button>
        `)
        // bind the clickEvent func to the dom element
        this.el.addEventListener('click',this.changeText.bind(this),false)
        // this.el.addEventListener('click', ()=>console.log('click'), false)
        return this.el
    }
}
