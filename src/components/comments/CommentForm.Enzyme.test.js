/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-undef */
import React from "react";
import CommentForm from "./CommentForm";
import { shallow } from "enzyme";

function renderCommentForm(args) {
  const defaultProps = {
    saving: false,
    errors: {},
    onSave: () => {},
  };

  const props = { ...defaultProps, ...args };
  return shallow(<CommentForm {...props} />);
}

it("renders form and header", () => {
  const wrapper = renderCommentForm();
  // console.log(wrapper.debug());
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h2").text()).toEqual("Add a comment");
});

it('labels save buttons as "Save" when not saving', () => {
  const wrapper = renderCommentForm();
  expect(wrapper.find("button").text()).toBe("Save");
});

it('labels save button as "Saving..." when saving', () => {
  const wrapper = renderCommentForm({ saving: true });
  expect(wrapper.find("button").text()).toBe("Saving...");
});
