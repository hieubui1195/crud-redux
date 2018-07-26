import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePost } from '../actions/PostActions';

class EditPost extends Component {
    render() {
        const { updatePost } = this.props;
        console.log(updatePost);
        return (
            <div>
                <form onSubmit={ this.handleEdit }>
                    <input required type="text" 
                        ref={ (input) => this.getTitle = input }
                        defaultValue={ this.props.post.title }
                        placeholder="Enter Post Title" />
                    <br />
                    <textarea required rows="5" cols="20"
                        ref= { (input) => this.getContent = input }
                        defaultValue={ this.props.post.content }
                        placeholder="Enter Post Content" />
                    <br />
                    <button>
                        Edit
                    </button>
                </form>
            </div>
        );
    }

    handleEdit = (e) => {
        e.preventDefault();
        const id = this.props.post.id;
        const newTitle = this.getTitle.value;
        const newContent = this.getContent.value;
        this.props.updatePost(id, newTitle, newContent);
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePost: (id, newTitle, newContent) => {
            dispatch(updatePost(id, newTitle, newContent));
        }
    }
};

export default connect(null, mapDispatchToProps)(EditPost);
