import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// in this class which calls Header,you can use the tag TestClass as your tag name
// which make it easier to use it again and again
class Header extends Component{
    handleClickOnHeader(e){
        console.log("now you click the Header component")
        console.log(e.target.innerHTML)
    }

    render(){
        const root = "root2"
        return (
            <div id={root} onClick={this.handleClickOnHeader}>
                <h1>this is <b>Header</b> component,below is TestClass</h1>
                <TestClass />
            </div>
        )
    }
}

class Content extends Component{
    handleClickOnContent(){
        console.log(this)
    }
    //  here we bind the object with this function,so that in this function you can use 'this' to get the object
    render(){
        return(
            <div>
                <p>this is <b onClick={this.handleClickOnContent.bind(this)}>Content</b> component</p>
            </div>
        )
    }
}

class Footer extends Component{
    // but attention,the object is behind the params
    handleClickOnFooter(word,obj){
        console.log(this)
        console.log(word)
    }

    // by the way we can transfer the object with params,like:
    render(){
        return(
            <div>
                <span>this is <b onClick={this.handleClickOnFooter.bind(this,'yingyingying')}>Footer</b> component</span>
            </div>
        )
    }
}
// so what if I wanna bind two function with one single event?
class TestBindDouble extends Component{
    bark(){
        console.log("bark here")
    }

    run(){
        console.log("then it ran away")
    }

    // below func used this,so when we use this func we need to bind it with an object
    handleClickOnTestBindDouble(){
        this.bark()
        this.run()
    }

    render(){
        return(
            <div>
                <p onClick={this.handleClickOnTestBindDouble.bind(this)}>DOG</p>
            </div>
        )
    }
}

// of course there is another way to complete this
class TestBindDouble2 extends Component{
    bark(){
    console.log("bark here")
}

    run(){
        console.log("then it ran away")
    }

    // below func used this,so when we use this func we need to bind it with an object
    handleClickOnTestBindDouble(){
        this.bark()
        this.run()
    }

    render(){
        // when write like this,you gave the tag <p></p> to the handleClick func
        return(
            <div>
                <p onClick={()=>{this.handleClickOnTestBindDouble()}}>DOG2</p>
            </div>
        )
    }
}

class TestClass extends Component {
    renderAandB(A, B) {
        const judge = 1
        return judge ? A : B
    }

    render() {
        return (
            <div>
                <h1>
                    react demo
                </h1>
                {this.renderAandB(
                    <strong>here is A</strong>,
                    <strong>here is B</strong>
                )}
            </div>
        )
    }
}

class LikeButton extends Component{
    constructor(){
        // the super() function is a must,because this class is one of the child class of the class Component
        // this class hasn't its own object,it just only use the object which is inherited from its father class
        // but the key word 'this' is refer to an object and this class hasn't its own object,if don't use super(),if will haven't object forever
        // and you can't set Attributes to an object which is not existed.

        // In a word,in the child class you wanna use key word 'this',you must use 'super()' first
        super()
        this.state = { isLike: false }
    }

    handleClickOnLikeButton(){
        // setState is react's func,it writes like below:
        // this.setState({
        //     key1: value1,
        //     key2: value2
        // })
        // also,the setState function is like setTimeOut,it will store the state into a query
        // then the browser run other js code.In the end,it will change the state into what you set
        console.log('The setState function hadn\'t run yet,the state is'+this.state.isLike)
        this.setState({
            isLike: !this.state.isLike
        })
        // this.setState({ count: 0 }) // => this.state.count 还是 undefined
        // this.setState({ count: this.state.count + 1}) // => undefined + 1 = NaN
        // this.setState({ count: this.state.count + 2}) // => NaN + 2 = NaN

        // use this to add the attribute count's value
        this.setState((preState) => {
            return {
                count:preState.count?preState.count:0
            }
        })
        this.setState((preState) => {
            return {
                count:preState.count+1
            }
        })
        console.log('The setState function had run ,the state is'+this.state.isLike)
    }

    render(){
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {/*{this.state.isLike?'don\'t like':'like'} this is emoji = =*/this.state.count?this.state.count:"undefined"}
            </button>
        )
    }
}


class IndexClass extends Component{
    render(){

        return(
            <div>
                <Header/>
                <Content/>
                <Footer/>
                <TestBindDouble/>
                <TestBindDouble2/>
            </div>
        )
    }
}

class Index extends Component{
    render(){
        return(
            <div>
                <LikeButton/>
            </div>
        )
    }
}

ReactDOM.render(<IndexClass />,document.getElementById('root'));

ReactDOM.render(<Index/>,document.getElementById('root2'));
// ReactDOM.render(<TestClass />, document.getElementById('root'));
// ReactDOM.render(<TestClass />, document.getElementById('root1'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
