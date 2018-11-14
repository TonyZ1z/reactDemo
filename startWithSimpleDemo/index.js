// ::String => ::Document
const createDOMFromString = (domString) => {
    const div = document.createElement('div')
    div.innerHTML = domString
    return div
}

// class likeButton {
//     constructor () {
//         this.state = { isLike:false }
//     }
//
//     changeText () {
//         const likeText = this.el.querySelector('.like_text')
//         console.log(likeText)
//         this.state.isLike = !this.state.isLike
//         likeText.innerHTML = this.state.isLike ? 'cancel':'like'
//     }
//
//     // this func directly return a html code
//     // render () {
//     //     return `
//     //         <button class="like_btn">
//     //             <span class="like_text">like</span>
//     //         </button>
//     //     `
//     // }
//
//     // and now it will change the string into the dom element first
//     render () {
//         this.el = createDOMFromString(`
//             <button class="like_btn">
//                 <span class="like_text">like</span>
//             </button>
//         `)
//         // bind the clickEvent func to the dom element
//         this.el.addEventListener('click',this.changeText.bind(this),false)
//         // this.el.addEventListener('click', ()=>console.log('click'), false)
//         return this.el
//     }
// }


// so this is another way to build likeButton class 2018.11.13
// so in this class,the user click the button,it use the changeText func,this func call the setState func,the setState func
// will use the render func again and it return a new dom element
// click -> changeText(change the state to its opposite) -> setState -> get a new dom element
class likeButton{
    constructor (){
        this.state = {isLike:false}
    }

    setState(state){
        const oldOne = this.el
        this.state = state
        // after it set the state,it will call the render func to rebuild a new dom element
        this.el = this.render()
        // if(this.onStateChange){
        //     this.onStateChange(oldOne,this.el)
        // }
        this.onStateChange(oldOne,this.el)
    }

    changeText(){
        this.setState({isLike:!this.state.isLike})
        // set to its opposite,the way to set just like the constructor func
    }

    render(){
        this.el = createDOMFromString(`
            <button class="like_btn">
                <span class="like_text">${this.state.isLike?'cancel':'like'}</span>
            </button>`
        )
        this.el.addEventListener('click',this.changeText.bind(this),false)
        return this.el
    }

}

// here is the father class
class Component {
    // 2018.11.14
    // add constructor func
    constructor(props = {}){
        this.props = props
    }

    setState(state){
        const oldOne = this.el
        this.state = state
        this._renderDOM()
        {
            if(this.onStateChange){
                this.onStateChange(oldOne,this.el)
            }
        }
    }

    // this func is a private func
    _renderDOM(){
        this.el = createDOMFromString(this.render())
        if(this.onClick){
            this.el.addEventListener('click',this.onClick.bind(this),false)
        }
        return this.el
    }
}

// and this is a mount func,it refresh the page
const mount = (component,wrapper) => {
    wrapper.appendChild(component._renderDOM())
    component.onStateChange = (oldOne,newOne) => {
        wrapper.insertBefore(newOne,oldOne)
        wrapper.removeChild(oldOne)
    }
}

// here we rewrite the button class
class LikeButton extends Component{
    // when use this class,give the props
    constructor(props){
        // transfer the props to the father class
        super(props) // use to visit the class Component's func
        this.state = {
            isLike:false
        }
    }

    onClick(){
        this.setState({
            isLike:!this.state.isLike
        })
    }

    render(){
        if(this.props.bgColor)  {
            return `
         <button class="like_btn" style="background-color: ${this.props.bgColor}">
             <span class="like_text">${this.state.isLike ? 'cancel' : 'like'}</span>
         </button>`
        }else   {
            return `
         <button class="like_btn">
             <span class="like_text">${this.state.isLike ? 'cancel' : 'like'}</span>
         </button>`
        }
    }
}

class changeColorButton extends Component{
    constructor(props){
        super(props)
        // console.log(props)
        // console.log(props.color)
        // console.log(props.color[0])
        // console.log(props.color[1])
        this.state = {
            index:0,
            color:this.props.color[0]
        }
    }

    onClick(){
        if(this.state.index){
            // index === 1
            // console.log(this.state.index)
            this.setState({
                index:this.state.index-1,
                color:this.props.color[0]
            })
        }else{
            // console.log('1111')
            // console.log(this.state.color[1])
            this.setState({
                index:this.state.index+1,
                color:this.props.color[1]
            })
        }
    }
    render(){
        return `
         <button class="like_btn" style="background-color: ${this.state.color}">
             <span class="like_text">changeColor</span>
         </button>`
    }
}
