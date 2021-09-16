/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { render } from "@testing-library/react";
import CommentForm from "./CommentForm";

function renderCommentForm(args) {
  const defaultProps = {
    saving: false,
    errors: {},
    onSave: () => {},
  };

  const props = { ...defaultProps, ...args };
  return render(<CommentForm {...props} />);
}

it("should render Add Comment header", () => {
  const { getByText } = renderCommentForm();
  getByText("Add a comment");
});

it('should label save button as "Save" when not saving', () => {
  const { getByText } = renderCommentForm();
  getByText("Save");
});

it('should label save button as "Saving..." when saving', () => {
  const { getByText } = renderCommentForm({ saving: true });
  getByText("Saving...");
});
