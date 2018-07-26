import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editPost, deletePost } from '../actions/PostActions';

class Post extends Component {
    render() {
        return (
            <div>
                <h2>
                    { this.props.post.title }
                </h2>
                <p>
                    { this.props.post.content }
                </p>
                <button onClick={ () => this.props.editPost(this.props.post.id) }>
                    Edit
                </button>
                <button onClick={ () => this.props.deletePost(this.props.post.id) }>
                    Delete
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editPost: (id) => {
            dispatch(editPost(id));
        },

        deletePost: (id) => {
            dispatch(deletePost(id));
        }
    }
};

export default connect(null, mapDispatchToProps)(Post);
