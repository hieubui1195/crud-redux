import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import EditPost from '../components/EditPost';
import { bindActionCreators } from 'redux';
import * as PostActions from '../actions/PostActions';
import PropTypes from 'prop-types';

class AllPostContainer extends Component {
    static propTypes = {
        posts: PropTypes.array.isRequired
    };

    render() {
        return (
            <div>
                <h1>
                    All Posts
                </h1>
                {
                    this.props.posts.map((post) => (
                        <div key={post.id}>
                            {
                                post.editing 
                                ? <EditPost 
                                    post={ post } 
                                    key={ post.id } 
                                    updatePost={ this.props.actions.updatePost } /> 
                                : <Post post={ post } 
                                    key={ post.id } 
                                    editPost={ this.props.actions.editPost } 
                                    deletePost={ this.props.actions.deletePost } />}
                        </div>
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(PostActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPostContainer);
