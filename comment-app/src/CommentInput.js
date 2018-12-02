import React, { Component } from 'react'

class CommentInput extends Component {
    constructor(){
        super()
        this.state = {
            username:'',
            postContent:''
        }
    }

    // listen to the username input
    handleChangeUsername(event){
        this.setState({
            username: event.target.value
        })
    }

    // listen to the content input
    handleChangePostContent(event){
        this.setState({
            postContent: event.target.value
        })
    }

    // the submit event
    handleSubmit(){
        if(this.props.onSubmit){
            this.props.onSubmit({
                username:this.state.username,
                postContent:this.state.postContent
            })
        }
        // clear the postContent but keep the username
        this.setState({ postContent: ''})
    }
    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username} onChange={this.handleChangeUsername.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea value={this.state.postContent} onChange={this.handleChangePostContent.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput
