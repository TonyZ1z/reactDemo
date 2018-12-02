import React, { Component } from 'react'
import Comment from "./Comment";

class CommentList extends Component {

    // in case that when this comments is used without props
    static defaultProps = {
        comments: []
    }

    render() {

        // init a list which is made up with dic,just test data
        // const comments = [
        //     {username: 'Jerry', content: 'Hello'},
        //     {username: 'Tomy', content: 'World'},
        //     {username: 'Lucy', content: 'Good'}
        // ]

        // return (
        //     // use map to visit every part in the list and give its index as its key
        //     // then create several div component
        //     <div>{this.props.comments.map((comment, i) => <Comment comment={comment} key={i}/>)}
        //     </div>
        // )
        return (
            <div>
                {this.props.comments.map((comment, i) =>
                    <Comment comment={comment} key={i} />
                )}
            </div>
        )
    }
}

export default CommentList
