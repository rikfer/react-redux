import React from "react";
import Spinner from "../common/Spinner";
import { Comment } from "../../models/comment/interface";
import { connect } from "react-redux";

import "./CommentList.css";

interface CommentsListProps {
    loading: boolean,
    comments: Comment[] | null;
}

function CommentsList(props: CommentsListProps): JSX.Element {
    const { loading, comments } = props;

    const numberOfComments = comments?.length;

    return loading
        ? (<Spinner />)
        : (
            <>
                <div className="container" >
                    <div className="row">
                        <div className="panel panel-default widget">
                            <div className="panel-heading">
                                <span className="glyphicon glyphicon-comment"></span>
                                <h4 className="panel-title">
                                    Recent Comments</h4>
                                <span className="label label-info">{numberOfComments}</span>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    {comments?.map((comment: Comment, index) => {
                                        return (
                                            <li className="list-group-item" key={index}>
                                                <div className="row">
                                                    <div className="col-xs-10 col-md-11">
                                                        <div>
                                                            <a href="#">
                                                                {comment.name}</a>
                                                            <div className="mic-info">
                                                                By: <a href="#">{comment.email}</a>
                                                            </div>
                                                        </div>
                                                        <div className="comment-text">
                                                            {comment.body}
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>);
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
}

function mapStateToProps(state: any) {
    return {
        posts: state.posts,
        loading: state.apiCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(CommentsList);