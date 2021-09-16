import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadPosts } from "../../redux/actions/postActions";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import { Post } from "../../models/post/interfaces";
import PostsList from "./PostList";

interface PostsPageProps {
    posts: Post[],
    loading: boolean,
    loadPosts: () => Promise<void>
}

function PostsPage(props: PostsPageProps): JSX.Element {
    const { posts, loading, loadPosts } = props;

    useEffect(() => {
        if (posts.length === 0) {
            loadPosts().catch((error: any) => {
                toast.error("Load posts failed. " + error.message, { autoClose: false });
            });
        }
    }, []);

    return (
        <>
            <h2>Posts</h2>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <PostsList
                        posts={posts}
                    />
                </>
            )}
        </>
    );
}

function mapStateToProps(state: any) {
    return {
        posts: state.posts,
        loading: state.apiCallsInProgress > 0
    };
}

const mapDispatchToProps = {
    loadPosts
};

export default connect(mapStateToProps,mapDispatchToProps)(PostsPage);
