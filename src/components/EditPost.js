import React, { Component } from 'react';

class EditPost extends Component {
    render() {
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

export default EditPost;
