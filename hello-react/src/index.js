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
        return (
            <div onClick={this.handleClickOnHeader}>
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

ReactDOM.render(<IndexClass />, document.getElementById('root'));
// ReactDOM.render(<TestClass />, document.getElementById('root'));
// ReactDOM.render(<TestClass />, document.getElementById('root1'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
