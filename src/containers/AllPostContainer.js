import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import EditPost from '../components/EditPost';

class AllPostContainer extends Component {
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
                                ? <EditPost post={post} key={post.id} /> 
                                : <Post post={post} key={post.id} />}
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

export default connect(mapStateToProps)(AllPostContainer);
