import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../../models/post/interfaces";

interface PostsListProps {
    posts: Post[];
}

function PostsList(props: PostsListProps): JSX.Element {
    const { posts } = props;
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {posts.map(post => {
                    return (
                        <tr key={post.id}>
                            <td>
                                <Link to={"/post/" + post.id.toString()}>{post.title}</Link>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default PostsList;
