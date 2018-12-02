import React, {Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {

    // init the comments list to store all comments
    constructor () {
        super()
        this.state = {
            comments: []
        }
    }

    handleSubmitComment (comment) {

        // dealing with simple checking
        // if (!comment) return alert('you can\'t submit without username and comment content')
        if (!comment.username) return alert('Please input your username')
        if (!comment.postContent) return alert('Please input the content')
        this.state.comments.push(comment)
        this.setState({
            comments: this.state.comments
        })
    }

    render() {
        return (
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp
