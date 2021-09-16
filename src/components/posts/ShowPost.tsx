import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import { Post } from "../../models/post/interfaces";
import { Comment } from "../../models/comment/interface";
import { loadComments, createComment } from "../../redux/actions/commentActions";
import CommentForm from "../comments/CommentForm";
import CommentsList from "../comments/CommentsList";
import { useParams } from "react-router-dom";
import { loadPosts } from "../../redux/actions/postActions";

interface ShowPostProps {
  comments: Comment[] | null;
  post: Post;
  posts: Post[];
  postId: string;
  loadComments: () => Promise<void>;
  loadPosts: () => Promise<void>;
  createComment: (comment: Comment) => Promise<void>;
}

interface RouteParams {
  postId: string;
}

function ShowPost(props: ShowPostProps): JSX.Element {
  const { comments, post, posts, createComment, loadComments, loadPosts } = props;
  const [saving, setSaving] = useState(false);
  const { postId } = useParams<RouteParams>();

  useEffect(() => {
    if (comments?.length === 0) {
      loadComments().catch(error => {
        toast.warning("Loading comments failed" + error);
      });
    }
  }, []);

  const handleSave = (name: string, email: string, body: string) => {
    const newComment: Comment = {
      postId: Number(postId),
      name,
      email,
      body
    };
    setSaving(true);
    createComment(newComment);
    toast.success("Comment saved.");
    setSaving(false);
  };
  console.log(post);

  return typeof post === 'undefined'
    ? (<Spinner />)
    : (
      <>
        <table className="table">
          <thead>
            <tr>
              <th>Title: {post.title}</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td>
                {post.body}
              </td>
            </tr>
          </tbody>
        </table>
        <CommentsList {...{comments}} />
        <CommentForm
          onSave={handleSave}
          saving={saving}
        />
      </>
    );
}

export function getCommentsById(comments: Comment[], postId: number): Comment[] {
  let commentsById: Comment[] = [];
  commentsById = comments.filter(comments => comments.postId === postId);
  return commentsById;
}

interface MapStateToPropsInterface {
  posts: Post[];
  comments: Comment[];
  post: Post
}

function mapStateToProps(state: any, ownProps: any): MapStateToPropsInterface {
  const postId = Number(ownProps.match.params.postId);
  let comments: Comment[] = [];
  const post: Post = state.posts.find((p: Post) => p.id === postId);
  comments = getCommentsById(state.comments, postId);
  return {
    posts: state.post,
    comments,
    post
  };
}

const mapDispatchToProps = {
  loadComments,
  createComment
};

export default connect<MapStateToPropsInterface, {}>(mapStateToProps, mapDispatchToProps)(ShowPost);
